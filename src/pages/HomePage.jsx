import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/home/TrustBar'
import BestsellersGrid from '@/components/home/BestsellersGrid'
import UGCSection from '@/components/home/UGCSection'
import CategoryTiles from '@/components/home/CategoryTiles'
import BrandStory from '@/components/home/BrandStory'
import Testimonials from '@/components/home/Testimonials'

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <TrustBar />
      <BestsellersGrid />
      <UGCSection />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
    </div>
  )
}