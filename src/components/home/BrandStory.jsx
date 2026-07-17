import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-a7b2c1"
              data-strk-img="[brand-story-title] [brand-story-text]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:py-8">
            <p className="text-xs tracking-widest uppercase text-gold font-medium mb-4">Our Story</p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl text-charcoal leading-snug"
            >
              Where Craftsmanship Meets Everyday Elegance
            </h2>
            <p
              id="brand-story-text"
              className="mt-6 text-muted-fg leading-relaxed"
            >
              Born from a belief that fine jewelry shouldn't live in a box, Velmora creates pieces meant to be worn every day. Each design is hand-finished with 18K gold plating over hypoallergenic base metals — delivering the look and feel of luxury without the luxury price tag.
            </p>
            <p className="mt-4 text-muted-fg leading-relaxed">
              We source ethically, craft thoughtfully, and design for the woman who values both beauty and substance.
            </p>
            <button className="mt-8 border border-gold text-gold px-8 py-3 text-sm tracking-widest uppercase font-medium hover:bg-gold hover:text-cream transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
