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
    <section ref={containerRef} className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden bg-champagne/20">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              data-strk-img-id="brand-story-img-x1y2z3"
              data-strk-img="[brand-story-text] [brand-story-headline] fine jewelry artisan craftsmanship"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Decorative border */}
            <div className="absolute inset-4 border border-gold/20 pointer-events-none" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <p className="font-sans text-xs tracking-widest3 uppercase text-gold mb-4">Our Story</p>
            <h2
              id="brand-story-headline"
              className="font-serif text-4xl md:text-5xl font-light text-velvet leading-tight"
            >
              Born from a love of<br />
              <em className="italic">quiet beauty</em>
            </h2>
            <div className="w-10 h-px bg-gold mt-6 mb-8" />
            <p
              id="brand-story-text"
              className="font-sans text-sm text-bark leading-relaxed mb-4"
            >
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion. We design demi-fine pieces that move with you — from morning coffee to candlelit dinners.
            </p>
            <p className="font-sans text-sm text-bark leading-relaxed mb-8">
              Every piece is crafted with 18K gold plating over hypoallergenic bases, designed to last and to be loved. We believe in accessible luxury — jewelry that feels like an heirloom, priced for real life.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 font-sans text-xs tracking-widest uppercase text-velvet hover:text-gold transition-colors group w-fit"
            >
              Read Our Story
              <span className="w-8 h-px bg-velvet group-hover:bg-gold group-hover:w-12 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
