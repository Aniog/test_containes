import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import Capabilities from '@/components/Capabilities'
import Testimonials from '@/components/Testimonials'
import About from '@/components/About'
import CtaBanner from '@/components/CtaBanner'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Capabilities />
      <About />
      <Testimonials />
      <CtaBanner />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
