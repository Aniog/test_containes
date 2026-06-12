import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'
import Hero from '../components/home/Hero'
import Highlights from '../components/home/Highlights'
import ProductsPreview from '../components/home/ProductsPreview'
import CraftSection from '../components/home/CraftSection'
import Testimonials from '../components/home/Testimonials'
import CallToAction from '../components/home/CallToAction'

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <Hero />
      <Highlights />
      <ProductsPreview />
      <CraftSection />
      <Testimonials />
      <CallToAction />
    </div>
  )
}
