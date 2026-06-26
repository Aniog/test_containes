import './App.css'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from './strk-img-config.json'
import { Header, Hero, Products, About, Contact, Footer } from './components/HomeSections'

function App() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen">
      <Header />
      <Hero />
      <Products />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
