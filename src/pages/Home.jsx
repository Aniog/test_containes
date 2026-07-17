import { useRef } from 'react'
import Bestsellers from '@/components/home/Bestsellers.jsx'
import CategoryTiles from '@/components/home/CategoryTiles.jsx'
import Hero from '@/components/home/Hero.jsx'
import Newsletter from '@/components/home/Newsletter.jsx'
import StorySection from '@/components/home/StorySection.jsx'
import Testimonials from '@/components/home/Testimonials.jsx'
import TrustBar from '@/components/home/TrustBar.jsx'
import UGCStrip from '@/components/home/UGCStrip.jsx'
import { useImageLoader } from '@/lib/useImageLoader.js?velmora-direct'

export default function Home({ onAdd }) {
  const pageRef = useRef(null)
  useImageLoader(pageRef, [])

  return (
    <main ref={pageRef} className="bg-velmora-ivory text-velmora-ink">
      <Hero />
      <TrustBar />
      <Bestsellers onAdd={onAdd} />
      <UGCStrip />
      <CategoryTiles />
      <StorySection />
      <Testimonials />
      <Newsletter />
    </main>
  )
}
