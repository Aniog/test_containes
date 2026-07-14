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
    <section ref={containerRef} className="bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative overflow-hidden aspect-square md:aspect-auto md:min-h-[560px]">
            <img
              data-strk-img-id="story-img-velmora-d4e5f6"
              data-strk-img="[story-text] [story-heading] fine jewelry atelier craftsmanship gold"
              data-strk-img-ratio="1x1"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora atelier"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
            <p className="font-sans text-xs tracking-widest uppercase text-gold mb-4">Our Story</p>
            <h2
              id="story-heading"
              className="font-serif font-light text-3xl md:text-4xl text-ink tracking-wide leading-snug"
            >
              Made with intention.<br />
              <em className="not-italic text-gold">Worn with love.</em>
            </h2>
            <div className="w-12 h-px bg-gold mt-6 mb-6" />
            <p
              id="story-text"
              className="font-sans text-sm text-ink-muted leading-relaxed max-w-sm"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't cost a fortune, but it should feel like it does. We design each piece with the modern woman in mind — someone who values quality, wears jewelry every day, and wants to feel effortlessly put-together.
            </p>
            <p className="font-sans text-sm text-ink-muted leading-relaxed max-w-sm mt-4">
              Every Velmora piece is crafted from 18K gold plated brass, hypoallergenic and designed to last. We believe in slow design, thoughtful sourcing, and jewelry that becomes part of your story.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-ink border-b border-ink pb-0.5 hover:text-gold hover:border-gold transition-colors duration-300 self-start"
            >
              Our Story
              <span className="text-base leading-none">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
