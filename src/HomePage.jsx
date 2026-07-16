import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from './strk-img-config.json'
import HeroSection from './HeroSection'
import TrustBar from './TrustBar'
import BestsellersSection from './BestsellersSection'
import UGCSection from './UGCSection'
import CategoryTiles from './CategoryTiles'
import BrandStory from './BrandStory'
import Testimonials from './Testimonials'
import Newsletter from './Newsletter'

export default function HomePage() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <UGCSection />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  )
}