import Bestsellers from '@/components/home/Bestsellers.jsx'
import BrandStory from '@/components/home/BrandStory.jsx'
import CategoryTiles from '@/components/home/CategoryTiles.jsx'
import Hero from '@/components/home/Hero.jsx'
import Newsletter from '@/components/home/Newsletter.jsx'
import Testimonials from '@/components/home/Testimonials.jsx'
import TrustBar from '@/components/home/TrustBar.jsx'
import UgcReels from '@/components/home/UgcReels.jsx'
import { useStockImages } from '@/hooks/useStockImages.js'
import { products } from '@/data/products.js'

export default function HomePage({ onAddToCart }) {
  const containerRef = useStockImages([])

  return (
    <main ref={containerRef}>
      <Hero />
      <TrustBar />
      <Bestsellers products={products} onAddToCart={onAddToCart} />
      <UgcReels />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <section id="journal" className="bg-[#F7F1E8] px-5 pb-20 text-center text-[#17110D] md:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#B9853B]">Journal</p>
        <h2 className="mx-auto mt-3 max-w-2xl font-serif text-4xl leading-tight md:text-5xl">Notes on layering, care, and gifting well.</h2>
      </section>
      <Newsletter />
    </main>
  )
}
