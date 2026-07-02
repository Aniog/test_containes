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
    <section id="about" ref={containerRef} className="bg-parchment">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[560px]">
          {/* Image */}
          <div className="relative overflow-hidden min-h-[400px] md:min-h-0">
            <img
              data-strk-img-id="brand-story-img-q1r2s3"
              data-strk-img="[brand-story-text] [brand-story-title] gold jewelry artisan craftsmanship"
              data-strk-img-ratio="1x1"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
            <p className="font-manrope text-xs uppercase tracking-[0.2em] text-gold mb-5">Our Story</p>
            <h2 id="brand-story-title" className="font-cormorant text-4xl md:text-5xl font-light text-obsidian leading-tight mb-6">
              Made with intention.<br />
              <em className="italic">Worn with love.</em>
            </h2>
            <div className="w-10 h-px bg-gold mb-8" />
            <p id="brand-story-text" className="font-manrope text-sm text-taupe leading-relaxed mb-4">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't be reserved for special occasions. We design demi-fine pieces that are crafted to be worn every day — to work, to dinner, to wherever life takes you.
            </p>
            <p className="font-manrope text-sm text-taupe leading-relaxed mb-10">
              Each piece is thoughtfully designed in our studio and crafted from 18K gold-plated brass with hypoallergenic settings. We believe in accessible luxury — jewelry that looks and feels expensive, without the price tag.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-3 font-manrope text-xs uppercase tracking-[0.15em] text-obsidian hover:text-gold transition-colors duration-300 group"
            >
              Read Our Story
              <span className="w-8 h-px bg-obsidian group-hover:bg-gold group-hover:w-12 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
