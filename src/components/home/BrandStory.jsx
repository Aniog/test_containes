import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-brand-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4x5] md:aspect-[3x4] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-d4e5f6"
              data-strk-img="[brand-story-text] [brand-story-title] gold jewelry craftsmanship"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl text-brand-charcoal tracking-wide"
            >
              The Art of Everyday Luxury
            </h2>
            <div className="w-12 h-px bg-brand-gold mt-4 mb-6" />
            <p
              id="brand-story-text"
              className="font-sans text-sm text-brand-muted leading-relaxed mb-4"
            >
              Born from a belief that fine jewelry should be accessible, Velmora crafts each piece with the same care and attention as the world's top maisons — at a price that lets you build a collection, not just a wish list.
            </p>
            <p className="font-sans text-sm text-brand-muted leading-relaxed mb-8">
              Every design begins with a sketch, is refined through dozens of prototypes, and is finished with 18K gold plating over hypoallergenic sterling silver. The result: jewelry that looks and feels luxurious, without the traditional markup.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-sans text-xs tracking-ultra-wide uppercase text-brand-charcoal hover:text-brand-gold transition-colors duration-300 group"
            >
              Our Story
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
