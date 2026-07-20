import { useRef } from 'react'
import BestsellersSection from '../components/home/BestsellersSection'
import BrandStorySection from '../components/home/BrandStorySection'
import CategoryTilesSection from '../components/home/CategoryTilesSection'
import HeroSection from '../components/home/HeroSection'
import JournalSection from '../components/home/JournalSection'
import NewsletterSection from '../components/home/NewsletterSection'
import TestimonialsSection from '../components/home/TestimonialsSection'
import TrustBar from '../components/home/TrustBar'
import UGCSection from '../components/home/UGCSection'
import { useStrkImageLoader } from '../lib/useStrkImageLoader'

export default function HomePage() {
  const containerRef = useRef(null)

  useStrkImageLoader(containerRef)

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
