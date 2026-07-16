import { useRef } from 'react'
import { useImageLoader } from '@/components/common/useImageLoader.js'
import HeroSection from '@/components/home/HeroSection.jsx'
import TrustBar from '@/components/home/TrustBar.jsx'
import Bestsellers from '@/components/home/Bestsellers.jsx'
import UgcReel from '@/components/home/UgcReel.jsx'
import CategoryTiles from '@/components/home/CategoryTiles.jsx'
import StorySection from '@/components/home/StorySection.jsx'
import Testimonials from '@/components/home/Testimonials.jsx'
import Newsletter from '@/components/home/Newsletter.jsx'

export default function Home({ onAdd }) {
  const pageRef = useRef(null)
  useImageLoader(pageRef, [])

  return (
    <main ref={pageRef} className="bg-velmora-ivory text-velmora-espresso">
      <HeroSection />
      <TrustBar />
      <Bestsellers onAdd={onAdd} />
      <UgcReel />
      <CategoryTiles />
      <StorySection />
      <Testimonials />
      <Newsletter />
    </main>
  )
}
