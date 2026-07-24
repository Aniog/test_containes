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
    <section id="about" ref={containerRef} className="bg-ivory-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-square md:aspect-auto md:min-h-[560px] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-c3d4e5"
              data-strk-img="[brand-story-text] [brand-story-title] Velmora fine jewelry artisan craftsmanship gold"
              data-strk-img-ratio="1x1"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
            <p className="font-sans text-xs tracking-widest uppercase text-champagne mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-4xl md:text-5xl font-light text-ink tracking-wide leading-tight mb-6"
            >
              Made with<br />
              <em className="italic">intention</em>
            </h2>
            <div className="w-10 h-px bg-champagne mb-8" />
            <p
              id="brand-story-text"
              className="font-sans text-sm text-warm-gray leading-relaxed mb-5"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't be reserved for special occasions. We design demi-fine pieces that are made to be worn every day — to work, to dinner, to wherever life takes you.
            </p>
            <p className="font-sans text-sm text-warm-gray leading-relaxed mb-10">
              Each piece is crafted with 18K gold plating over solid brass, set with hand-selected stones, and finished to a standard that rivals fine jewelry at a fraction of the price. Nickel-free. Hypoallergenic. Made to last.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-3 font-sans text-xs tracking-widest uppercase text-champagne hover:text-champagne-dark transition-colors duration-200 group"
            >
              Read Our Story
              <div className="w-8 h-px bg-champagne group-hover:w-12 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
