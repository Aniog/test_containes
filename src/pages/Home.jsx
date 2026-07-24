import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import HomeHero from '@/components/storefront/HomeHero.jsx'
import TrustBar from '@/components/storefront/TrustBar.jsx'
import ProductCard from '@/components/storefront/ProductCard.jsx'
import UgcStrip from '@/components/storefront/UgcStrip.jsx'
import CategoryTiles from '@/components/storefront/CategoryTiles.jsx'
import StorySection from '@/components/storefront/StorySection.jsx'
import Testimonials from '@/components/storefront/Testimonials.jsx'
import Newsletter from '@/components/storefront/Newsletter.jsx'
import { products } from '@/data/products.js'

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <HomeHero />
      <TrustBar />

      <main className="bg-[#f6f0ea] text-[#241d1f]">
        <div className="mx-auto max-w-7xl space-y-16 px-5 py-16 md:px-8 md:py-20 lg:px-12 lg:py-24">
          <section id="bestsellers" className="space-y-8">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#8a6c5d]">Bestsellers</p>
                <h2 className="font-['Cormorant_Garamond'] text-4xl text-[#241d1f] md:text-5xl">
                  The pieces women come back for
                </h2>
              </div>
              <p className="hidden max-w-md text-sm leading-6 text-[#6d5a57] md:block">
                A polished edit of demi-fine jewelry designed for gifting, layering, and everyday elevation.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>

          <UgcStrip />
          <CategoryTiles />
          <StorySection />
          <Testimonials />
          <Newsletter />
        </div>
      </main>
    </div>
  )
}
