import { useRef } from 'react'
import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/home/TrustBar'
import BestsellersSection from '@/components/home/BestsellersSection'
import UgcSection from '@/components/home/UgcSection'
import CategorySection from '@/components/home/CategorySection'
import StorySection from '@/components/home/StorySection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import NewsletterSection from '@/components/home/NewsletterSection'
import JournalSection from '@/components/home/JournalSection'
import {
  categoryTiles,
  journalEntries,
  products,
  testimonials,
  ugcMoments,
} from '@/data/products'
import { useImageLoader } from '@/lib/useImageLoader'

const HomePage = () => {
  const containerRef = useRef(null)
  useImageLoader(containerRef, [])

  return (
    <main ref={containerRef}>
      <HeroSection />
      <TrustBar />
      <BestsellersSection products={products.slice(0, 5)} />
      <UgcSection moments={ugcMoments} />
      <CategorySection categories={categoryTiles} />
      <StorySection />
      <TestimonialsSection testimonials={testimonials} />
      <JournalSection entries={journalEntries} />
      <NewsletterSection />
    </main>
  )
}

export default HomePage
