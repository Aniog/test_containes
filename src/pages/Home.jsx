import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import HomeHero from '../components/home/HomeHero'
import Features from '../components/home/Features'
import ProductHighlights from '../components/home/ProductHighlights'
import CTASection from '../components/home/CTASection'

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <HomeHero />
      <Features />
      <ProductHighlights />
      <CTASection />
    </div>
  )
}