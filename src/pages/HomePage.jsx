import { useRef } from 'react'
import BestsellersSection from '@/components/home/BestsellersSection'
import BrandStorySection from '@/components/home/BrandStorySection'
import CategoryTilesSection from '@/components/home/CategoryTilesSection'
import HomeHero from '@/components/home/HomeHero'
import JournalTeaserSection from '@/components/home/JournalTeaserSection'
import NewsletterSection from '@/components/home/NewsletterSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import TrustBar from '@/components/home/TrustBar'
import UgcReelSection from '@/components/home/UgcReelSection'
import { products } from '@/data/products'
import { useImageLoader } from '@/hooks/useImageLoader'

export default function HomePage() {
  const containerRef = useRef(null)
  useImageLoader(containerRef, [])

  return (
    <div ref={containerRef}>
      <HomeHero />
      <TrustBar />
      <BestsellersSection products={products} />
      <UgcReelSection />
      <CategoryTilesSection />
      <BrandStorySection />
      <TestimonialsSection />
      <JournalTeaserSection />
      <NewsletterSection />
    </div>
  )
}
