import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import Navbar from '@/components/microcosmos/Navbar'
import Hero from '@/components/microcosmos/Hero'
import About from '@/components/microcosmos/About'
import Explore from '@/components/microcosmos/Explore'
import Scale from '@/components/microcosmos/Scale'
import Gallery from '@/components/microcosmos/Gallery'
import CTA from '@/components/microcosmos/CTA'
import Footer from '@/components/microcosmos/Footer'

function App() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-300/30 selection:text-cyan-100"
    >
      <Navbar />
      <main>
        <Hero />
        <About />
        <Explore />
        <Scale />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
