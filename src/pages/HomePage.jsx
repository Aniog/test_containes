import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/home/TrustBar'
import BestsellersGrid from '@/components/home/BestsellersGrid'
import UGCRow from '@/components/home/UGCRow'
import CategoryTiles from '@/components/home/CategoryTiles'
import BrandStory from '@/components/home/BrandStory'
import Testimonials from '@/components/home/Testimonials'
import NewsletterCapture from '@/components/home/NewsletterCapture'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <BestsellersGrid />
      <UGCRow />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <NewsletterCapture />
    </main>
  )
}
