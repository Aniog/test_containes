import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import BestsellersSection from '../components/home/BestsellersSection'
import BrandStorySection from '../components/home/BrandStorySection'
import CategoryTilesSection from '../components/home/CategoryTilesSection'
import HeroSection from '../components/home/HeroSection'
import JournalSection from '../components/home/JournalSection'
import NewsletterSection from '../components/home/NewsletterSection'
import TestimonialsSection from '../components/home/TestimonialsSection'
import TrustBar from '../components/home/TrustBar'
import UGCSection from '../components/home/UGCSection'
import strkImgConfig from '../strk-img-config.json'

export default function HomePage() {
  const containerRef = useRef(null)

  useEffect(() => {
    let cleanup = () => {}

    const frameId = window.requestAnimationFrame(() => {
      const maybeCleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
      cleanup = typeof maybeCleanup === 'function' ? maybeCleanup : () => {}
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [])

  return (
    <div ref={containerRef}>
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <UGCSection />
      <CategoryTilesSection />
      <BrandStorySection />
      <TestimonialsSection />
      <JournalSection />
      <NewsletterSection />
    </div>
  )
}
