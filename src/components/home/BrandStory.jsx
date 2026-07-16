import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const BrandStory = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-warm-charcoal">
      <div className="max-w-container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4x5] overflow-hidden bg-warm-black">
            <img
              data-strk-img-id="brand-story-img-k1l2m3"
              data-strk-img="[brand-story-subtitle] [brand-story-title]"
              data-strk-img-ratio="4x5"
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
              className="font-serif text-3xl md:text-4xl text-warm-cream tracking-wide leading-snug"
            >
              The Art of Everyday Luxury
            </h2>
            <div className="w-12 h-px bg-gold mt-4 mb-6" />
            <p
              id="brand-story-subtitle"
              className="text-base text-warm-cream/70 font-sans font-light leading-relaxed mb-4"
            >
              At Velmora, we believe fine jewelry shouldn't be reserved for special occasions. Each piece is crafted with 18K gold plating over sterling silver, designed to be worn, loved, and treasured every single day.
            </p>
            <p className="text-base text-warm-cream/70 font-sans font-light leading-relaxed mb-8">
              From our studio to your jewelry box, we obsess over every detail — the weight of a huggie, the catch of light on a crystal, the way a necklace drapes just right.
            </p>
            <Link to="/" className="inline-block text-gold font-sans text-sm uppercase tracking-wider-btn border-b border-gold pb-1 hover:text-gold-light hover:border-gold-light transition-colors duration-300">
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
