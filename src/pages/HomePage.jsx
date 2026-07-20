import React, { useEffect, useRef, lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import HomeHero from '@/components/home/HomeHero'
import Bestsellers from '@/components/home/Bestsellers'

const UGCRow = lazy(() => import('@/components/home/UGCRow'))
const CategoryTiles = lazy(() => import('@/components/home/CategoryTiles'))
const Testimonials = lazy(() => import('@/components/home/Testimonials'))
const Newsletter = lazy(() => import('@/components/home/Newsletter'))

const SectionFallback = () => (
  <div className="py-20 flex justify-center">
    <div className="w-5 h-5 border-2 border-gold border-t-transparent rounded-full animate-spin" />
  </div>
)

export default function HomePage() {
  const storyRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, storyRef.current)
  }, [])

  return (
    <>
      <HomeHero />

      {/* Trust Bar */}
      <div className="bg-espresso text-taupe/50 text-xs font-sans uppercase tracking-[0.15em] py-4 overflow-hidden">
        <div className="flex justify-center gap-8 md:gap-16 whitespace-nowrap">
          <span>Free Worldwide Shipping</span>
          <span className="text-gold">·</span>
          <span>30-Day Returns</span>
          <span className="text-gold">·</span>
          <span>18K Gold Plated</span>
          <span className="text-gold">·</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      <Bestsellers />

      <Suspense fallback={<SectionFallback />}><UGCRow /></Suspense>
      <Suspense fallback={<SectionFallback />}><CategoryTiles /></Suspense>

      {/* Brand Story Split */}
      <section ref={storyRef} className="bg-cream">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="aspect-[4/5] md:aspect-auto bg-muted-gold overflow-hidden">
            <img
              data-strk-img-id="story-img-x1y2z3"
              data-strk-img="[story-subtitle] [story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center px-8 md:px-16 lg:px-24 py-16 md:py-0">
            <div className="max-w-md">
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold mb-4">
                Our Story
              </p>
              <h2
                id="story-title"
                className="font-serif text-3xl md:text-4xl text-espresso font-light mb-6 leading-tight"
              >
                Jewelry that becomes part of your story
              </h2>
              <p
                id="story-subtitle"
                className="text-espresso/60 text-sm leading-relaxed mb-8 font-sans font-light"
              >
                Velmora was born from the belief that fine jewelry should be an everyday luxury — not locked away for special occasions. Each piece is crafted in 18K gold-plated brass, designed in our London atelier and made to be worn, layered, and loved every single day.
              </p>
              <Link to="/shop" className="btn-outline text-xs">
                Discover Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={<SectionFallback />}><Testimonials /></Suspense>
      <Suspense fallback={<SectionFallback />}><Newsletter /></Suspense>
    </>
  )
}