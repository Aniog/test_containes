import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import HeroSection from '@/components/home/HeroSection.jsx'
import TrustBar from '@/components/home/TrustBar.jsx'
import BestsellersSection from '@/components/home/BestsellersSection.jsx'
import UgcStrip from '@/components/home/UgcStrip.jsx'
import CategoryTiles from '@/components/home/CategoryTiles.jsx'
import BrandStorySection from '@/components/home/BrandStorySection.jsx'
import TestimonialsSection from '@/components/home/TestimonialsSection.jsx'
import NewsletterSection from '@/components/home/NewsletterSection.jsx'

const Home = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <main ref={containerRef} className="bg-ivory">
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <UgcStrip />
      <CategoryTiles />
      <BrandStorySection />
      <TestimonialsSection />
      <NewsletterSection />
    </main>
  )
}

export default Home
