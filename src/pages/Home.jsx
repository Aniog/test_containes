import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/home/TrustBar'
import BestsellersSection from '@/components/home/BestsellersSection'
import UgcReelSection from '@/components/home/UgcReelSection'
import CategoryTilesSection from '@/components/home/CategoryTilesSection'
import BrandStorySection from '@/components/home/BrandStorySection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import JournalSection from '@/components/home/JournalSection'
import NewsletterSection from '@/components/home/NewsletterSection'
import strkImgConfig from '@/strk-img-config.json'
import {
  categoryTiles,
  journalEntries,
  products,
  testimonials,
  ugcMoments,
} from '@/data/store'

const Home = () => {
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
      <BestsellersSection products={products} />
      <UgcReelSection moments={ugcMoments} />
      <CategoryTilesSection categories={categoryTiles} />
      <BrandStorySection />
      <TestimonialsSection testimonials={testimonials} />
      <JournalSection entries={journalEntries} />
      <NewsletterSection />
    </div>
  )
}

export default Home
