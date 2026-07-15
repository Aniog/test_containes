import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/home/TrustBar'
import BestsellersSection from '@/components/home/BestsellersSection'
import UgcReelSection from '@/components/home/UgcReelSection'
import CategoryTilesSection from '@/components/home/CategoryTilesSection'
import BrandStorySection from '@/components/home/BrandStorySection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import NewsletterSection from '@/components/home/NewsletterSection'
import { categoryTiles, products, testimonials, ugcMoments } from '@/data/products'

const HomePage = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <HeroSection />
      <TrustBar />
      <BestsellersSection products={products} />
      <UgcReelSection items={ugcMoments} />
      <CategoryTilesSection categories={categoryTiles} />
      <BrandStorySection />
      <TestimonialsSection testimonials={testimonials} />
      <NewsletterSection />
    </div>
  )
}

export default HomePage
