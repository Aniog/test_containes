import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/home/TrustBar'
import Bestsellers from '@/components/home/Bestsellers'
import UgcReels from '@/components/home/UgcReels'
import CategoryTiles from '@/components/home/CategoryTiles'
import BrandStory from '@/components/home/BrandStory'
import Testimonials from '@/components/home/Testimonials'
import Newsletter from '@/components/home/Newsletter'
import { categories, products, testimonials, ugcItems } from '@/data/products'

export default function Home({ onAddToCart }) {
  return (
    <main className="bg-velmora-porcelain text-velmora-espresso">
      <HeroSection />
      <TrustBar />
      <Bestsellers products={products} onAdd={onAddToCart} />
      <UgcReels items={ugcItems} />
      <CategoryTiles categories={categories} />
      <BrandStory />
      <Testimonials testimonials={testimonials} />
      <Newsletter />
    </main>
  )
}
