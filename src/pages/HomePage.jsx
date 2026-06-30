import BestsellersSection from '@/components/home/BestsellersSection.jsx'
import BrandStorySection from '@/components/home/BrandStorySection.jsx'
import CategoryTilesSection from '@/components/home/CategoryTilesSection.jsx'
import HeroSection from '@/components/home/HeroSection.jsx'
import NewsletterSection from '@/components/home/NewsletterSection.jsx'
import TestimonialsSection from '@/components/home/TestimonialsSection.jsx'
import TrustBar from '@/components/home/TrustBar.jsx'
import UgcReelSection from '@/components/home/UgcReelSection.jsx'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <UgcReelSection />
      <CategoryTilesSection />
      <BrandStorySection />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  )
}
