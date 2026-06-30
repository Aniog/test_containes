import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-velmora-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative rounded-lg overflow-hidden aspect-[4/5]">
            <img
              data-strk-img-id="brand-story-artisanship-6g7h"
              data-strk-img="[story-subtitle] [story-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-velmora-surface/20 md:to-velmora-surface/60" />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="text-velmora-gold text-xs tracking-widest-2xl uppercase font-sans mb-4">
              Our Story
            </p>
            <h2
              id="story-title"
              className="font-serif text-3xl md:text-5xl font-light text-velmora-cream tracking-wide leading-tight"
            >
              Jewelry That<br />Tells Your Story
            </h2>
            <div className="w-12 h-px bg-velmora-gold/40 my-6" />
            <p
              id="story-subtitle"
              className="text-velmora-muted leading-relaxed text-sm md:text-base mb-4"
            >
              At Velmora, we believe jewelry is more than an accessory — it is a reflection of who you are. Every piece in our collection is crafted with intention, using premium materials that stand the test of time.
            </p>
            <p className="text-velmora-muted leading-relaxed text-sm md:text-base mb-8">
              Our 18K gold-plated designs are hypoallergenic, water-resistant, and made to be worn every day. Because the most treasured pieces are the ones you never take off.
            </p>
            <Link
              to="/about"
              className="inline-block text-sm tracking-wider uppercase text-velmora-gold border-b border-velmora-gold/40 pb-1 hover:border-velmora-gold transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
