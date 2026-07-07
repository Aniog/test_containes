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
    <section id="about" ref={containerRef} className="bg-velmora-linen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[560px]">
          {/* Image side */}
          <div className="relative overflow-hidden min-h-[400px] md:min-h-0">
            <img
              data-strk-img-id="brand-story-img-c4d5e6"
              data-strk-img="[brand-story-text] [brand-story-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Warm tint */}
            <div className="absolute inset-0 bg-velmora-gold/5" />
          </div>

          {/* Text side */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
            <p className="font-manrope text-[9px] tracking-[0.3em] uppercase text-velmora-gold mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-cormorant text-3xl md:text-4xl font-light text-velmora-ink tracking-wide leading-snug mb-6"
            >
              Made for the woman who wears her story
            </h2>
            <div className="w-10 h-px bg-velmora-gold mb-8" />
            <p
              id="brand-story-text"
              className="font-manrope text-sm text-velmora-muted leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a special occasion. We design demi-fine pieces that move with you — from morning coffee to candlelit dinners.
            </p>
            <p className="font-manrope text-sm text-velmora-muted leading-relaxed mb-10">
              Every piece is crafted with 18K gold plating over hypoallergenic bases, designed to last and to be loved. Because the best jewelry is the kind you never want to take off.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-3 font-manrope text-[10px] tracking-[0.2em] uppercase text-velmora-gold hover:text-velmora-gold-dark transition-colors duration-200 group"
            >
              Read Our Story
              <span className="w-8 h-px bg-velmora-gold group-hover:w-12 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
