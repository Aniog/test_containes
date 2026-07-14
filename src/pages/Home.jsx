import Bestsellers from '@/components/home/Bestsellers'
import BrandStory from '@/components/home/BrandStory'
import CategoryTiles from '@/components/home/CategoryTiles'
import HeroSection from '@/components/home/HeroSection'
import Newsletter from '@/components/home/Newsletter'
import Testimonials from '@/components/home/Testimonials'
import TrustBar from '@/components/home/TrustBar'
import UgcReel from '@/components/home/UgcReel'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <Bestsellers />
      <UgcReel />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  )
}
