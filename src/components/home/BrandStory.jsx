import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section ref={containerRef} className="py-16 sm:py-24 bg-ivory-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
            <img
              data-strk-img-id="brand-story-image-main"
              data-strk-img="[brand-story-title] [brand-story-text] gold jewelry artisan workshop craftsmanship"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan craftsmanship"
              className="absolute inset-0 w-full h-full object-cover bg-stone-300"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="text-[11px] font-medium tracking-widest-2xl uppercase text-gold-dark mb-4">
              Our Story
            </p>
            <h2 id="brand-story-title" className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-900 leading-[1.15]">
              Jewelry That Feels Like You
            </h2>
            <div className="w-12 h-px bg-gold mt-6 mb-6" />
            <p id="brand-story-text" className="text-stone-600 leading-relaxed mb-4">
              Velmora was born from a simple belief: luxury should be accessible, 
              not exclusive. We create demi-fine jewelry using 18K gold plating over 
              quality base metals, delivering the look and feel of fine jewelry 
              at a fraction of the cost.
            </p>
            <p className="text-stone-600 leading-relaxed mb-8">
              Every piece is designed to be worn every day — to the office, on a date, 
              or wherever life takes you. Because the best jewelry isn't locked in a box. 
              It's part of your story.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center text-[13px] font-medium tracking-widest-xl uppercase text-stone-900 border-b border-stone-900 pb-1 hover:text-gold-dark hover:border-gold-dark transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
