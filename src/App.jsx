import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import './App.css'

import Nav from '@/components/microcosmos/Nav'
import Hero from '@/components/microcosmos/Hero'
import About from '@/components/microcosmos/About'
import Inhabitants from '@/components/microcosmos/Inhabitants'
import Scale from '@/components/microcosmos/Scale'
import Gallery from '@/components/microcosmos/Gallery'
import CTA from '@/components/microcosmos/CTA'
import Footer from '@/components/microcosmos/Footer'

function App() {
  const pageRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current)
  }, [])

  return (
    <div ref={pageRef} id="top" className="relative min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-400/30 selection:text-slate-50">
      <Nav />
      <main>
        <Hero />
        <About />
        <Inhabitants />
        <Scale />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
