import { useRef } from 'react'
import Bestsellers from '@/components/home/Bestsellers.jsx?probe=velmora17'
import CategoryTiles from '@/components/home/CategoryTiles.jsx?probe=velmora17'
import Hero from '@/components/home/Hero.jsx?probe=velmora17'
import Newsletter from '@/components/home/Newsletter.jsx?probe=velmora17'
import StorySection from '@/components/home/StorySection.jsx?probe=velmora17'
import Testimonials from '@/components/home/Testimonials.jsx?probe=velmora17'
import TrustBar from '@/components/home/TrustBar.jsx?probe=velmora17'
import UGCStrip from '@/components/home/UGCStrip.jsx?probe=velmora17'
import { useImageLoader } from '@/lib/useImageLoader.js?probe=velmora17'

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
