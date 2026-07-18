import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import Bestsellers from '@/components/home/Bestsellers'
import BrandStory from '@/components/home/BrandStory'
import CategoryTiles from '@/components/home/CategoryTiles'
import Hero from '@/components/home/Hero'
import Newsletter from '@/components/home/Newsletter'
import Testimonials from '@/components/home/Testimonials'
import TrustBar from '@/components/home/TrustBar'
import UgcReels from '@/components/home/UgcReels'
import strkImgConfig from '@/strk-img-config.json'

export default function Home({ onAddToCart }) {
  const pageRef = useRef(null)

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') cleanup()
    }
  }, [])

  return (
    <main ref={pageRef}>
      <Hero />
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
