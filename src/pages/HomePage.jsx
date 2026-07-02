import BestsellersSection from '@/components/home/BestsellersSection'
import BrandStorySection from '@/components/home/BrandStorySection'
import CategoryTilesSection from '@/components/home/CategoryTilesSection'
import HeroSection from '@/components/home/HeroSection'
import JournalSection from '@/components/home/JournalSection'
import NewsletterSection from '@/components/home/NewsletterSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import TrustBar from '@/components/home/TrustBar'
import UgcReelSection from '@/components/home/UgcReelSection'
import { useStrkImages } from '@/lib/useStrkImages'

const HomePage = () => {
  const containerRef = useStrkImages([])

  return (
    <div ref={containerRef}>
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <UgcReelSection />
      <CategoryTilesSection />
      <BrandStorySection />
      <TestimonialsSection />
      <JournalSection />
      <NewsletterSection />
    </div>
  )
}

export default HomePage
