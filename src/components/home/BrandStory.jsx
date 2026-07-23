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
    <section ref={containerRef} id="about" className="py-20 md:py-28 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-text] [brand-story-heading] jewelry artisan craftsmanship gold workshop"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry artisan at work"
              className="w-full h-full object-cover"
            />
            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-brand-gold/20 -z-10" />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="text-sm font-sans tracking-mega-wide uppercase text-brand-gold mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-heading"
              className="font-serif text-4xl md:text-heading text-brand-cream mb-8 leading-tight"
            >
              Where Craft Meets Intention
            </h2>
            <p
              id="brand-story-text"
              className="text-brand-cream/70 leading-relaxed mb-6 text-base"
            >
              Velmora was born from a simple belief: every woman deserves jewelry that feels
              special without the luxury markup. We design demi-fine pieces that bridge the
              gap between costume and couture — real gold plating, thoughtful design, and
              quality that endures.
            </p>
            <p className="text-brand-cream/70 leading-relaxed mb-10 text-base">
              Each piece in our collection is designed in our studio, crafted with 18K
              gold-plated materials, and made to be worn every day. We believe in accessible
              luxury — jewelry that elevates your everyday without compromise.
            </p>
            <Link
              to="/collection"
              className="inline-block text-sm font-sans tracking-wider uppercase text-brand-gold border-b border-brand-gold pb-1 hover:text-brand-gold-light hover:border-brand-gold-light transition-colors duration-300"
            >
              Discover the Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
