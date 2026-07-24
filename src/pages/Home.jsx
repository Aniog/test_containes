import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import Navbar from '@/components/landing/Navbar.jsx'
import Hero from '@/components/landing/Hero.jsx'
import Features from '@/components/landing/Features.jsx'
import Showcase from '@/components/landing/Showcase.jsx'
import Pricing from '@/components/landing/Pricing.jsx'
import Contact from '@/components/landing/Contact.jsx'
import Footer from '@/components/landing/Footer.jsx'

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return undefined
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
