import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/home/TrustBar'
import BestsellersGrid from '@/components/home/BestsellersGrid'
import UGCReelStrip from '@/components/home/UGCReelStrip'
import CategoryTiles from '@/components/home/CategoryTiles'
import BrandStory from '@/components/home/BrandStory'
import Testimonials from '@/components/home/Testimonials'
import Newsletter from '@/components/home/Newsletter'

export default function HomePage({ products }) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef}>
      <HeroSection />
      <TrustBar />
      <BestsellersGrid products={products} />
      <UGCReelStrip />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  )
}
