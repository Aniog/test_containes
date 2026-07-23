import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/home/TrustBar'
import BestsellersSection from '@/components/home/BestsellersSection'
import UgcStrip from '@/components/home/UgcStrip'
import CategoryTiles from '@/components/home/CategoryTiles'
import BrandStorySection from '@/components/home/BrandStorySection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import NewsletterBlock from '@/components/shared/NewsletterBlock'
import strkImgConfig from '@/strk-img-config.json'

function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    let cleanup = () => {}
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
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
      <UgcStrip />
      <CategoryTiles />
      <BrandStorySection />
      <TestimonialsSection />
      <section className="px-5 py-16 md:px-8 md:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <NewsletterBlock />
        </div>
      </section>
    </div>
  )
}

export default Home
