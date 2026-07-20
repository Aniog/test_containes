import { categories, products } from '@/data/products.js?velmora=png-assets'
import Bestsellers from '@/components/home/Bestsellers.jsx?velmora=local-bg-images'
import BrandStory from '@/components/home/BrandStory.jsx?velmora=local-bg-images'
import CategoryTiles from '@/components/home/CategoryTiles.jsx?velmora=local-bg-images'
import HeroSection from '@/components/home/HeroSection.jsx?velmora=local-bg-images'
import Newsletter from '@/components/home/Newsletter'
import Testimonials from '@/components/home/Testimonials'
import TrustBar from '@/components/home/TrustBar'
import UGCReel from '@/components/home/UGCReel.jsx?velmora=local-bg-images'

export default function HomePage({ onAddToCart }) {
  return (
    <main className="bg-velmora-ivory text-velmora-ink">
      <HeroSection />
      <TrustBar />
      <Bestsellers products={products} onAddToCart={onAddToCart} />
      <UGCReel />
      <CategoryTiles categories={categories} />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  )
}
