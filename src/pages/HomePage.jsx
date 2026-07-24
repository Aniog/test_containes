import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/home/TrustBar'
import BestsellersSection from '@/components/home/BestsellersSection'
import UGCStrip from '@/components/home/UGCStrip'
import CategoryTiles from '@/components/home/CategoryTiles'
import BrandStory from '@/components/home/BrandStory'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import NewsletterSection from '@/components/home/NewsletterSection'
import {
  categoryTiles,
  products,
  testimonials,
  trustPoints,
  ugcMoments,
} from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'

const HomePage = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') {
        cleanup()
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="bg-ivory text-velvet">
      <HeroSection />
      <TrustBar items={trustPoints} />
      <div className="mx-auto flex max-w-7xl flex-col gap-20 px-6 py-16 md:gap-24 md:px-10 md:py-20 xl:px-16 xl:py-24">
        <BestsellersSection products={products} />
        <UGCStrip items={ugcMoments} />
        <CategoryTiles items={categoryTiles} />
        <BrandStory />
        <TestimonialsSection items={testimonials} />
        <NewsletterSection />
      </div>
    </div>
  )
}

export default HomePage
