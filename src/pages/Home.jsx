import HomeHero from '@/components/home/HomeHero'
import TrustBar from '@/components/home/TrustBar'
import Bestsellers from '@/components/home/Bestsellers'
import UGCRow from '@/components/home/UGCRow'
import CategoryTiles from '@/components/home/CategoryTiles'
import BrandStory from '@/components/home/BrandStory'
import Testimonials from '@/components/home/Testimonials'
import Newsletter from '@/components/home/Newsletter'
import { useStrkImages } from '@/lib/useStrkImages'

export default function Home({ onAddToCart }) {
  const containerRef = useStrkImages([])

  return (
    <main ref={containerRef} className="bg-velmora-porcelain text-velmora-espresso">
      <HomeHero />
      <TrustBar />
      <Bestsellers onAddToCart={onAddToCart} />
      <UGCRow />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  )
}
