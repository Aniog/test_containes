import { useRef } from 'react'
import BestsellersSection from '@/components/storefront/BestsellersSection'
import CategoryTiles from '@/components/storefront/CategoryTiles'
import HomeHero from '@/components/storefront/HomeHero'
import JournalSection from '@/components/storefront/JournalSection'
import NewsletterBanner from '@/components/storefront/NewsletterBanner'
import StorySection from '@/components/storefront/StorySection'
import TestimonialsSection from '@/components/storefront/TestimonialsSection'
import TrustBar from '@/components/storefront/TrustBar'
import UgcStrip from '@/components/storefront/UgcStrip'
import { useStrkImages } from '@/hooks/useStrkImages'

export default function HomePage({ onAddToCart }) {
  const containerRef = useRef(null)

  useStrkImages(containerRef, [])

  return (
    <div ref={containerRef}>
      <HomeHero />
      <TrustBar />
      <BestsellersSection onAddToCart={onAddToCart} />
      <UgcStrip />
      <div id="categories">
        <CategoryTiles />
      </div>
      <StorySection />
      <TestimonialsSection />
      <JournalSection />
      <NewsletterBanner />
    </div>
  )
}
