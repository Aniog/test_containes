import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import './App.css'

import Navbar from '@/components/site/Navbar'
import Hero from '@/components/site/Hero'
import About from '@/components/site/About'
import Worlds from '@/components/site/Worlds'
import Inhabitants from '@/components/site/Inhabitants'
import Scales from '@/components/site/Scales'
import Gallery from '@/components/site/Gallery'
import Voices from '@/components/site/Voices'
import CTAFooter from '@/components/site/CTAFooter'

function App() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-950 text-slate-100 antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Worlds />
        <Inhabitants />
        <Scales />
        <Gallery />
        <Voices />
        <CTAFooter />
      </main>
    </div>
  )
}

export default App
