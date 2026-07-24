import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-velmora-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
            <img
              data-strk-img-id="brand-story-img-f1a2b3"
              data-strk-img="[brand-story-text] [brand-story-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-velmora-textPrimary tracking-[0.05em]">
              Our Story
            </h2>
            <div className="w-16 h-[1px] bg-velmora-gold mt-6 mb-6" />
            <p id="brand-story-text" className="font-sans text-sm md:text-base text-velmora-textSecondary leading-relaxed">
              Velmora was born from a simple belief: that beautiful jewelry should be accessible, 
              not exclusive. Each piece is crafted with 18K gold plating over premium base metals, 
              designed to be worn daily — not stored in a drawer. We source our materials ethically, 
              work with artisan jewelers, and price honestly. No markups, no middlemen. Just 
              jewelry that feels as good as it looks.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 font-sans text-sm uppercase tracking-[0.1em] text-velmora-gold border-b border-velmora-gold pb-1 hover:text-velmora-goldLight hover:border-velmora-goldLight transition-colors"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
