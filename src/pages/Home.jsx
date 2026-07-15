import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/home/TrustBar'
import BestsellersSection from '@/components/home/BestsellersSection'
import UgcStrip from '@/components/home/UgcStrip'
import CategoryTiles from '@/components/home/CategoryTiles'
import StorySection from '@/components/home/StorySection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import NewsletterSection from '@/components/home/NewsletterSection'
import useStrkImages from '@/hooks/useStrkImages'

const Home = () => {
  const containerRef = useStrkImages([])

  return (
    <main ref={containerRef}>
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <UgcStrip />
      <CategoryTiles />
      <StorySection />
      <TestimonialsSection />
      <NewsletterSection />
    </main>
  )
}

export default Home
