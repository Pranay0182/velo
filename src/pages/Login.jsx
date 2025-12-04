import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { GoogleLogin } from '@react-oauth/google';

const Login = () => {

  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext)

  const [name, setName] = useState('')
  const [password, setPasword] = useState('')
  const [email, setEmail] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === 'Sign Up') {

        const response = await axios.post(backendUrl + '/api/user/register', { name, email, password })
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
        } else {
          toast.error(response.data.message)
        }

      } else {

        const response = await axios.post(backendUrl + '/api/user/login', { email, password })
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
        } else {
          toast.error(response.data.message)
        }

      }


    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='flex flex-col items-center justify-center min-h-[70vh] px-4'
    >
      <form onSubmit={onSubmitHandler} className='flex flex-col gap-5 bg-white p-8 sm:p-10 rounded-xl shadow-lg w-full sm:max-w-md border border-gray-100'>
        <div className='flex flex-col items-center gap-2 mb-2'>
          <p className='text-3xl font-bold text-gray-900 font-inter'>{currentState}</p>
          <p className='text-gray-500 text-sm text-center'>
            {currentState === 'Login' ? 'Welcome back! Please sign in to continue.' : 'Create an account to get started.'}
          </p>
        </div>

        {currentState === 'Sign Up' && (
          <div className='flex flex-col gap-1'>
            <label className='text-sm font-medium text-gray-700'>Name</label>
            <input onChange={(e) => setName(e.target.value)} value={name} type="text" className='w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all' placeholder='Enter your name' required />
          </div>
        )}

        <div className='flex flex-col gap-1'>
          <label className='text-sm font-medium text-gray-700'>Email</label>
          <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className='w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all' placeholder='Enter your email' required />
        </div>

        <div className='flex flex-col gap-1'>
          <label className='text-sm font-medium text-gray-700'>Password</label>
          <input onChange={(e) => setPasword(e.target.value)} value={password} type="password" className='w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all' placeholder='Enter your password' required />
        </div>

        <div className='w-full flex justify-between text-sm text-gray-600 mt-[-4px]'>
          <p className='cursor-pointer hover:text-black transition-colors'>Forgot password?</p>
          {
            currentState === 'Login'
              ? <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer hover:text-black font-medium transition-colors'>Create account</p>
              : <p onClick={() => setCurrentState('Login')} className='cursor-pointer hover:text-black font-medium transition-colors'>Login Here</p>
          }
        </div>

        <button className='bg-black text-white font-medium px-8 py-3 rounded-lg hover:bg-gray-900 transition-transform active:scale-95 mt-2'>
          {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
        </button>

        <div className="flex items-center gap-4 mt-2">
          <div className="h-[1px] w-full bg-gray-200"></div>
          <p className="text-sm text-gray-500 whitespace-nowrap">OR</p>
          <div className="h-[1px] w-full bg-gray-200"></div>
        </div>

        <div className="flex justify-center w-full">
          <GoogleLogin
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
              toast.success("Google Sign-In Successful! (Token logged to console)");
              // Here you would send credentialResponse.credential to your backend
            }}
            onError={() => {
              console.log('Login Failed');
              toast.error("Google Sign-In Failed");
            }}
            useOneTap
          />
        </div>


      </form>
    </motion.div>
  )
}

export default Login
