import React from 'react'
import HeroSection from '../components/home/HeroSection'
import TrustBar from '../components/home/TrustBar'
import Bestsellers from '../components/home/Bestsellers'
import UGCSlider from '../components/home/UGCSlider'
import CategoryTiles from '../components/home/CategoryTiles'
import BrandStory from '../components/home/BrandStory'
import Testimonials from '../components/home/Testimonials'
import Newsletter from '../components/home/Newsletter'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <Bestsellers />
      <UGCSlider />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  )
}
