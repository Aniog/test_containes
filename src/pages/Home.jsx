import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'
import Header from '../components/home/Header'
import Hero from '../components/home/Hero'
import Products from '../components/products/Products'
import About from '../components/home/About'
import Contact from '../components/home/Contact'
import Footer from '../components/home/Footer'

function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Products />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
