import BestsellersSection from '@/components/home/BestsellersSection'
import CategoryTiles from '@/components/home/CategoryTiles'
import HomeHero from '@/components/home/HomeHero'
import NewsletterSection from '@/components/home/NewsletterSection'
import StorySection from '@/components/home/StorySection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import TrustBar from '@/components/home/TrustBar'
import UgcStrip from '@/components/home/UgcStrip'

const Home = () => {
  return (
    <>
      <HomeHero />
      <TrustBar />
      <BestsellersSection />
      <UgcStrip />
      <CategoryTiles />
      <StorySection />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  )
}

export default Home
