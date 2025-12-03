import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

// Define a premium green color variable for easy modification
const PREMIUM_GREEN = 'text-green-800' // Dark, rich green for text
const BORDER_COLOR = 'border-green-800' // Border color

// --- FINALIZED LINKS ---
const LINKEDIN_URL = 'https://www.linkedin.com/in/velotech-innovations-private-limited-04722b2a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' 
const INSTAGRAM_URL = 'https://www.instagram.com/velotech_innovations?igsh=MXV3MzJsNDUzMGZvYg==' 
// -----------------------

const Contact = () => {
  // Common Button Classes for the "Slide-in Underline" effect
  const buttonClass = `
    relative 
    border-2 ${BORDER_COLOR} 
    px-6 py-4 text-sm font-semibold 
    ${PREMIUM_GREEN} 
    transition-all duration-500 
    rounded-full 
    flex items-center 
    group 
    overflow-hidden
    shadow-md hover:shadow-xl hover:-translate-y-0.5
  `;

  // The pseudo-element classes for the underline effect (using 'after')
  const underlineEffect = `
    after:content-[''] 
    after:absolute 
    after:bottom-0 
    after:left-0 
    after:w-full 
    after:h-0.5 
    after:bg-green-800 
    after:transition-transform 
    after:duration-500 
    after:scale-x-0 
    group-hover:after:scale-x-100
  `;

  return (
    <div className='bg-white'>
      
      {/* Title Section */}
      <div className='text-center text-2xl pt-10 border-t border-gray-200'>
        <Title text1={'CONTACT'} text2={'US'} colorClass={PREMIUM_GREEN} />
      </div>

      {/* Content Section */}
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-16 p-4 md:p-8 lg:p-12'>
        
        {/* Contact Image */}
        <img className='w-full md:max-w-[480px] object-cover rounded-lg shadow-xl' src={assets.contact_img} alt="Contact Office" />
        
        {/* Contact Details */}
        <div className='flex flex-col justify-center items-start gap-6 px-4'>
          
          {/* Company Info - HEADING CHANGED TO "Our Company" */}
          <p className={`font-bold text-2xl ${PREMIUM_GREEN}`}>Our Company</p>
          
          {/* EMAIL */}
          <p className='text-gray-700 leading-relaxed flex items-center gap-2'>
            <i className="fas fa-envelope text-lg"></i> {/* Optional: Email icon */}
            velotechinnovationpvt.ltd@gmail.com
          </p>

          {/* PHONE */}
          <p className='text-gray-700 leading-relaxed flex items-center gap-2'>
            <i className="fas fa-phone-alt text-lg"></i> {/* Optional: Phone icon */}
            9905705025, 9937291203
          </p>

          {/* ADDRESS */}
          <p className='text-gray-700 leading-relaxed flex items-center gap-2'>
            <i className="fas fa-map-marker-alt text-lg"></i> {/* Optional: Location icon */}
            Research and Entrepreneurship Park IIT, <br /> Bhubaneswar, Odisha
          </p>
          
          <hr className='w-16 border-t-2 border-green-800 my-2'/>

          {/* Social Media Section */}
          <p className={`font-bold text-2xl ${PREMIUM_GREEN}`}>Connect with Us</p>
          <p className='text-gray-700 leading-relaxed'>
            Follow our journey, see new products, and get professional updates on our social channels.
          </p>
          
          {/* Social Media Buttons Container */}
          <div className='flex flex-wrap gap-4 mt-4'>
            
            {/* Instagram Button */}
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              <button className={`${buttonClass} ${underlineEffect}`}>
                <i className="fab fa-instagram mr-2"></i> 
                Instagram
              </button>
            </a>

            {/* LinkedIn Button */}
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
              <button className={`${buttonClass} ${underlineEffect}`}>
                <i className="fab fa-linkedin-in mr-2"></i> 
                LinkedIn
              </button>
            </a>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Contact