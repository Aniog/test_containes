import Hero from '@/components/home/Hero.jsx'
import TrustBar from '@/components/home/TrustBar.jsx'
import Bestsellers from '@/components/home/Bestsellers.jsx'
import UgcReels from '@/components/home/UgcReels.jsx'
import CategoryTiles from '@/components/home/CategoryTiles.jsx'
import BrandStory from '@/components/home/BrandStory.jsx'
import Testimonials from '@/components/home/Testimonials.jsx'
import Newsletter from '@/components/home/Newsletter.jsx'
import { products } from '@/data/products.js'

export default function Home({ onAdd }) {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Bestsellers products={products} onAdd={onAdd} />
      <UgcReels />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  )
}
