import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import PageTransition from './components/PageTransition'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify'
import Profile from './pages/Profile'

const App = () => {
  const location = useLocation();
  return (
    <div>
      <ToastContainer />
      <TopBar />
      <div className='sticky top-0 z-50 bg-white'>
        <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
          <Navbar />
        </div>
        <SearchBar />
      </div>
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<PageTransition><Home /></PageTransition>} />
            <Route path='/collection' element={<PageTransition><Collection /></PageTransition>} />
            <Route path='/about' element={<PageTransition><About /></PageTransition>} />
            <Route path='/contact' element={<PageTransition><Contact /></PageTransition>} />
            <Route path='/product/:productId' element={<PageTransition><Product /></PageTransition>} />
            <Route path='/cart' element={<PageTransition><Cart /></PageTransition>} />
            <Route path='/login' element={<PageTransition><Login /></PageTransition>} />
            <Route path='/place-order' element={<PageTransition><PlaceOrder /></PageTransition>} />
            <Route path='/orders' element={<PageTransition><Orders /></PageTransition>} />
            <Route path='/verify' element={<PageTransition><Verify /></PageTransition>} />
            <Route path='/profile' element={<PageTransition><Profile /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  )
}

export default App
