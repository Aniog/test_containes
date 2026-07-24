import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useCart } from '@/context/CartContext'
import BestsellersSection from '@/components/storefront/BestsellersSection'
import BrandStorySection from '@/components/storefront/BrandStorySection'
import CategoryTiles from '@/components/storefront/CategoryTiles'
import HeroSection from '@/components/storefront/HeroSection'
import JournalSection from '@/components/storefront/JournalSection'
import NewsletterSection from '@/components/storefront/NewsletterSection'
import ReelsRow from '@/components/storefront/ReelsRow'
import TestimonialsSection from '@/components/storefront/TestimonialsSection'
import TrustBar from '@/components/storefront/TrustBar'

const HomePage = () => {
  const { addToCart } = useCart()
  const containerRef = useRef(null)

  useEffect(() => {
    let cleanup = () => {}

    const frameId = window.requestAnimationFrame(() => {
      const result = ImageHelper.loadImages(strkImgConfig, containerRef.current)
      cleanup = typeof result === 'function' ? result : () => {}
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [])

  return (
    <div ref={containerRef}>
      <HeroSection />
      <TrustBar />
      <BestsellersSection onAddToCart={addToCart} />
      <ReelsRow />
      <CategoryTiles />
      <BrandStorySection />
      <TestimonialsSection />
      <JournalSection />
      <NewsletterSection />
    </div>
  )
}

export default HomePage
