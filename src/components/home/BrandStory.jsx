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
    <section ref={containerRef} className="py-16 md:py-24 bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              alt="Velmora brand story"
              data-strk-img-id="brand-story-img-q1w2e3"
              data-strk-img="[brand-story-desc] [brand-story-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:py-8">
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-brand-charcoal">
              Our Story
            </h2>
            <p id="brand-story-desc" className="mt-6 font-sans text-sm md:text-base text-brand-muted leading-relaxed">
              Velmora was born from a simple belief: that beautiful jewelry should not require a luxury price tag. Each piece is thoughtfully designed in our London studio and crafted with 18K gold plating over hypoallergenic brass, ensuring lasting beauty that is gentle on sensitive skin.
            </p>
            <p className="mt-4 font-sans text-sm md:text-base text-brand-muted leading-relaxed">
              We believe in slow fashion — creating timeless designs meant to be worn every day, layered with intention, and treasured for years to come.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 border-b border-brand-gold text-brand-gold font-sans text-xs uppercase tracking-wide-xl pb-1 hover:text-brand-gold-dark hover:border-brand-gold-dark transition-colors"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
