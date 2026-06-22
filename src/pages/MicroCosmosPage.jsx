import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import NavBar from '@/components/microcosmos/NavBar'
import Hero from '@/components/microcosmos/Hero'
import Intro from '@/components/microcosmos/Intro'
import Gallery from '@/components/microcosmos/Gallery'
import Worlds from '@/components/microcosmos/Worlds'
import FeatureStory from '@/components/microcosmos/FeatureStory'
import Journal from '@/components/microcosmos/Journal'
import CallToAction from '@/components/microcosmos/CallToAction'
import Footer from '@/components/microcosmos/Footer'

export default function MicroCosmosPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="bg-slate-950 text-slate-100 font-sans min-h-screen">
      <NavBar />
      <main>
        <Hero />
        <Intro />
        <Gallery />
        <Worlds />
        <FeatureStory />
        <Journal />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
