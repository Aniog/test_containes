import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import Bestsellers from '../components/Bestsellers'
import UGCReelRow from '../components/UGCReelRow'
import CategoryTiles from '../components/CategoryTiles'
import BrandStory from '../components/BrandStory'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCReelRow />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default HomePage
