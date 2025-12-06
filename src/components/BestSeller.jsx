import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => (item.bestseller));
    setBestSeller(bestProduct.slice(0, 5))
  }, [products])

  return (
    // Full-bleed breakout to allow full width
    <div className='relative w-screen left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] mb-10 bg-white'>
      <div className="w-full px-3 sm:px-4 lg:px-6">

        <div className='text-center pt-2 pb-8'>
          <div className="flex items-center justify-between mb-2">
            <div className="h-[2px] bg-gray-800 flex-grow"></div>
            <h2 className="mx-2 text-2xl sm:text-3xl font-bold tracking-widest text-gray-900 uppercase whitespace-nowrap">
              Best Sellers
            </h2>
            <div className="h-[2px] bg-gray-800 flex-grow"></div>
          </div>
          <p className='w-full sm:w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 max-w-2xl leading-relaxed'>
            Discover our most popular products, loved by makers and engineers alike. From starter kits to advanced modules, these are the community favorites.
          </p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-10 mb-10'>
          {
            bestSeller.map((item, index) => (
              <ProductItem key={index} id={item.id || item._id} name={item.name} image={item.image} price={item.price} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default BestSeller;
