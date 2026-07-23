import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/home/TrustBar'
import BestsellersSection from '@/components/home/BestsellersSection'
import UGCSection from '@/components/home/UGCSection'
import CategoriesSection from '@/components/home/CategoriesSection'
import BrandStorySection from '@/components/home/BrandStorySection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import NewsletterSection from '@/components/home/NewsletterSection'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <UGCSection />
      <CategoriesSection />
      <BrandStorySection />
      <TestimonialsSection />
      <NewsletterSection />
    </main>
  )
}
