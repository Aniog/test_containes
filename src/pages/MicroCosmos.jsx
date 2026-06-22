import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import NavBar from '@/components/microcosmos/NavBar'
import Hero from '@/components/microcosmos/Hero'
import Intro from '@/components/microcosmos/Intro'
import FeaturedGallery from '@/components/microcosmos/FeaturedGallery'
import Kingdoms from '@/components/microcosmos/Kingdoms'
import Mosaic from '@/components/microcosmos/Mosaic'
import Pioneers from '@/components/microcosmos/Pioneers'
import Tools from '@/components/microcosmos/Tools'
import Stats from '@/components/microcosmos/Stats'
import CallToAction from '@/components/microcosmos/CallToAction'
import Footer from '@/components/microcosmos/Footer'

export default function MicroCosmos() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-950 text-slate-100 antialiased">
      <NavBar />
      <Hero />
      <Intro />
      <FeaturedGallery />
      <Kingdoms />
      <Mosaic />
      <Stats />
      <Pioneers />
      <Tools />
      <CallToAction />
      <Footer />
    </div>
  )
}
