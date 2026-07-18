import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { AnnouncementBar } from '@/components/layout/AnnouncementBar'
import { HeroSection } from '@/components/home/HeroSection'
import { BestsellersSection } from '@/components/home/BestsellersSection'
import { ReelSection } from '@/components/home/ReelSection'
import { CategorySection } from '@/components/home/CategorySection'
import { BrandStorySection } from '@/components/home/BrandStorySection'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { NewsletterSection } from '@/components/home/NewsletterSection'

function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup?.()
    }
  }, [])

  return (
    <div ref={containerRef}>
      <HeroSection />
      <AnnouncementBar />
      <BestsellersSection />
      <ReelSection />
      <CategorySection />
      <BrandStorySection />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  )
}

export default Home
