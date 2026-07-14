import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 border-t border-brand-sand">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-brand-ivory overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-h6f2k9"
              data-strk-img="[brand-story-text] [brand-story-heading] artisan jewelry crafting gold"
              data-strk-img-ratio="3x4"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl text-brand-charcoal font-light leading-snug"
            >
              Designed with Intention, Crafted with Care
            </h2>
            <p
              id="brand-story-text"
              className="mt-6 text-sm md:text-base text-brand-charcoal/80 font-sans leading-relaxed"
            >
              Every Velmora piece begins as a sketch inspired by architecture, nature, and the
              quiet confidence of the women who wear them. We work with skilled artisans to bring
              each design to life in 18K gold-plated metals, ensuring lasting beauty without the
              luxury markup.
            </p>
            <p className="mt-4 text-sm md:text-base text-brand-charcoal/80 font-sans leading-relaxed">
              Our commitment to quality means every clasp, every setting, every finish is
              considered — because jewelry should feel as good as it looks.
            </p>
            <a
              href="#"
              className="inline-block mt-8 text-xs tracking-widest-plus uppercase font-sans font-medium text-brand-charcoal border-b border-brand-charcoal pb-0.5 hover:text-brand-gold hover:border-brand-gold transition-colors"
            >
              Our Story
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
