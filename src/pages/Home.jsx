import React from 'react'
import HeroSection from '@/components/home/HeroSection.jsx'
import TrustBar from '@/components/home/TrustBar.jsx'
import Bestsellers from '@/components/home/Bestsellers.jsx'
import UgcStrip from '@/components/home/UgcStrip.jsx'
import CategoryTiles from '@/components/home/CategoryTiles.jsx'
import BrandStory from '@/components/home/BrandStory.jsx'
import Testimonials from '@/components/home/Testimonials.jsx'
import Newsletter from '@/components/home/Newsletter.jsx'
import { useImageLoader } from '@/hooks/useImageLoader.js'

export default function Home() {
  const pageRef = useImageLoader([])

  return (
    <main ref={pageRef} className="bg-velmora-ivory">
      <HeroSection />
      <TrustBar />
      <Bestsellers />
      <UgcStrip />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  )
}
