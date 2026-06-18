import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Bestsellers,
  BrandStory,
  CategoryTiles,
  HeroSection,
  Newsletter,
  Testimonials,
  TrustBar,
  UgcReels,
} from '@/components/home/HomeSections'

export default function Home({ onAddToCart }) {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <main ref={containerRef}>
      <HeroSection />
      <TrustBar />
      <Bestsellers onAddToCart={onAddToCart} />
      <UgcReels />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  )
}
