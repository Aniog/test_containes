import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-b8c9d0"
              data-strk-img="[brand-story-heading] [brand-story-text] jewelry artisan crafting gold"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <p className="text-xs uppercase tracking-widest text-gold mb-4 font-sans font-medium">Our Story</p>
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl font-light text-charcoal leading-tight"
            >
              Where Craft Meets Intention
            </h2>
            <p
              id="brand-story-text"
              className="mt-6 text-stone leading-relaxed"
            >
              Every Velmora piece begins with a sketch and a story. We believe jewelry should be more than decoration — it should be a daily reminder of your own quiet strength and beauty. Our artisans work with 18K gold-plated metals and ethically sourced stones to create pieces that feel as good as they look.
            </p>
            <p className="mt-4 text-stone leading-relaxed">
              Founded in 2021, we set out to bridge the gap between fine jewelry and everyday accessibility. No markups, no middlemen — just beautiful pieces delivered directly to you.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 text-sm text-gold uppercase tracking-widest font-medium hover:text-gold-dark transition-colors no-underline border-b border-gold pb-0.5"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
