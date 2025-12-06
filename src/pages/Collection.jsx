import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {

  const { products, search, showSearch, performSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent')

  const toggleCategory = (e) => {

    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setCategory(prev => [...prev, e.target.value])
    }

  }

  const toggleSubCategory = (e) => {

    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {

    let productsCopy = products.slice();

    if (showSearch && search) {
      // Use Fuse.js fuzzy search
      productsCopy = performSearch(search);
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }

    setFilterProducts(productsCopy)

  }

  const sortProduct = () => {

    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)));
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)));
        break;

      default:
        applyFilter();
        break;
    }

  }

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products])

  useEffect(() => {
    sortProduct();
  }, [sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/* Filter Options */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Development Boards'} onChange={toggleCategory} /> Development Boards
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Sensors'} onChange={toggleCategory} /> Sensors
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Robotics'} onChange={toggleCategory} /> Robotics
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Components'} onChange={toggleCategory} /> Components
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'DIY Kits'} onChange={toggleCategory} /> DIY Kits
            </p>
          </div>
        </div>
        {/* SubCategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Microcontrollers'} onChange={toggleSubCategory} /> Microcontrollers
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'SBCs'} onChange={toggleSubCategory} /> SBCs
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Motors'} onChange={toggleSubCategory} /> Motors
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Displays'} onChange={toggleSubCategory} /> Displays
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Modules'} onChange={toggleSubCategory} /> Modules
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Drones'} onChange={toggleSubCategory} /> Drones
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'3D Printers'} onChange={toggleSubCategory} /> 3D Printers
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className='flex-1'>

        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          {/* Porduct Sort */}
          {/* Product Sort */}
          <div className='relative'>
            <button
              onClick={() => setShowSort(!showSort)}
              className='border border-gray-800 text-sm px-4 py-2 rounded-full bg-black text-gray-400 flex items-center gap-2 cursor-pointer hover:text-white transition-colors'
            >
              Sort by: {sortType === 'relavent' ? 'Relevant' : sortType === 'low-high' ? 'Low to High' : 'High to Low'}
              <img src={assets.dropdown_icon} className={`h-3 transition-transform ${showSort ? 'rotate-180' : ''} invert`} alt="" />
            </button>

            {/* Custom Dropdown Menu */}
            {showSort && (
              <div className='absolute right-0 mt-2 w-48 bg-black border border-gray-800 rounded-lg shadow-xl z-50 overflow-hidden'>
                <p
                  onClick={() => { setSortType('relavent'); setShowSort(false); }}
                  className='px-4 py-2 text-sm text-gray-400 hover:bg-gray-900 hover:text-white cursor-pointer'
                >
                  Relevant
                </p>
                <p
                  onClick={() => { setSortType('low-high'); setShowSort(false); }}
                  className='px-4 py-2 text-sm text-gray-400 hover:bg-gray-900 hover:text-white cursor-pointer'
                >
                  Low to High
                </p>
                <p
                  onClick={() => { setSortType('high-low'); setShowSort(false); }}
                  className='px-4 py-2 text-sm text-gray-400 hover:bg-gray-900 hover:text-white cursor-pointer'
                >
                  High to Low
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProducts.length > 0 ? (
            filterProducts.map((item, index) => (
              <ProductItem key={index} name={item.name} id={item.id || item._id} price={item.price} image={item.image} />
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center mt-10">
              <p className="text-xl font-medium text-gray-600 mb-4">
                No results found for "{search}"
              </p>
              <p className="text-gray-500 mb-8">
                Try checking your spelling or use different keywords.
              </p>

              <div className="w-full border-t pt-8">
                <Title text1={'YOU'} text2={'MIGHT ALSO LIKE'} />
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 mt-6'>
                  {/* Show random 4 products as recommendations */}
                  {products.slice(0, 4).map((item, index) => (
                    <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  )
}

export default Collection
