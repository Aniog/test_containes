import { products } from '@/data/products'
import { useVelmoraImages } from '@/lib/useVelmoraImages'
import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/home/TrustBar'
import Bestsellers from '@/components/home/Bestsellers'
import UgcReels from '@/components/home/UgcReels'
import CategoryTiles from '@/components/home/CategoryTiles'
import BrandStory from '@/components/home/BrandStory'
import Testimonials from '@/components/home/Testimonials'
import Newsletter from '@/components/home/Newsletter'

export default function Home({ onAddToCart }) {
  const containerRef = useVelmoraImages([])

  return (
    <main ref={containerRef}>
      <HeroSection />
      <TrustBar />
      <Bestsellers products={products} onAddToCart={onAddToCart} />
      <UgcReels />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  )
}
