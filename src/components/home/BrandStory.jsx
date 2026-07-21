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
    <section id="story" ref={containerRef} className="py-20 md:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="story-img-main-b1c2d3"
              data-strk-img="[story-text] [story-headline] fine jewelry craftsmanship atelier"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              alt="Our story"
              className="w-full h-full object-cover"
            />
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-3/4 h-3/4 border border-gold/30 pointer-events-none" />
          </div>

          {/* Text */}
          <div className="space-y-6">
            <p className="font-sans text-xs tracking-widest3 uppercase text-gold">Our Story</p>
            <h2 id="story-headline" className="font-serif text-4xl md:text-5xl font-light text-espresso leading-tight">
              Made with intention.<br />
              <em className="italic">Worn with love.</em>
            </h2>
            <div className="w-10 h-px bg-gold" />
            <p id="story-text" className="font-sans text-sm text-stone leading-relaxed">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't cost a fortune, but it should feel like it does. We design each piece with the modern woman in mind — someone who moves through the world with intention, who values quality over quantity, and who deserves to feel extraordinary every single day.
            </p>
            <p className="font-sans text-sm text-stone leading-relaxed">
              Every Velmora piece is crafted from 18K gold plated brass, hypoallergenic and designed to last. We believe in slow fashion, thoughtful design, and jewelry that tells a story.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-3 font-sans text-xs tracking-widest uppercase text-espresso hover:text-gold transition-colors group"
            >
              Read Our Story
              <div className="w-8 h-px bg-espresso group-hover:bg-gold group-hover:w-12 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
