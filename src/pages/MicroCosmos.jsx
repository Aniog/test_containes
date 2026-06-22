import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

import Navbar from '@/components/microcosmos/Navbar'
import Hero from '@/components/microcosmos/Hero'
import ExploreIntro from '@/components/microcosmos/ExploreIntro'
import Gallery from '@/components/microcosmos/Gallery'
import Kingdoms from '@/components/microcosmos/Kingdoms'
import ScaleStrip from '@/components/microcosmos/ScaleStrip'
import Stories from '@/components/microcosmos/Stories'
import Journal from '@/components/microcosmos/Journal'
import Footer from '@/components/microcosmos/Footer'

export default function MicroCosmos() {
  const containerRef = useRef(null)

  // Load images on mount
  useEffect(() => {
    if (!containerRef.current) return
    const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    return cleanup
  }, [])

  // Re-scan when an interactive section asks (e.g., Kingdoms tabs)
  useEffect(() => {
    const handler = () => {
      if (!containerRef.current) return
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      })
      return () => window.cancelAnimationFrame(frameId)
    }
    window.addEventListener('strk:images:rescan', handler)
    return () => window.removeEventListener('strk:images:rescan', handler)
  }, [])

  return (
    <div
      ref={containerRef}
      className="bg-slate-950 text-slate-100 min-h-screen font-sans"
    >
      <Navbar />
      <main>
        <Hero />
        <ExploreIntro />
        <Gallery />
        <Kingdoms />
        <ScaleStrip />
        <Stories />
        <Journal />
      </main>
      <Footer />
    </div>
  )
}
