import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const NewLaunch = () => {

    const { products } = useContext(ShopContext);
    const [newLaunch, setNewLaunch] = useState([]);

    useEffect(() => {
        const newProduct = products.filter((item) => (item.newLaunch));
        setNewLaunch(newProduct.slice(0, 5))
    }, [products])

    return (
        <div className='my-16'>
            <div className='text-center text-3xl py-8'>
                <Title text1={'NEW'} text2={'LAUNCH'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 max-w-2xl leading-relaxed'>
                    Check out our latest arrivals! Fresh components and boards to power your next big idea.
                </p>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-10 px-4 sm:px-0'>
                {
                    newLaunch.map((item, index) => (
                        <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
                    ))
                }
            </div>
        </div>
    )
}

export default NewLaunch
