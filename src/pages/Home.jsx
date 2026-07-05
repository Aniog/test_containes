import React, { useEffect } from 'react'
import { useSectionReveal } from '@/lib/useSectionReveal'
import Hero from '@/components/home/Hero'
import TrustBar from '@/components/home/TrustBar'
import Bestsellers from '@/components/home/Bestsellers'
import UGCRow from '@/components/home/UGCRow'
import ShopByCategory from '@/components/home/ShopByCategory'
import BrandStory from '@/components/home/BrandStory'
import Testimonials from '@/components/home/Testimonials'
import Newsletter from '@/components/home/Newsletter'

const HomePage = () => {
  const containerRef = useSectionReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div ref={containerRef}>
      <Hero />
      <TrustBar />
      <div className="section-reveal">
        <Bestsellers />
      </div>
      <div className="section-reveal">
        <UGCRow />
      </div>
      <div className="section-reveal">
        <ShopByCategory />
      </div>
      <div className="section-reveal">
        <BrandStory />
      </div>
      <div className="section-reveal">
        <Testimonials />
      </div>
      <div className="section-reveal">
        <Newsletter />
      </div>
    </div>
  )
}

export default HomePage
