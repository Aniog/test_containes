import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} id="story" className="py-16 md:py-24 bg-velmora-warm">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden">
            <img
              data-strk-img-id="story-img-velmora-d4e5f6"
              data-strk-img="[story-title] [story-body] gold jewelry craftsmanship artisan hands"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1.333'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="py-4 md:py-8">
            <p className="text-xs uppercase tracking-[0.25em] text-velmora-gold mb-4">Our Story</p>
            <h2
              id="story-title"
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-charcoal leading-tight"
            >
              Jewelry That Tells a Story
            </h2>
            <div className="w-12 h-px bg-velmora-gold my-8" />
            <p
              id="story-body"
              className="font-sans text-velmora-muted leading-relaxed text-sm md:text-base"
            >
              Founded with a passion for accessible luxury, Velmora creates demi-fine jewelry
              that bridges the gap between fast fashion and fine jewelry. Each piece is crafted
              from 18K gold-plated materials, designed to be worn daily and treasured for years.
              We believe every woman deserves jewelry that makes her feel radiant — without the
              heirloom price tag.
            </p>
            <p className="font-sans text-velmora-muted leading-relaxed text-sm md:text-base mt-4">
              From our studio to your jewelry box, every detail is considered. Hypoallergenic
              finishes, tarnish-resistant plating, and timeless designs that outlast trends.
            </p>
            <Link
              to="/"
              className="inline-block mt-8 text-xs uppercase tracking-widest text-velmora-charcoal border-b border-velmora-charcoal pb-1 hover:text-velmora-gold hover:border-velmora-gold transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}