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
        <section className='relative w-screen left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] bg-white mb-10'>
            <div className='w-full px-3 sm:px-4 lg:px-6 pt-2 pb-8'>
                <div className="flex items-center justify-between mb-2">
                    <div className="h-[2px] bg-gray-800 flex-grow"></div>
                    <h2 className="mx-2 text-2xl sm:text-3xl font-bold tracking-widest text-gray-900 uppercase">
                        NEW LAUNCH
                    </h2>
                    <div className="h-[2px] bg-gray-800 flex-grow"></div>
                </div>
                <p className='w-full sm:w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 max-w-2xl leading-relaxed text-center'>
                    Check out our latest arrivals! Fresh components and boards to power your next big idea.
                </p>
            </div>

            <div className="w-full px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-10 px-4 sm:px-0'>
                    {
                        newLaunch.map((item, index) => (
                            <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default NewLaunch
