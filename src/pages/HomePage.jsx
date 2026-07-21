import { useRef } from 'react'
import Bestsellers from '../components/home/Bestsellers'
import BrandStory from '../components/home/BrandStory'
import CategoryTiles from '../components/home/CategoryTiles'
import HeroSection from '../components/home/HeroSection'
import Newsletter from '../components/home/Newsletter'
import Testimonials from '../components/home/Testimonials'
import TrustBar from '../components/home/TrustBar'
import UgcReels from '../components/home/UgcReels'
import { useStrkImages } from '../hooks/useStrkImages'

export default function HomePage({ products, onAddToCart }) {
  const pageRef = useRef(null)
  useStrkImages(pageRef, [])

  return (
    <main ref={pageRef}>
      <HeroSection />
      <TrustBar />
      <Bestsellers products={products} onAddToCart={onAddToCart} />
      <UgcReels />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  )
}
