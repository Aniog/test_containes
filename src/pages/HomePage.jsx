import HomeHero from '@/components/home/HomeHero.jsx?velmora=20260707'
import TrustBar from '@/components/home/TrustBar.jsx?velmora=20260707'
import BestsellersSection from '@/components/home/BestsellersSection.jsx?velmora=20260707'
import UGCStrip from '@/components/home/UGCStrip.jsx?velmora=20260707'
import CategorySection from '@/components/home/CategorySection.jsx?velmora=20260707'
import BrandStory from '@/components/home/BrandStory.jsx?velmora=20260707'
import TestimonialsSection from '@/components/home/TestimonialsSection.jsx?velmora=20260707'
import NewsletterSection from '@/components/home/NewsletterSection.jsx?velmora=20260707'

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustBar />
      <BestsellersSection />
      <UGCStrip />
      <CategorySection />
      <BrandStory />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  )
}
