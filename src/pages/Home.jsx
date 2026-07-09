import BestsellersSection from '@/components/home/BestsellersSection.jsx'
import CategoryTiles from '@/components/home/CategoryTiles.jsx'
import HeroSection from '@/components/home/HeroSection.jsx'
import JournalSection from '@/components/home/JournalSection.jsx'
import NewsletterSection from '@/components/home/NewsletterSection.jsx'
import StorySection from '@/components/home/StorySection.jsx'
import TestimonialsSection from '@/components/home/TestimonialsSection.jsx'
import TrustBar from '@/components/home/TrustBar.jsx'
import UgcStrip from '@/components/home/UgcStrip.jsx'

const Home = () => {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <UgcStrip />
      <CategoryTiles />
      <StorySection />
      <TestimonialsSection />
      <JournalSection />
      <NewsletterSection />
    </>
  )
}

export default Home
