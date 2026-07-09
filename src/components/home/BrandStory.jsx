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
    <section ref={containerRef} className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-u4v5w6"
              data-strk-img="[brand-story-heading] [brand-story-text]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <h2 id="brand-story-heading" className="font-serif text-3xl lg:text-4xl font-light text-charcoal leading-snug">
              Designed with Intention, Crafted with Care
            </h2>
            <p id="brand-story-text" className="mt-6 text-muted leading-relaxed">
              Every Velmora piece begins as a sketch inspired by architecture, nature, and the quiet confidence of the women who wear them. We work with skilled artisans to bring each design to life in 18K gold-plated brass and sterling silver — materials chosen for their warmth, durability, and gentle weight on the skin.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Our commitment to accessible luxury means you never have to choose between quality and price. Each piece is designed to be layered, gifted, and treasured for years to come.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 border border-accent text-accent px-8 py-3 text-sm uppercase tracking-widest hover:bg-accent hover:text-white transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
