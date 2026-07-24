import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import HomeHero from '@/components/home/HomeHero'
import TrustBar from '@/components/home/TrustBar?trust=v2'
import BestsellersSection from '@/components/home/BestsellersSection?best=v3'
import UgcReelSection from '@/components/home/UgcReelSection?ugc=v2'
import CategoryTiles from '@/components/home/CategoryTiles?cat=v2'
import BrandStorySection from '@/components/home/BrandStorySection?story=v3'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import JournalStrip from '@/components/home/JournalStrip'
import NewsletterBanner from '@/components/common/NewsletterBanner'
import { categories, products, testimonials, ugcMoments } from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'

const HomePage = () => {
  const featuredProducts = products.filter((product) => product.featured).slice(0, 5)
  const pageRef = useRef(null)

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') {
        cleanup()
      }
    }
  }, [])

  return (
    <div ref={pageRef} className="bg-velmora-ivory">
      <HomeHero />
      <TrustBar />
      <BestsellersSection products={featuredProducts} />
      <UgcReelSection moments={ugcMoments} />
      <CategoryTiles categories={categories} />
      <BrandStorySection />
      <TestimonialsSection testimonials={testimonials} />
      <JournalStrip />
      <NewsletterBanner />
    </div>
  )
}

export default HomePage
