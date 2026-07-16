import HeroSection from '@/components/home/HeroSection.jsx'
import BestsellersSection from '@/components/home/BestsellersSection.jsx'
import BrandStorySection from '@/components/home/BrandStorySection.jsx'
import CategoryTiles from '@/components/home/CategoryTiles.jsx'
import NewsletterSection from '@/components/home/NewsletterSection.jsx'
import ReelsStrip from '@/components/home/ReelsStrip.jsx'
import TestimonialsSection from '@/components/home/TestimonialsSection.jsx'
import TrustBar from '@/components/home/TrustBar.jsx'
import { ugcMoments } from '@/data/store.js'

function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <ReelsStrip moments={ugcMoments} />
      <CategoryTiles />
      <BrandStorySection />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  )
}

export default HomePage
