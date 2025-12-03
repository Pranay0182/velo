import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='pt-10 border-t'
    >
      <div className='text-center text-2xl'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 px-4 sm:px-10'>
        <img className='w-full md:max-w-[480px] object-cover rounded-lg shadow-md' src={assets.contact_img} alt="" />

        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-800'>Our Office</p>
          <p className='text-gray-600 leading-relaxed'>
            Research and Entrepreneurship Park IIT, <br />
            Bhubaneswar, Odisha
          </p>
          <p className='text-gray-600'>
            <span className='font-medium text-gray-800'>Tel:</span> 9905705025, 9937291203 <br />
            <span className='font-medium text-gray-800'>Email:</span> velotechinnovationpvt.ltd@gmail.com
          </p>

          <p className='font-semibold text-xl text-gray-800 mt-4'>Connect with Us</p>
          <p className='text-gray-600'>Follow our journey on social media.</p>

          <div className='flex gap-4 mt-2'>
            <a
              href="https://www.instagram.com/velotech_innovations?igsh=MXV3MzJsNDUzMGZvYg=="
              target="_blank"
              rel="noopener noreferrer"
              className='border border-black px-8 py-3 text-sm hover:bg-black hover:text-white transition-all duration-300'
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/velotech-innovations-private-limited-04722b2a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className='border border-black px-8 py-3 text-sm hover:bg-black hover:text-white transition-all duration-300'
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

    </motion.div>
  )
}

export default Contact