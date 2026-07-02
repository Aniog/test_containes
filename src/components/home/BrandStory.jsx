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
    <section id="story" ref={containerRef} className="bg-parchment">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[560px] overflow-hidden">
            <img
              data-strk-img-id="story-img-main-b2c3d4"
              data-strk-img="[story-text] [story-heading]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-16 md:py-20">
            <p className="font-sans text-[10px] tracking-widest3 uppercase text-champagne mb-4">
              Our Story
            </p>
            <h2
              id="story-heading"
              className="font-serif text-4xl md:text-5xl font-light text-velvet leading-tight mb-6"
            >
              Made with<br />
              <em className="italic">intention</em>
            </h2>
            <div className="w-10 h-px bg-champagne mb-8" />
            <p
              id="story-text"
              className="font-sans text-sm text-stone leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a special occasion — or a special budget. We design demi-fine pieces that feel genuinely luxurious, crafted to be worn every day and treasured for years.
            </p>
            <p className="font-sans text-sm text-stone leading-relaxed mb-10">
              Every piece is thoughtfully designed in our studio, using 18K gold plating over hypoallergenic brass. No nickel. No compromise.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-3 font-sans text-xs tracking-widest uppercase text-velvet hover:text-champagne transition-colors group"
            >
              Read Our Story
              <span className="w-8 h-px bg-current transition-all duration-300 group-hover:w-12" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
