import { useRef, useEffect } from 'react'
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
              data-strk-img-id="brand-story-img-f6g7h8"
              data-strk-img="[brand-story-heading] [brand-story-text] artisan jewelry crafting"
              data-strk-img-ratio="3x4"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Artisan crafting gold jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <h2 id="brand-story-heading" className="font-serif text-3xl md:text-4xl text-charcoal font-normal leading-snug">
              Designed with Intention, Made to Last
            </h2>
            <p id="brand-story-text" className="font-sans text-stone text-sm md:text-base mt-6 leading-relaxed">
              Every Velmora piece begins as a sketch in our London studio. We believe jewelry should feel as good as it looks — lightweight, hypoallergenic, and built to withstand the rhythm of your everyday life.
            </p>
            <p className="font-sans text-stone text-sm md:text-base mt-4 leading-relaxed">
              Our 18K gold plating is applied in multiple layers over recycled brass, creating a rich warmth that lasts. No fast fashion, no compromise — just considered design at an accessible price.
            </p>
            <a
              href="#"
              className="inline-block mt-8 font-sans text-sm text-gold uppercase tracking-wider underline underline-offset-4 hover:text-goldLight transition-colors"
            >
              Our Story
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
