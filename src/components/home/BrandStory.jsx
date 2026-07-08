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
    <section id="about" ref={containerRef} className="bg-cream py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden bg-stone/30">
            <img
              data-strk-img-id="brand-story-img-d4e5f6"
              data-strk-img="[brand-story-text] [brand-story-heading]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story — jewelry craftsmanship"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Decorative border */}
            <div className="absolute inset-4 border border-ivory/30 pointer-events-none" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <p className="text-xs font-sans font-medium uppercase tracking-[0.25em] text-gold mb-5">
              Our Story
            </p>
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-ink tracking-wide leading-[1.2] mb-6"
            >
              Jewelry that tells<br />
              <em className="italic">your</em> story
            </h2>
            <div className="w-12 h-px bg-gold mb-6" />
            <p
              id="brand-story-text"
              className="font-sans text-sm md:text-base text-muted leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a special occasion — or a special budget. We design demi-fine pieces that live at the intersection of quality and accessibility.
            </p>
            <p className="font-sans text-sm md:text-base text-muted leading-relaxed mb-8">
              Every piece is crafted with 18K gold plating over sterling silver, set with hand-selected stones, and designed to be worn every single day. Because you deserve to feel beautiful on a Tuesday.
            </p>
            <Link
              to="/"
              className="self-start text-xs font-sans font-medium uppercase tracking-[0.2em] text-ink border-b border-ink/30 hover:border-gold hover:text-gold transition-all duration-300 pb-0.5"
            >
              Read Our Full Story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
