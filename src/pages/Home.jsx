import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import HomeHero from '@/components/home/HomeHero'
import FeatureStrip from '@/components/home/FeatureStrip'
import ProductGrid from '@/components/products/ProductGrid'
import CraftSection from '@/components/home/CraftSection'
import Testimonials from '@/components/home/Testimonials'
import CTASection from '@/components/home/CTASection'
import { products } from '@/components/products/productsData'

export default function Home() {
  const heroRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, heroRef.current)
  }, [])

  return (
    <div ref={heroRef}>
      <HomeHero />
      <FeatureStrip />
      <ProductGrid items={products.slice(0, 3)} columns={3} />
      <CraftSection />
      <Testimonials />
      <CTASection />
    </div>
  )
}
