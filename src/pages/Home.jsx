import Hero from '@/components/home/Hero.jsx?velmora=3'
import TrustBar from '@/components/home/TrustBar'
import Bestsellers from '@/components/home/Bestsellers.jsx?velmora=3'
import UgcReels from '@/components/home/UgcReels.jsx?velmora=4'
import CategoryTiles from '@/components/home/CategoryTiles.jsx?velmora=3'
import BrandStory from '@/components/home/BrandStory.jsx?velmora=3'
import Testimonials from '@/components/home/Testimonials'
import Newsletter from '@/components/home/Newsletter'
import { useStockImages } from '@/lib/useStockImages'

export default function Home() {
  const containerRef = useStockImages([])

  return (
    <main ref={containerRef}>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UgcReels />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  )
}
