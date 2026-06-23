import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import Navbar from '@/components/microcosmos/Navbar'
import Hero from '@/components/microcosmos/Hero'
import Explore from '@/components/microcosmos/Explore'
import Gallery from '@/components/microcosmos/Gallery'
import Showcase from '@/components/microcosmos/Showcase'
import Species from '@/components/microcosmos/Species'
import Journal from '@/components/microcosmos/Journal'
import CTA from '@/components/microcosmos/CTA'
import Footer from '@/components/microcosmos/Footer'

export default function MicroCosmosPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <Explore />
      <Gallery />
      <Showcase />
      <Species />
      <Journal />
      <CTA />
      <Footer />
    </div>
  )
}
