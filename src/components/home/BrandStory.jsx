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
    <section ref={containerRef} className="py-20 md:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img-id="brand-story-img-c3d4e5"
                data-strk-img="[brand-story-desc] [brand-story-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                alt="Velmora brand story"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-champagne/30 -z-10 hidden md:block" />
          </div>

          {/* Text */}
          <div className="space-y-6">
            <p className="font-sans text-xs uppercase tracking-widest text-champagne">Our Story</p>
            <h2
              id="brand-story-title"
              className="font-serif text-4xl md:text-5xl text-obsidian font-light leading-tight"
            >
              Jewelry that tells<br />
              <em className="italic text-champagne-dark">your story</em>
            </h2>
            <div className="w-10 h-px bg-champagne" />
            <p
              id="brand-story-desc"
              className="font-sans text-sm text-stone leading-relaxed"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a special occasion. We design demi-fine pieces that feel luxurious, wear effortlessly, and last for years — not just a season.
            </p>
            <p className="font-sans text-sm text-stone leading-relaxed">
              Every piece is thoughtfully crafted with 18K gold plating over hypoallergenic bases, designed to be worn daily, layered freely, and gifted with love.
            </p>
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-3 font-sans text-xs uppercase tracking-widest text-champagne hover:text-champagne-dark transition-colors group"
              >
                Read Our Story
                <span className="w-8 h-px bg-champagne group-hover:w-12 transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
