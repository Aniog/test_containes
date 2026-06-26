import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from './strk-img-config.json'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HomeHero from './components/home/HomeHero'
import Products from './components/home/Products'
import Features from './components/home/Features'
import Contact from './components/home/Contact'

function App() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main>
        <HomeHero />
        <Products />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
