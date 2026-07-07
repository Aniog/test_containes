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
    <section id="about" ref={containerRef} className="bg-velmora-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[520px] md:min-h-[600px]">
          {/* Image */}
          <div className="relative overflow-hidden bg-velmora-charcoal min-h-[320px] md:min-h-0">
            <img
              data-strk-img-id="brand-story-img-c8d9e0"
              data-strk-img="[brand-story-text] [brand-story-title] fine jewelry artisan craftsmanship"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
            <p className="font-manrope text-[10px] tracking-[0.3em] uppercase text-velmora-gold mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-cormorant text-3xl md:text-4xl font-light text-velmora-text-dark leading-snug mb-6"
            >
              Made with intention.<br />
              <em className="italic">Worn with love.</em>
            </h2>
            <p
              id="brand-story-text"
              className="font-manrope text-sm text-velmora-text-mid leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a special occasion. We design demi-fine pieces that move with you — from morning coffee to candlelit dinners.
            </p>
            <p className="font-manrope text-sm text-velmora-text-mid leading-relaxed mb-8">
              Every piece is crafted with 18K gold plating over hypoallergenic bases, designed to last through real life. Because you deserve jewelry that keeps up with you.
            </p>
            <Link
              to="/"
              className="self-start font-manrope text-xs tracking-widest uppercase text-velmora-text-dark border-b border-velmora-gold pb-0.5 hover:text-velmora-gold transition-colors duration-300"
            >
              Our Story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
