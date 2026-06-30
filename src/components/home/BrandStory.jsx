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
    <section ref={containerRef} className="bg-linen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative overflow-hidden" style={{ minHeight: '500px' }}>
            <img
              data-strk-img-id="brand-story-img-c3d4e5"
              data-strk-img="[brand-story-text] [brand-story-headline] fine jewelry artisan craftsmanship gold"
              data-strk-img-ratio="1x1"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-obsidian/10" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
            <p className="text-xs font-sans uppercase tracking-ultra-wide text-gold mb-5">Our Story</p>
            <h2
              id="brand-story-headline"
              className="font-serif text-3xl md:text-4xl font-light text-obsidian leading-snug mb-6"
            >
              Made with intention.<br />
              <em className="italic">Worn with love.</em>
            </h2>
            <p
              id="brand-story-text"
              className="text-sm font-sans text-driftwood leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a special occasion. We design demi-fine pieces that feel luxurious without the luxury price tag — crafted to become part of your everyday story.
            </p>
            <p className="text-sm font-sans text-driftwood leading-relaxed mb-8">
              Every piece is thoughtfully designed, ethically sourced, and finished by hand. We use 18K gold plating over hypoallergenic bases, so your jewelry stays beautiful wear after wear.
            </p>
            <Link
              to="/about"
              className="self-start text-xs font-sans uppercase tracking-widest text-obsidian hover:text-gold transition-colors border-b border-obsidian/30 hover:border-gold pb-0.5"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
