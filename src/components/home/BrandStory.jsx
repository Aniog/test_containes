import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} id="about" className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="velmora-brand-story-a1b2c3"
              data-strk-img="[brand-story-heading] [brand-story-text] artisan crafting gold jewelry workshop"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <h2 id="brand-story-heading" className="font-serif text-3xl md:text-5xl font-light text-charcoal leading-tight">
              Our Story
            </h2>
            <div className="w-12 h-px bg-accent mt-6 mb-6" />
            <p id="brand-story-text" className="text-muted leading-relaxed text-base">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a luxury price tag. 
              Each piece in our collection is thoughtfully designed and meticulously crafted using 18K gold plating 
              over hypoallergenic metals — delivering the warmth and weight of fine jewelry at an accessible price point.
            </p>
            <p className="text-muted leading-relaxed text-base mt-4">
              We design for the modern woman who values quality, intention, and timeless style over fleeting trends. 
              From our studio to your jewelry box, every Velmora piece is made to be treasured.
            </p>
            <a
              href="#"
              className="inline-block mt-8 text-xs tracking-widest uppercase text-accent border-b border-accent pb-1 hover:text-accent-hover hover:border-accent-hover transition-colors"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
