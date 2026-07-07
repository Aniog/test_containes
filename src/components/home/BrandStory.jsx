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
    <section id="about" ref={containerRef} className="bg-linen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[560px] overflow-hidden">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              data-strk-img-id="brand-story-img-c3d4e5"
              data-strk-img="[brand-story-text] [brand-story-heading] gold jewelry artisan crafted"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
            <p className="font-inter text-[10px] uppercase tracking-[0.25em] text-gold mb-4">Our Story</p>
            <h2 id="brand-story-heading" className="font-cormorant text-4xl md:text-5xl text-ink font-light leading-tight mb-6">
              Born from a love of<br />
              <em className="italic">quiet beauty</em>
            </h2>
            <div className="w-10 h-px bg-gold/50 mb-8" />
            <p id="brand-story-text" className="font-inter text-sm text-stone leading-relaxed mb-4">
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion. We create demi-fine pieces designed to be worn every day — from morning coffee to candlelit dinners.
            </p>
            <p className="font-inter text-sm text-stone leading-relaxed mb-10">
              Each piece is crafted with 18K gold plating over hypoallergenic bases, designed to last and to be treasured. We believe in accessible luxury — jewelry that feels like an heirloom without the heirloom price.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-3 font-inter text-xs uppercase tracking-widest text-ink hover:text-gold transition-colors group"
            >
              Read Our Story
              <span className="inline-block w-8 h-px bg-ink group-hover:bg-gold group-hover:w-12 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
