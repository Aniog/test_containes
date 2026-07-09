import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/common/TrustBar'
import BestsellersGrid from '@/components/home/BestsellersGrid'
import UgcStrip from '@/components/home/UgcStrip'
import CategoryTiles from '@/components/home/CategoryTiles'
import BrandStory from '@/components/home/BrandStory'
import Testimonials from '@/components/home/Testimonials'
import Newsletter from '@/components/common/Newsletter'
import { testimonials } from '@/data/products'

export default function HomePage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <HeroSection />
      <TrustBar />
      <BestsellersGrid />
      <UgcStrip />
      <CategoryTiles />
      <BrandStory />
      <Testimonials testimonials={testimonials} />
      <Newsletter />
    </div>
  )
}
