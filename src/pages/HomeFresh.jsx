import Hero from '@/components/home/HeroFresh'
import TrustBar from '@/components/home/TrustBar'
import Bestsellers from '@/components/home/Bestsellers'
import UgcStrip from '@/components/home/UgcStrip'
import CategoryTiles from '@/components/home/CategoryTiles'
import BrandStory from '@/components/home/BrandStory'
import Testimonials from '@/components/home/Testimonials'
import Newsletter from '@/components/home/Newsletter'
import { useImageLoader } from '@/lib/image'

export default function HomeFresh({ onAddToCart }) {
  const containerRef = useImageLoader([])

  return (
    <main ref={containerRef}>
      <Hero />
      <TrustBar />
      <Bestsellers onAddToCart={onAddToCart} />
      <UgcStrip />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  )
}
