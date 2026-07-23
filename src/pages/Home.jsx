import Bestsellers from '@/components/home/Bestsellers'
import BrandStory from '@/components/home/BrandStory'
import CategoryTiles from '@/components/home/CategoryTiles'
import Hero from '@/components/home/Hero'
import Newsletter from '@/components/home/Newsletter'
import Testimonials from '@/components/home/Testimonials'
import TrustBar from '@/components/home/TrustBar'
import UGCReel from '@/components/home/UGCReel'
import { useStrkImages } from '@/hooks/useStrkImages'

export default function Home({ onAddToCart }) {
  const containerRef = useStrkImages([])

  return (
    <main ref={containerRef}>
      <Hero />
      <TrustBar />
      <Bestsellers onAddToCart={onAddToCart} />
      <UGCReel />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  )
}
