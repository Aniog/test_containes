import { useRef } from 'react'
import { useStrkImages } from '@/hooks/useStrkImages'
import Hero from '@/components/home/Hero'
import TrustBar from '@/components/home/TrustBar'
import Bestsellers from '@/components/home/Bestsellers'
import UgcReels from '@/components/home/UgcReels'
import CategoryTiles from '@/components/home/CategoryTiles'
import BrandStory from '@/components/home/BrandStory'
import Testimonials from '@/components/home/Testimonials'
import Newsletter from '@/components/home/Newsletter'

export default function Home() {
  const containerRef = useRef(null)
  useStrkImages(containerRef, [])

  return (
    <main ref={containerRef} id="top">
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
