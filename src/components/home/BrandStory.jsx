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
    <section ref={containerRef} className="py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Image */}
        <div className="aspect-[4/5] overflow-hidden">
          <img
            data-strk-img-id="brand-story-img-a7b2c1"
            data-strk-img="[brand-story-title] [brand-story-text]"
            data-strk-img-ratio="3x4"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora brand story"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="py-4">
          <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-charcoal mb-6">
            Our Story
          </h2>
          <p id="brand-story-text" className="text-muted leading-relaxed mb-4">
            Velmora was born from a simple belief: every woman deserves jewelry that feels as special as the moments she wears it for. We design demi-fine pieces that bridge the gap between costume and fine jewelry — real gold plating, genuine craftsmanship, and prices that don't require a special occasion.
          </p>
          <p className="text-muted leading-relaxed mb-8">
            Each piece is designed in our studio and crafted by artisans who share our obsession with detail. From the weight of a huggie to the drape of a chain, nothing is left to chance.
          </p>
          <Link
            to="/about"
            className="inline-block border border-gold text-gold px-8 py-3 text-sm uppercase tracking-widest font-sans font-medium hover:bg-gold hover:text-cream transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}
