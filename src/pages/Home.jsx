import BestsellersSection from '@/components/storefront/BestsellersSection.jsx'
import CategoryTilesSection from '@/components/storefront/CategoryTilesSection.jsx'
import HeroSection from '@/components/storefront/HeroSection.jsx'
import JournalSection from '@/components/storefront/JournalSection.jsx'
import NewsletterSection from '@/components/storefront/NewsletterSection.jsx'
import StorySection from '@/components/storefront/StorySection.jsx'
import TestimonialsSection from '@/components/storefront/TestimonialsSection.jsx'
import TrustBar from '@/components/storefront/TrustBar.jsx'
import UgcReelSection from '@/components/storefront/UgcReelSection.jsx'

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <UgcReelSection />
      <CategoryTilesSection />
      <StorySection />
      <TestimonialsSection />
      <JournalSection />
      <NewsletterSection />
    </>
  )
}
