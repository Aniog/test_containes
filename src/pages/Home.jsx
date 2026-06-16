import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import Navbar from '@/components/home/Navbar'
import Hero from '@/components/home/Hero'
import About from '@/components/home/About'
import Products from '@/components/home/Products'
import Engineering from '@/components/home/Engineering'
import Industries from '@/components/home/Industries'
import Service from '@/components/home/Service'
import Contact from '@/components/home/Contact'
import Footer from '@/components/home/Footer'

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="bg-ink-50 text-steel-700">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Engineering />
        <Industries />
        <Service />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
