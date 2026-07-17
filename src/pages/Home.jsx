import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/home/TrustBar'
import BestsellersGrid from '@/components/home/BestsellersGrid'
import UGCCarousel from '@/components/home/UGCCarousel'
import CategoryTiles from '@/components/home/CategoryTiles'
import BrandStory from '@/components/home/BrandStory'
import Testimonials from '@/components/home/Testimonials'
import NewsletterSection from '@/components/home/NewsletterSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <BestsellersGrid />
      <UGCCarousel />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <NewsletterSection />
    </main>
  )
}