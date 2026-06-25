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
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-champagne overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-q1w2e3"
              data-strk-img="[brand-story-title] [brand-story-desc] jewelry craftsmanship artisan"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-charcoal leading-snug">
              Designed with Intention, Crafted with Care
            </h2>
            <p id="brand-story-desc" className="mt-6 text-warm-gray leading-relaxed">
              Every Velmora piece begins as a sketch inspired by the quiet confidence of modern women. 
              We believe luxury should be accessible — that's why we use 18K gold plating over sterling silver, 
              creating pieces that look and feel precious without the precious price tag.
            </p>
            <p className="mt-4 text-warm-gray leading-relaxed">
              From our studio to your jewelry box, each piece is crafted to become part of your story — 
              worn daily, gifted lovingly, treasured always.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 text-sm uppercase tracking-widest text-gold hover:text-gold-hover border-b border-gold hover:border-gold-hover pb-1 transition-colors duration-300"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
