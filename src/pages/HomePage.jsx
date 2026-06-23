import { useRef } from 'react'
import HeroSection from '@/components/home/HeroSection.jsx'
import TrustBar from '@/components/home/TrustBar.jsx'
import BestsellersSection from '@/components/home/BestsellersSection.jsx'
import UgcReelSection from '@/components/home/UgcReelSection.jsx'
import CategoryTilesSection from '@/components/home/CategoryTilesSection.jsx'
import BrandStorySection from '@/components/home/BrandStorySection.jsx'
import TestimonialsSection from '@/components/home/TestimonialsSection.jsx'
import JournalSection from '@/components/home/JournalSection.jsx'
import NewsletterBlock from '@/components/common/NewsletterBlock.jsx'
import { useStockImages } from '@/hooks/useStockImages.js'

const HomePage = () => {
  const containerRef = useRef(null)
  useStockImages(containerRef, [])

  return (
    <main ref={containerRef}>
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <UgcReelSection />
      <CategoryTilesSection />
      <BrandStorySection />
      <TestimonialsSection />
      <JournalSection />
      <div id="newsletter">
        <NewsletterBlock />
      </div>
    </main>
  )
}

export default HomePage
