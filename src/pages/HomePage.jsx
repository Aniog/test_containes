import HeroSection from '@/components/store/HeroSection'
import TrustBar from '@/components/store/TrustBar'
import BestsellersSection from '@/components/store/BestsellersSection'
import UgcReelSection from '@/components/store/UgcReelSection'
import CategoryTilesSection from '@/components/store/CategoryTilesSection'
import StorySection from '@/components/store/StorySection'
import TestimonialsSection from '@/components/store/TestimonialsSection'
import NewsletterSection from '@/components/store/NewsletterSection'
import JournalSection from '@/components/store/JournalSection'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <UgcReelSection />
      <CategoryTilesSection />
      <StorySection />
      <TestimonialsSection />
      <NewsletterSection />
      <JournalSection />
    </main>
  )
}
