import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Hero from '../components/home/Hero'
import TrustBar from '../components/home/TrustBar'
import Bestsellers from '../components/home/Bestsellers'
import UGCReel from '../components/home/UGCReel'
import CategoryTiles from '../components/home/CategoryTiles'
import BrandStory from '../components/home/BrandStory'
import Testimonials from '../components/home/Testimonials'
import Newsletter from '../components/home/Newsletter'

export default function Home() {
  return (
    <div className="min-h-screen bg-velmora-bg">
      <Navbar />
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCReel />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  )
}
