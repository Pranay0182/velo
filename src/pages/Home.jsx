import React from 'react'
import Hero from '../components/Hero'

import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import ShopGrid from '../components/ShopGrid'
import NewLaunch from '../components/NewLaunch'

const Home = () => {
  return (
    <div>
      <Hero />
      <ShopGrid />
      <BestSeller />
      <NewLaunch />
      <OurPolicy />
      <NewsletterBox />
    </div>
  )
}

export default Home
