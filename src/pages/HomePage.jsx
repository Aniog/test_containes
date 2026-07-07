import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/home/TrustBar'
import BestsellersSection from '@/components/home/BestsellersSection'
import UgcSection from '@/components/home/UgcSection'
import CategoryTilesSection from '@/components/home/CategoryTilesSection'
import StorySection from '@/components/home/StorySection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import JournalSection from '@/components/home/JournalSection'
import NewsletterSection from '@/components/home/NewsletterSection'

function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <UgcSection />
      <CategoryTilesSection />
      <StorySection />
      <TestimonialsSection />
      <JournalSection />
      <NewsletterSection />
    </>
  )
}

export default HomePage
