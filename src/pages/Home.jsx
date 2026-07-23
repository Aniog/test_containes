import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import Bestsellers from '@/components/home/Bestsellers'
import BrandStory from '@/components/home/BrandStory'
import CategoryTiles from '@/components/home/CategoryTiles'
import HomeHero from '@/components/home/HomeHero'
import Newsletter from '@/components/home/Newsletter'
import Testimonials from '@/components/home/Testimonials'
import TrustBar from '@/components/home/TrustBar'
import UgcReel from '@/components/home/UgcReel'
import { products } from '@/data/products'
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
    <main ref={pageRef} className="bg-velmora-ivory text-velmora-espresso">
      <HomeHero />
      <TrustBar />
      <Bestsellers products={products} onAddToCart={onAddToCart} />
      <UgcReel />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  )
}
