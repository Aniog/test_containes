import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import Hero from '../components/home/Hero'
import About from '../components/home/About'
import Products from '../components/home/Products'
import Contact from '../components/home/Contact'

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
        return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef}>
      <Hero />
      <About />
      <Products />
      <Contact />
    </div>
  )
}