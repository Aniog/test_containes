import HeroSection from '@/components/HeroSection.jsx'
import TrustBar from '@/components/TrustBar.jsx'
import Bestsellers from '@/components/Bestsellers.jsx'
import UgcReels from '@/components/UgcReels.jsx'
import CategoryTiles from '@/components/CategoryTiles.jsx'
import BrandStory from '@/components/BrandStory.jsx'
import Testimonials from '@/components/Testimonials.jsx'
import Newsletter from '@/components/Newsletter.jsx'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <TrustBar />
      <Bestsellers />
      <UgcReels />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  )
}