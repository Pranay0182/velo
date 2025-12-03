import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='bg-black text-gray-400 mt-40'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 py-10 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] text-sm'>

        <div>

          {/* Footer logo: use `logo.png` from assets (responsive larger sizes) */}
          <img src={assets.logo} className='mb-5 w-32 sm:w-40 md:w-48 brightness-0 invert' alt="Velotech logo" />

          <p className='w-full md:w-2/3 text-gray-400'>
            Velotech delivers smart and energy-efficient motor solutions designed
            to reduce electricity usage and improve long-term performance for
            industries and households.
          </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5 text-white'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-400'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5 text-white'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-400'>
            <li>9905705025, 9937291203</li>
            <li>velotechinnovationpvt.ltd@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr className='border-gray-700' />
        <p className='py-5 text-sm text-center text-gray-400'>
          Copyright 2024 @ Velotech.com - All Rights Reserved.
        </p>
      </div>

    </div>
  )
}

export default Footer
