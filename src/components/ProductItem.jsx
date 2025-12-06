import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, name, price }) => {

  const { formatCurrency, addToCart, products } = useContext(ShopContext);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const product = products.find(p => p._id === id || p.id === id);
    const size = product?.sizes?.[0] || 'M';
    addToCart(product?._id || id, size);
  }

  // Mocking discount for visual match with reference
  const originalPrice = price * 1.2;
  const discount = originalPrice - price;

  return (
    <Link onClick={() => scrollTo(0, 0)} className='group block text-gray-700 cursor-pointer flex flex-col items-center p-4 border border-transparent hover:border-gray-200 hover:shadow-lg rounded-lg transition-all duration-300 bg-white' to={`/product/${id}`}>

      {/* Image Section */}
      <div className='relative w-full overflow-hidden mb-2 rounded-lg'>
        {/* Eye Icon for View Details */}
        <div className='absolute top-2 left-2 bg-white text-gray-900 p-2 rounded-full shadow-md z-10 transition-colors duration-300 hover:bg-gray-900 hover:text-white flex items-center justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
        </div>
        <img className='w-full h-40 md:h-48 object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500 ease-in-out' src={image[0]} alt={name} />
      </div>

      {/* Details Section */}
      <div className='w-full text-center space-y-1.5 mb-3 flex-grow'>
        <h3 className='text-sm md:text-base font-medium text-gray-800 line-clamp-2 leading-tight underline min-h-[2.5em]'>{name}</h3>

        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center justify-center gap-2">
            <span className="text-xs md:text-sm text-gray-400 line-through font-medium">{formatCurrency(originalPrice)}</span>
            <span className='text-sm md:text-base font-bold text-blue-500'>{formatCurrency(price)}</span>
          </div>
          <div className="bg-green-500 text-white text-[10px] md:text-xs px-3 py-1 rounded-sm font-medium shadow-sm">
            Save {formatCurrency(discount)}
          </div>
        </div>
      </div>

      {/* Action Button */}
      <button
        onClick={handleAddToCart}
        className='w-full bg-white border border-gray-900 text-gray-900 py-2 rounded-sm text-xs md:text-sm font-bold uppercase tracking-wider hover:bg-gray-900 hover:text-white transition-colors duration-300 mt-auto'>
        ADD TO CART
      </button>

    </Link>
  )
}

export default ProductItem
