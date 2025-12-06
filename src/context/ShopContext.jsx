// src/context/ShopContext.jsx
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Fuse from 'fuse.js';
import { supabase } from "../config/supabaseClient"; // Ensure this file exists

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '₹';
    const delivery_fee = 100;
    const navigate = useNavigate();

    // State Variables
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState(''); // We keep 'token' state for compatibility with your UI logic
    const [user, setUser] = useState(null);

    // Currency Formatter
    const formatterINR = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    });

    const formatCurrency = (value) => {
        if (value === null || value === undefined) return '';
        const num = Number(value);
        if (isNaN(num)) return String(value);
        return formatterINR.format(num);
    }

    // ---------------------------------------------
    // 1. Fetch Products from Supabase
    // ---------------------------------------------
    const getProductsData = async () => {
        try {
            // Select all columns from 'products' table
            const { data, error } = await supabase
                .from('products')
                .select('*')
                .order('date', { ascending: false }); // Optional: Show newest first

            if (error) throw error;

            if (data) {
                setProducts(data);
            }
        } catch (error) {
            console.error("Error fetching products:", error);
            toast.error(error.message);
        }
    }

    // ---------------------------------------------
    // 2. Cart Logic (Supabase + Local State)
    // ---------------------------------------------

    // Helper: Sync with Supabase 'cart_items' table
    const syncCartToDb = async (itemId, size, quantity) => {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        try {
            if (quantity > 0) {
                // Upsert: Update if exists, Insert if not
                const { error } = await supabase
                    .from('cart_items')
                    .upsert({
                        user_id: user.id,
                        product_id: itemId,
                        size: size,
                        quantity: quantity
                    }, { onConflict: 'user_id, product_id, size' });

                if (error) throw error;
            } else {
                // Remove item if quantity is 0
                const { error } = await supabase
                    .from('cart_items')
                    .delete()
                    .match({ user_id: user.id, product_id: itemId, size: size });

                if (error) throw error;
            }
        } catch (error) {
            console.error("Cart Sync Error:", error);
            toast.error("Failed to sync cart");
        }
    };

    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error('Select Product Size');
            return;
        }

        // 1. Optimistic Update (Update Local State First)
        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);

        // 2. Sync to DB if logged in
        if (token) {
            await syncCartToDb(itemId, size, cartData[itemId][size]);
        }
    }

    const updateQuantity = async (itemId, size, quantity) => {
        // 1. Optimistic Update
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);

        // 2. Sync to DB if logged in
        if (token) {
            await syncCartToDb(itemId, size, quantity);
        }
    }

    // Fetch user cart from DB and convert to Frontend format
    const getUserCart = async (userId) => {
        try {
            const { data, error } = await supabase
                .from('cart_items')
                .select('*')
                .eq('user_id', userId);

            if (error) throw error;

            // Transform Flat SQL Data -> Nested Object { itemId: { size: qty } }
            let tempCart = {};
            data.forEach(item => {
                if (!tempCart[item.product_id]) {
                    tempCart[item.product_id] = {};
                }
                tempCart[item.product_id][item.size] = item.quantity;
            });

            setCartItems(tempCart);

        } catch (error) {
            console.error("Error fetching cart:", error);
            toast.error(error.message);
        }
    }

    // ---------------------------------------------
    // 3. Utility Functions
    // ---------------------------------------------

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (error) { }
            }
        }
        return totalCount;
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product.id === items); // Note: Changed _id to id
            if (itemInfo) {
                for (const item in cartItems[items]) {
                    try {
                        if (cartItems[items][item] > 0) {
                            totalAmount += itemInfo.price * cartItems[items][item];
                        }
                    } catch (error) { }
                }
            }
        }
        return totalAmount;
    }

    const performSearch = (query) => {
        if (!query) return products;
        const options = {
            keys: ['name', 'category', 'subCategory', 'description'],
            threshold: 0.4,
            distance: 100,
        };
        const fuse = new Fuse(products, options);
        return fuse.search(query).map(item => item.item);
    };

    // ---------------------------------------------
    // 4. Initial Load & Auth Listeners
    // ---------------------------------------------

    useEffect(() => {
        getProductsData();

        // Check active session on load
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (session) {
                setToken(session.access_token);
                setUser(session.user);
                getUserCart(session.user.id);
            }
        });

        // Listen for Auth Changes (Login/Logout)
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            if (session) {
                setToken(session.access_token);
                setUser(session.user);
                getUserCart(session.user.id);
            } else {
                setToken('');
                setUser(null);
                setCartItems({}); // Clear cart on logout
            }
        });

        return () => subscription.unsubscribe();
    }, []);

    // ---------------------------------------------
    // Context Value
    // ---------------------------------------------
    const value = {
        products, currency, delivery_fee, formatCurrency,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart, setCartItems,
        getCartCount, updateQuantity,
        getCartAmount, navigate,
        setToken, token, user, performSearch
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;