import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-u5v6w7"
              data-strk-img="[brand-story-title] [brand-story-desc] artisan crafting gold jewelry workshop"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <p className="text-xs uppercase tracking-wide-xl text-brand-gold font-medium mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl text-brand-charcoal mb-6 leading-tight"
            >
              Where Timeless Craft Meets Modern Elegance
            </h2>
            <p
              id="brand-story-desc"
              className="text-sm text-brand-muted leading-relaxed mb-6"
            >
              Born from a belief that luxury should be accessible, Velmora creates demi-fine jewelry 
              that bridges the gap between costume and fine. Each piece is thoughtfully designed in our 
              studio and crafted with 18K gold plating over hypoallergenic metals — so you never have 
              to choose between quality and price.
            </p>
            <p className="text-sm text-brand-muted leading-relaxed mb-8">
              We believe jewelry should be worn every day, not saved for special occasions. Our pieces 
              are made to layer, to stack, to become part of your signature style.
            </p>
            <Link
              to="/about"
              className="inline-block border border-brand-charcoal text-brand-charcoal px-8 py-3 text-xs uppercase tracking-wide-xl font-medium hover:bg-brand-charcoal hover:text-white transition-colors"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
