import Bestsellers from '@/components/home/Bestsellers'
import BrandStory from '@/components/home/BrandStory'
import CategoryTiles from '@/components/home/CategoryTiles'
import HeroSection from '@/components/home/HeroSection'
import Newsletter from '@/components/home/Newsletter'
import Testimonials from '@/components/home/Testimonials'
import TrustBar from '@/components/home/TrustBar'
import UgcReels from '@/components/home/UgcReels'
import { categories, products, testimonials, ugcMoments } from '@/data/products'
import { useImageLoader } from '@/hooks/useImageLoader'

export default function Home({ onAddToCart }) {
  const containerRef = useImageLoader([])

  return (
    <main ref={containerRef} className="bg-velmora-ivory text-velmora-ink">
      <HeroSection />
      <TrustBar />
      <Bestsellers products={products} onAddToCart={onAddToCart} />
      <UgcReels moments={ugcMoments} />
      <CategoryTiles categories={categories} />
      <BrandStory />
      <Testimonials testimonials={testimonials} />
      <Newsletter />
    </main>
  )
}
