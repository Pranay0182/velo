import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { assets } from '../assets/assets';

const Profile = () => {

    const { token, navigate, setCartItems, setToken } = useContext(ShopContext);

    const logout = () => {
        navigate('/login')
        localStorage.removeItem('token')
        setToken('')
        setCartItems({})
    }

    return (
        <div className='border-t pt-16'>
            <div className='text-2xl mb-3'>
                <Title text1={'MY'} text2={'PROFILE'} />
            </div>

            <div className='flex flex-col gap-6 sm:flex-row sm:gap-12 mt-10'>
                {/* Profile Image & Basic Info */}
                <div className='flex flex-col items-center sm:items-start gap-4'>
                    <img src={assets.profile_icon} className='w-24 h-24 rounded-full border border-gray-300 p-1' alt="Profile" />
                    <div className='text-center sm:text-left'>
                        <p className='text-xl font-medium text-gray-800'>User Name</p>
                        <p className='text-gray-500'>user@example.com</p>
                        <button onClick={logout} className='mt-4 border border-black px-8 py-2 text-sm hover:bg-black hover:text-white transition-all'>
                            LOGOUT
                        </button>
                    </div>
                </div>

                {/* Details Section */}
                <div className='flex-1 flex flex-col gap-8'>

                    <div className='border rounded-lg p-6 bg-gray-50'>
                        <h3 className='text-lg font-medium mb-4'>Account Details</h3>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600'>
                            <div>
                                <p className='font-medium text-gray-800'>Full Name</p>
                                <p>User Name</p>
                            </div>
                            <div>
                                <p className='font-medium text-gray-800'>Email Address</p>
                                <p>user@example.com</p>
                            </div>
                            <div>
                                <p className='font-medium text-gray-800'>Phone</p>
                                <p>+91 12345 67890</p>
                            </div>
                            <div>
                                <p className='font-medium text-gray-800'>Address</p>
                                <p>123 Tech Street, Silicon Valley, India</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-4'>
                        <button onClick={() => navigate('/orders')} className='flex-1 border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2'>
                            <img src={assets.exchange_icon} className='w-4' alt="" />
                            My Orders
                        </button>
                        <button onClick={() => navigate('/contact')} className='flex-1 border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2'>
                            <img src={assets.support_img} className='w-4' alt="" />
                            Support
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profile
