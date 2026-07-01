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
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[560px] overflow-hidden">
            <img
              data-strk-img-id="story-img-main-b7c8d9"
              data-strk-img="[story-text] [story-title] gold jewelry artisan craftsmanship"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex items-center px-8 md:px-16 py-16 md:py-20">
            <div className="max-w-md">
              <p className="font-sans text-xs uppercase tracking-widest text-gold mb-4">Our Story</p>
              <h2 id="story-title" className="font-serif text-3xl md:text-4xl text-velvet font-light leading-snug mb-6">
                Made with intention.<br />
                <em className="italic">Worn with love.</em>
              </h2>
              <div className="w-10 h-px bg-gold mb-8" />
              <p id="story-text" className="font-sans text-sm text-mink leading-relaxed mb-5">
                Velmora was born from a simple belief: that beautiful jewelry shouldn't cost a fortune, but it should feel like it does. Every piece is thoughtfully designed to flatter, to last, and to become a part of your story.
              </p>
              <p className="font-sans text-sm text-mink leading-relaxed mb-8">
                We work with skilled artisans to create demi-fine pieces in 18K gold plate — hypoallergenic, tarnish-resistant, and crafted for real life. From your morning coffee to your evening out.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-3 font-sans text-xs uppercase tracking-widest text-velvet hover:text-gold transition-colors group"
              >
                Our Story
                <span className="w-8 h-px bg-velvet group-hover:bg-gold transition-colors group-hover:w-12 transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
