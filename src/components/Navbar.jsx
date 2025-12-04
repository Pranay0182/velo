import React, { useContext, useState, useEffect, useRef } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ShopContext } from '../context/ShopContext';


const categories = [
  { label: 'DIY Kits', to: '/collection/diy-kits' },
  { label: 'AI Hardware', to: '/collection/ai-hardware' },
  { label: 'Raspberry Pi', to: '/collection/raspberry-pi' },
  { label: 'Arduino', to: '/collection/arduino' },
  { label: 'Nvidia Jetson', to: '/collection/nvidia-jetson' },
  { label: 'XIAO Series', to: '/collection/xiao-series' },
  { label: 'Electronic Components', to: '/collection/electronic-components' },
  { label: 'Electronic Modules', to: '/collection/electronic-modules' },
  { label: 'Drones/UAV', to: '/collection/drones-uav' },
  { label: '3D Printers/Pens', to: '/collection/3d-printers-pens' },
  { label: 'IOT & Wireless', to: '/collection/iot-wireless' },
  { label: 'Sensors', to: '/collection/sensors' },
  { label: 'Motors & Mechanical', to: '/collection/motors-mechanical' },
  { label: 'Development Boards', to: '/collection/development-boards' },
  { label: 'Displays', to: '/collection/displays' },
  { label: 'Batteries & Power Supply', to: '/collection/batteries-power' },
  { label: 'Cables', to: '/collection/cables' },
];

const Navbar = () => {

  const [visible, setVisible] = useState(false);
  // NEW: dropdown states (only for COLLECTION)
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);
  const [isMobileCollectionOpen, setIsMobileCollectionOpen] = useState(false);
  const collectionRef = useRef(null);

  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (collectionRef.current && !collectionRef.current.contains(event.target)) {
        setIsCollectionOpen(false);
      }
    };

    if (isCollectionOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isCollectionOpen]);

  const logout = () => {
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
  }

  return (
    <div className='flex items-center justify-between py-5 font-medium'>

      <Link to='/'><img src={assets.logo} className='w-56' alt="" /></Link>

      {/* DESKTOP NAV */}
      <ul className='hidden sm:flex gap-6 text-base sm:text-lg font-medium text-gray-700'>

        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
          <p>SHOP</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

        {/* CHANGED: CATEGORIES WITH DROPDOWN */}
        <div className="relative" ref={collectionRef}>
          <button
            type="button"
            onClick={() => setIsCollectionOpen(prev => !prev)}
            className="flex flex-col items-center gap-1"
          >
            <p>CATEGORIES</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </button>

          <div className={`absolute left-1/2 -translate-x-1/2 mt-3 w-64 bg-white border rounded-md shadow-lg z-50 max-h-96 overflow-y-auto transition-all duration-300 origin-top ${isCollectionOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'
            }`}>
            <ul className="py-2 text-sm text-gray-700">
              {categories.map(cat => (
                <NavLink
                  key={cat.to}
                  to={cat.to}
                  className={({ isActive }) =>
                    `block px-4 py-2 hover:bg-gray-100 transition-colors ${isActive ? 'font-semibold text-black' : ''
                    }`
                  }
                  onClick={() => setIsCollectionOpen(false)}
                >
                  {cat.label}
                </NavLink>
              ))}
            </ul>
          </div>
        </div>
        {/* END CATEGORIES CHANGE */}

        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p>CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

      </ul>

      {/* RIGHT ICONS */}
      <div className='flex items-center gap-6'>
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          className='w-5 cursor-pointer'
          alt=""
        />

        <div className='group relative'>
          <img
            onClick={() => token ? null : navigate('/login')}
            className='w-5 cursor-pointer'
            src={assets.profile_icon}
            alt=""
          />
          {/* Dropdown Menu */}
          {token &&
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-50'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                <p onClick={() => navigate('/profile')} className='cursor-pointer hover:text-black'>My Profile</p>
                <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
              </div>
            </div>}
        </div>



        <Link to='/cart' className='relative'>
          <svg className='w-5 min-w-5 text-black' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
          <AnimatePresence mode="wait">
            <motion.p
              key={getCartCount()}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'
            >
              {getCartCount()}
            </motion.p>
          </AnimatePresence>
        </Link>

        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className='w-5 cursor-pointer sm:hidden'
          alt=""
        />
      </div>

      {/* MOBILE SIDEBAR */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600'>
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
            <p>Back</p>
          </div>

          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>
            HOME
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/collection'>
            SHOP
          </NavLink>

          {/* MOBILE CATEGORIES WITH DROPDOWN */}
          <div className="border">
            <button
              type="button"
              onClick={() => setIsMobileCollectionOpen(prev => !prev)}
              className="w-full flex items-center justify-between py-2 pl-6 pr-4"
            >
              <span>CATEGORIES</span>
              <img
                src={assets.dropdown_icon}
                className={`h-3 transition-transform ${isMobileCollectionOpen ? 'rotate-180' : ''}`}
                alt=""
              />
            </button>

            {isMobileCollectionOpen && (
              <div className="flex flex-col">
                {categories.map(cat => (
                  <NavLink
                    key={cat.to}
                    to={cat.to}
                    className="py-2 pl-10 border-t text-sm"
                    onClick={() => {
                      setVisible(false);
                      setIsMobileCollectionOpen(false);
                    }}
                  >
                    {cat.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>
            ABOUT
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>
            CONTACT
          </NavLink>
        </div>
      </div>

    </div>
  )
}

export default Navbar
