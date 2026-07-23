import HomeHero from '@/components/home/HomeHero'
import TrustBar from '@/components/home/TrustBar'
import Bestsellers from '@/components/home/Bestsellers'
import UgcStrip from '@/components/home/UgcStrip'
import CategoryTiles from '@/components/home/CategoryTiles'
import StorySection from '@/components/home/StorySection'
import Testimonials from '@/components/home/Testimonials'
import Newsletter from '@/components/home/Newsletter'
import { categories, products, testimonials, ugcCards } from '@/data/products'
import { useStrkImages } from '@/lib/useStrkImages'

export default function Home({ onAddToCart }) {
  const containerRef = useStrkImages([])

  return (
    <main ref={containerRef}>
      <HomeHero />
      <TrustBar />
      <Bestsellers products={products} onAddToCart={onAddToCart} />
      <UgcStrip cards={ugcCards} />
      <CategoryTiles categories={categories} />
      <StorySection />
      <Testimonials testimonials={testimonials} />
      <Newsletter />
    </main>
  )
}
