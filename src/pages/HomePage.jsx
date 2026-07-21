import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import HeroSection from '@/components/storefront/HeroSection'
import TrustBar from '@/components/storefront/TrustBar'
import SectionHeader from '@/components/storefront/SectionHeader'
import ProductCard from '@/components/storefront/ProductCard'
import UGCStrip from '@/components/storefront/UGCStrip'
import CategoryTiles from '@/components/storefront/CategoryTiles'
import StorySection from '@/components/storefront/StorySection'
import TestimonialsSection from '@/components/storefront/TestimonialsSection'
import NewsletterSection from '@/components/storefront/NewsletterSection'
import { products } from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'

export default function HomePage({ onAddToCart }) {
  const containerRef = useRef(null)

  useEffect(() => {
    let cleanup = () => {}
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current) || (() => {})
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

      <section className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionHeader
            eyebrow="Bestsellers"
            title="A refined edit of signature pieces"
            description="Five elevated essentials designed for everyday polish, meaningful gifting, and subtle statement styling."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                priority={index < 2}
              />
            ))}
          </div>
        </div>
      </section>

      <UGCStrip />
      <CategoryTiles />
      <StorySection />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  )
}
