import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import HeroSection from '@/components/home/HeroSection.jsx'
import TrustBar from '@/components/home/TrustBar.jsx'
import BestsellersSection from '@/components/home/BestsellersSection.jsx'
import UgcStrip from '@/components/home/UgcStrip.jsx'
import CategoryTiles from '@/components/home/CategoryTiles.jsx'
import StorySection from '@/components/home/StorySection.jsx'
import TestimonialsSection from '@/components/home/TestimonialsSection.jsx'
import NewsletterSection from '@/components/home/NewsletterSection.jsx'

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <UgcStrip />
      <CategoryTiles />
      <StorySection />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  )
}
