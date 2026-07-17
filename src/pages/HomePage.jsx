import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import BestsellersSection from '@/components/home/BestsellersSection'
import CategoryTiles from '@/components/home/CategoryTiles'
import HomeHero from '@/components/home/HomeHero'
import JournalSection from '@/components/home/JournalSection'
import NewsletterSection from '@/components/home/NewsletterSection'
import StorySection from '@/components/home/StorySection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import TrustBar from '@/components/home/TrustBar'
import UgcStrip from '@/components/home/UgcStrip'
import {
  categories,
  collectionStats,
  journalEntries,
  products,
  testimonials,
  trustPoints,
  ugcMoments,
} from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'

function HomePage() {
  const containerRef = useRef(null)

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') {
        cleanup()
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="bg-ivory text-velvet">
      <HomeHero />
      <TrustBar items={trustPoints} />
      <BestsellersSection products={products} />
      <UgcStrip moments={ugcMoments} />
      <CategoryTiles categories={categories} />
      <StorySection stats={collectionStats} />
      <TestimonialsSection testimonials={testimonials} />
      <JournalSection entries={journalEntries} />
      <NewsletterSection />
    </div>
  )
}

export default HomePage
