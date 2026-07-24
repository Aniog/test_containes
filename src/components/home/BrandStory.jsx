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
    <section ref={containerRef} className="py-16 md:py-24 border-t border-taupe">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/3] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-q1w2e3"
              data-strk-img="[brand-story-desc] [brand-story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-charcoal mb-6">
              Jewelry with Intention
            </h2>
            <p id="brand-story-desc" className="text-stone leading-relaxed mb-4">
              Velmora was born from a simple belief: every woman deserves jewelry that feels luxurious without the luxury price tag. Our pieces are designed in-house, crafted with 18K gold plating over hypoallergenic brass, and finished by hand.
            </p>
            <p className="text-stone leading-relaxed mb-8">
              We skip the middlemen, the markups, and the pretense — delivering heirloom-quality pieces directly to you. Each design is made to be worn daily, layered freely, and treasured always.
            </p>
            <Link
              to="/about"
              className="inline-block border-b border-charcoal text-charcoal text-sm font-medium uppercase tracking-[0.12em] pb-1 hover:border-gold hover:text-gold transition-colors duration-300"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
