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
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] bg-muted overflow-hidden">
            <span id="story-desc" className="sr-only">Artisan crafting gold jewelry by hand in workshop</span>

            <img
              data-strk-img-id="brand-story-img-k7j8"
              data-strk-img="[story-desc] [story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 id="story-title" className="font-serif text-3xl md:text-4xl text-charcoal">The Velmora Story</h2>
            <div className="mt-6 space-y-4">
              <p className="text-sm text-muted-fg font-sans leading-relaxed">
                Born from a belief that luxury should be accessible, Velmora creates demi-fine jewelry that bridges the gap between costume and fine. Every piece is designed in our London studio and crafted with 18K gold plating over sterling silver.
              </p>
              <p className="text-sm text-muted-fg font-sans leading-relaxed">
                We believe in jewelry that tells a story — pieces you reach for every morning, that become part of your signature. No trends, no fast fashion. Just timeless design made to last.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-block mt-8 border-b border-gold text-gold text-xs tracking-widest uppercase font-sans font-medium pb-1 hover:text-gold-dark hover:border-gold-dark transition-colors no-underline"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
