import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import HeroSection from '@/components/home/HeroSection.jsx'
import TrustBar from '@/components/home/TrustBar.jsx'
import BestsellersSection from '@/components/home/BestsellersSection.jsx'
import UgcReel from '@/components/home/UgcReel.jsx'
import CategoryTiles from '@/components/home/CategoryTiles.jsx'
import BrandStory from '@/components/home/BrandStory.jsx'
import Testimonials from '@/components/home/Testimonials.jsx'
import Newsletter from '@/components/home/Newsletter.jsx'

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <main ref={containerRef}>
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <UgcReel />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  )
}
