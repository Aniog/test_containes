import React from 'react'
import Hero from '@/components/home/Hero'
import TrustBar from '@/components/home/TrustBar'
import Bestsellers from '@/components/home/Bestsellers'
import UGCRow from '@/components/home/UGCRow'
import CategoryTiles from '@/components/home/CategoryTiles'
import BrandStory from '@/components/home/BrandStory'
import Testimonials from '@/components/home/Testimonials'
import Newsletter from '@/components/home/Newsletter'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const Home = () => {
  const revealRef = useScrollReveal()

  return (
    <div ref={revealRef}>
      <Hero />
      <div className="reveal-on-scroll">
        <TrustBar />
      </div>
      <div className="reveal-on-scroll">
        <Bestsellers />
      </div>
      <div className="reveal-on-scroll">
        <UGCRow />
      </div>
      <div className="reveal-on-scroll">
        <CategoryTiles />
      </div>
      <div className="reveal-on-scroll">
        <BrandStory />
      </div>
      <div className="reveal-on-scroll">
        <Testimonials />
      </div>
      <div className="reveal-on-scroll">
        <Newsletter />
      </div>
    </div>
  )
}

export default Home
