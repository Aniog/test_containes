import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 lg:py-28 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
            <img
              alt="Velmora craftsmanship"
              data-strk-img-id="brand-story-img-g1h2i3"
              data-strk-img="[brand-story-title] [brand-story-desc] jewelry craftsmanship artisan gold"
              data-strk-img-ratio="3x4"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <h2 id="brand-story-title" className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-tight">
              Designed with Intention
            </h2>
            <p id="brand-story-desc" className="mt-6 text-muted-fg font-sans text-base leading-relaxed">
              Every Velmora piece begins as a sketch inspired by architecture, nature, and the quiet confidence of the women who wear them. We believe luxury should be accessible — that you shouldn't have to choose between quality and price.
            </p>
            <p className="mt-4 text-muted-fg font-sans text-base leading-relaxed">
              Our 18K gold-plated pieces are crafted to last, designed to layer, and made to become part of your everyday story.
            </p>
            <button className="mt-8 border border-gold text-gold hover:bg-gold hover:text-cream px-8 py-3 font-sans text-sm font-medium uppercase tracking-button transition-colors">
              Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
