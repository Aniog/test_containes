import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/home/TrustBar'
import Bestsellers from '@/components/home/Bestsellers'
import UGCReel from '@/components/home/UGCReel'
import ShopByCategory from '@/components/home/ShopByCategory'
import BrandStory from '@/components/home/BrandStory'
import Testimonials from '@/components/home/Testimonials'
import Newsletter from '@/components/home/Newsletter'

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <main ref={containerRef}>
      <HeroSection />
      <TrustBar />
      <Bestsellers />
      <hr className="hairline-divider" />
      <UGCReel />
      <hr className="hairline-divider" />
      <ShopByCategory />
      <BrandStory />
      <hr className="hairline-divider" />
      <Testimonials />
      <Newsletter />
    </main>
  )
}
