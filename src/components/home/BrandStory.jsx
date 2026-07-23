import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 border-t border-velmora-sand">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[3x4] rounded-sm overflow-hidden bg-velmora-warm">
            <img
              data-strk-img-id="brand-story-img-4e7a2c"
              data-strk-img="[brand-story-subtitle] [brand-story-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-velmora-charcoal tracking-wide">
              Our Story
            </h2>
            <p id="brand-story-subtitle" className="font-sans text-sm text-velmora-muted mt-4 leading-relaxed">
              Velmora was born from a simple belief: fine jewelry should be accessible, wearable, and crafted with care. Every piece is designed in our studio and finished with 18K gold plating over brass — giving you the warmth and richness of gold, without the price tag.
            </p>
            <p className="font-sans text-sm text-velmora-muted mt-4 leading-relaxed">
              We source hypoallergenic materials, hand-polish each piece, and package everything in our signature gift box — because the experience of receiving jewelry should feel as special as wearing it.
            </p>
            <Link
              to="/about"
              className="inline-block mt-6 font-sans text-sm tracking-product text-velmora-gold hover:text-velmora-gold-dark transition-colors border-b border-velmora-gold hover:border-velmora-gold-dark"
            >
              READ MORE
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
