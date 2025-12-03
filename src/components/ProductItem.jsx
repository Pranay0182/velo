import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, name, price }) => {

  const { formatCurrency } = useContext(ShopContext);

  return (
    <Link onClick={() => scrollTo(0, 0)} className='group block text-gray-700 cursor-pointer' to={`/product/${id}`}>
      <div className='relative overflow-hidden rounded-lg bg-gray-100 mb-3'>
        <img className='w-full h-64 object-contain mix-blend-multiply p-4 group-hover:scale-110 transition-transform duration-500 ease-in-out' src={image[0]} alt={name} />

        {/* Overlay Button */}
        <div className='absolute bottom-0 left-0 right-0 bg-black/80 text-white py-2 text-center text-sm font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300'>
          View Details
        </div>
      </div>

      <div className='space-y-1'>
        <p className='text-sm font-medium text-gray-900 truncate group-hover:text-black transition-colors'>{name}</p>
        <p className='text-sm font-bold text-gray-900'>{formatCurrency(price)}</p>
      </div>
    </Link>
  )
}

export default ProductItem
