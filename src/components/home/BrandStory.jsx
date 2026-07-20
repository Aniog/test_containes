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
    <section ref={containerRef} id="story" className="bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image side */}
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[600px] overflow-hidden bg-linen">
            <span id="story-img-title" className="sr-only">Velmora Fine Jewelry brand story</span>
            <span id="story-img-desc" className="sr-only">artisan jewelry making gold craftsmanship close up hands</span>
            <img
              data-strk-img-id="story-img-main-v3w8x2"
              data-strk-img="[story-img-desc] [story-img-title]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Decorative gold line */}
            <div className="absolute bottom-8 left-8 w-16 h-px bg-gold" />
          </div>

          {/* Text side */}
          <div className="flex items-center px-8 md:px-16 py-16 md:py-20">
            <div className="max-w-md">
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-gold mb-6">
                Our Story
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-ink leading-tight mb-6">
                Made with intention,<br />
                <em className="not-italic text-gold-dark">worn with love</em>
              </h2>
              <div className="w-12 h-px bg-gold mb-8" />
              <p className="font-sans text-sm font-light text-muted leading-relaxed mb-5">
                Velmora was born from a simple belief: that beautiful jewelry shouldn't be reserved for special occasions. We design demi-fine pieces that bridge the gap between fast fashion and fine jewelry — crafted to last, priced to be worn every day.
              </p>
              <p className="font-sans text-sm font-light text-muted leading-relaxed mb-10">
                Every piece is thoughtfully designed in our studio and crafted with 18K gold plating over hypoallergenic bases. We believe in slow, intentional design — fewer pieces, made better.
              </p>
              <Link
                to="/"
                className="font-sans text-[11px] font-semibold uppercase tracking-widest text-ink border-b border-ink pb-0.5 hover:text-gold hover:border-gold transition-colors duration-300"
              >
                Read Our Story →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
