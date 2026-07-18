import React, { useEffect, useRef } from 'react'
import Hero from '@/components/home/Hero'
import TrustBar from '@/components/home/TrustBar'
import Bestsellers from '@/components/home/Bestsellers'
import UGCRow from '@/components/home/UGCRow'
import ShopByCategory from '@/components/home/ShopByCategory'
import BrandStory from '@/components/home/BrandStory'
import Testimonials from '@/components/home/Testimonials'
import Newsletter from '@/components/home/Newsletter'

const Home = () => {
  return (
    <div>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCRow />
      <ShopByCategory />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  )
}

export default Home
