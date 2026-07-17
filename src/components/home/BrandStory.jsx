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
    <section ref={containerRef} id="about" className="py-16 md:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-t1u2v3"
              data-strk-img="[brand-story-desc] [brand-story-heading] artisan jewelry craftsmanship gold"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl text-charcoal leading-snug"
            >
              Designed with Intention, Crafted with Care
            </h2>
            <p
              id="brand-story-desc"
              className="mt-6 text-base text-charcoal/70 font-sans leading-relaxed"
            >
              Every Velmora piece begins as a sketch inspired by architecture, nature, and the quiet confidence of the women who wear them. We use 18K gold plating over hypoallergenic brass and sterling silver, ensuring each piece is as kind to your skin as it is beautiful on it.
            </p>
            <p className="mt-4 text-base text-charcoal/70 font-sans leading-relaxed">
              We believe luxury should be accessible. No markups for middlemen, no compromises on quality. Just thoughtfully designed jewelry delivered directly to you.
            </p>
            <Link
              to="/#about"
              className="inline-block mt-8 text-sm uppercase tracking-widest text-gold hover:text-gold-light transition-colors font-sans no-underline"
            >
              Our Story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
