import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} id="about" className="py-16 md:py-24 bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-brand-sand relative overflow-hidden">
            <div
              className="absolute inset-0"
              data-strk-bg-id="brand-story-img-k3l4m5"
              data-strk-bg="[brand-story-desc] [brand-story-heading]"
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="800"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <span className="font-sans text-xs uppercase tracking-wide-xl text-brand-gold">
              Our Story
            </span>
            <h2 id="brand-story-heading" className="font-serif text-3xl md:text-4xl lg:text-5xl text-brand-espresso mt-4 leading-tight">
              Jewelry That Tells Your Story
            </h2>
            <p id="brand-story-desc" className="font-sans text-sm md:text-base text-brand-muted mt-6 leading-relaxed">
              Born from a belief that luxury should be accessible, Velmora creates demi-fine pieces 
              that bridge the gap between costume and fine jewelry. Each design is thoughtfully crafted 
              using 18K gold plating over hypoallergenic metals — beautiful enough for special moments, 
              durable enough for every day.
            </p>
            <p className="font-sans text-sm md:text-base text-brand-muted mt-4 leading-relaxed">
              We believe in slow fashion, timeless design, and the quiet confidence that comes from 
              wearing something truly special.
            </p>
            <a
              href="#"
              className="inline-block mt-8 font-sans text-xs uppercase tracking-wide-xl text-brand-charcoal border-b border-brand-charcoal pb-1 hover:text-brand-gold hover:border-brand-gold transition-colors"
            >
              Read Our Story
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
