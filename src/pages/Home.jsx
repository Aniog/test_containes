import BestsellersSection from '@/components/home/BestsellersSection'
import CategoryTiles from '@/components/home/CategoryTiles'
import HeroSection from '@/components/home/HeroSection'
import NewsletterSection from '@/components/home/NewsletterSection'
import StorySection from '@/components/home/StorySection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import TrustBar from '@/components/home/TrustBar'
import UgcStrip from '@/components/home/UgcStrip'
import { useStrkImages } from '@/hooks/useStrkImages'

export default function Home() {
  const containerRef = useStrkImages([])

  return (
    <div ref={containerRef}>
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <UgcStrip />
      <CategoryTiles />
      <StorySection />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  )
}
