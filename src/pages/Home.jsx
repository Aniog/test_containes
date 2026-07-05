import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/home/TrustBar'
import Bestsellers from '@/components/home/Bestsellers'
import CategoryTiles from '@/components/home/CategoryTiles'
import UGCReels from '@/components/home/UGCReels'
import BrandStory from '@/components/home/BrandStory'
import Testimonials from '@/components/home/Testimonials'
import Newsletter from '@/components/home/Newsletter'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <Bestsellers />
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="border-t border-border" />
      </div>
      <UGCReels />
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="border-t border-border" />
      </div>
      <CategoryTiles />
      <div className="border-t border-border" />
      <BrandStory />
      <div className="border-t border-border" />
      <Testimonials />
      <Newsletter />
    </main>
  )
}