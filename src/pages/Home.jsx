import BestsellerSection from '@/components/home/BestsellerSection'
import BrandStorySection from '@/components/home/BrandStorySection'
import CategoryTiles from '@/components/home/CategoryTiles'
import HeroSection from '@/components/home/HeroSection'
import NewsletterSection from '@/components/home/NewsletterSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import TrustBar from '@/components/home/TrustBar'
import UGCStrip from '@/components/home/UGCStrip'
import { useImageLoader } from '@/hooks/useImageLoader'

const Home = () => {
  const containerRef = useImageLoader('home-page')

  return (
    <div ref={containerRef}>
      <HeroSection />
      <TrustBar />
      <BestsellerSection />
      <UGCStrip />
      <CategoryTiles />
      <BrandStorySection />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  )
}

export default Home
