import { useRef } from 'react'
import { categories, products, ugcCards } from '@/data/products.js'
import Bestsellers from '@/components/home/Bestsellers.jsx'
import BrandStory from '@/components/home/BrandStory.jsx'
import CategoryTiles from '@/components/home/CategoryTiles.jsx'
import HeroSection from '@/components/home/HeroSection.jsx'
import Newsletter from '@/components/home/Newsletter.jsx'
import Testimonials from '@/components/home/Testimonials.jsx'
import TrustBar from '@/components/home/TrustBar.jsx'
import UgcReels from '@/components/home/UgcReels.jsx'
import { useStrkImages } from '@/hooks/useStrkImages.js'

export default function HomePage({ onAddToCart }) {
  const containerRef = useRef(null)
  useStrkImages(containerRef, [])

  return (
    <main ref={containerRef} className="bg-velmora-ivory text-velmora-ink">
      <HeroSection />
      <TrustBar />
      <Bestsellers products={products} onAddToCart={onAddToCart} />
      <UgcReels cards={ugcCards} />
      <CategoryTiles categories={categories} />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  )
}
