import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-sand">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-1a2b3c"
              data-strk-img="[brand-story-text] [brand-story-title] jewelry craftsmanship artisan"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl tracking-wide text-charcoal"
            >
              Our Story
            </h2>
            <div className="w-12 h-px bg-gold mt-4 mb-6" />
            <p
              id="brand-story-text"
              className="text-muted leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that beautiful, well-crafted jewelry
              shouldn't come with an extravagant price tag. We work directly with artisans
              who share our passion for precision, using only the finest materials — 18K gold
              plating over sterling silver, hand-set crystals, and hypoallergenic finishes.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              Every piece is designed to be lived in — from morning coffee to evening out.
              Because the best jewelry is the kind you never want to take off.
            </p>
            <Link
              to="/about"
              className="inline-block border border-gold text-gold px-8 py-3 text-xs tracking-[0.2em] uppercase font-medium hover:bg-gold hover:text-white transition-all duration-300"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
