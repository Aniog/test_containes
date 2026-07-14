import React from 'react'
import Navbar from '@/components/home/Navbar'
import Hero from '@/components/home/Hero'
import TrustBar from '@/components/home/TrustBar'
import Bestsellers from '@/components/home/Bestsellers'
import UGCRow from '@/components/home/UGCRow'
import CategoryTiles from '@/components/home/CategoryTiles'
import BrandStory from '@/components/home/BrandStory'
import Testimonials from '@/components/home/Testimonials'
import Newsletter from '@/components/home/Newsletter'
import Footer from '@/components/home/Footer'
import CartDrawer from '@/components/cart/CartDrawer'

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <CartDrawer />
      <main>
        <Hero />
        <TrustBar />
        <Bestsellers />
        <UGCRow />
        <CategoryTiles />
        <BrandStory />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default Home
