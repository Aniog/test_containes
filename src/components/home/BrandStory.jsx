import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} id="about" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-t2u3"
              data-strk-img="[brand-story-heading] [brand-story-text] jewelry artisan crafting gold"
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <span className="text-[11px] uppercase tracking-extra-wide text-velmora-gold font-medium">
              Our Story
            </span>
            <h2
              id="brand-story-heading"
              className="mt-4 font-serif text-3xl lg:text-4xl text-velmora-charcoal font-light leading-snug"
            >
              Where Timeless Design Meets Conscious Craft
            </h2>
            <p
              id="brand-story-text"
              className="mt-6 text-sm text-velmora-stone leading-relaxed"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require compromise — 
              not on quality, not on ethics, and not on price. Each piece is designed in our London studio 
              and crafted from recycled metals with 18K gold plating that's built to last.
            </p>
            <p className="mt-4 text-sm text-velmora-stone leading-relaxed">
              We create for the woman who appreciates the quiet details — the weight of a well-made earring, 
              the warmth of gold against skin, the confidence that comes from wearing something truly considered.
            </p>
            <Link
              to="/#about"
              className="inline-block mt-8 text-xs uppercase tracking-extra-wide text-velmora-gold font-medium border-b border-velmora-gold pb-0.5 hover:text-velmora-gold-dark hover:border-velmora-gold-dark transition-colors duration-200"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
