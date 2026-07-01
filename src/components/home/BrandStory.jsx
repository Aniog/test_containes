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
    <section ref={containerRef} className="py-16 md:py-24 bg-surface-warm">
      <div className="max-w-container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-stone-200 overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-1"
              data-strk-img="[brand-story-text] gold jewelry craftsmanship artisan"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl tracking-product uppercase mb-6">Our Story</h2>
            <div className="w-12 h-px bg-gold mb-6" />
            <p id="brand-story-text" className="text-muted leading-relaxed mb-4">
              Born from a belief that fine jewelry should be accessible, Velmora crafts demi-fine pieces that blur the line between everyday and extraordinary. Each piece is 18K gold plated over sterling silver — designed in our Paris atelier, worn by women who value quiet elegance over loud statements.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              We source only hypoallergenic materials and partner with artisans who share our commitment to sustainable craftsmanship. Because the jewelry you reach for every day should feel as good as it looks.
            </p>
            <Link
              to="/about"
              className="inline-block border border-gold text-gold hover:bg-gold hover:text-white px-8 py-3 text-xs uppercase tracking-nav font-sans transition-colors"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
