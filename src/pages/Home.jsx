import React from 'react'
import Hero from '../components/Hero'

import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import ShopGrid from '../components/ShopGrid'

const Home = () => {
  return (
    <div>
      <Hero />
      <ShopGrid/>
      <BestSeller/>
      <OurPolicy/>
      <NewsletterBox/>
    </div>
  )
}

export default Home
