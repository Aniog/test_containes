import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-muted relative overflow-hidden">
            <div
              className="absolute inset-0"
              data-strk-bg-id="brand-story-img-b1c2d3"
              data-strk-bg="[brand-story-heading] [brand-story-text] artisan crafting gold jewelry workshop"
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="800"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <span className="text-xs font-sans font-medium uppercase tracking-widest text-gold">Our Story</span>
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl font-medium text-charcoal mt-4 leading-snug"
            >
              Born from a Love of Timeless Design
            </h2>
            <p
              id="brand-story-text"
              className="mt-6 text-base text-muted-fg leading-relaxed"
            >
              Velmora was founded on a simple belief: every woman deserves jewelry that feels as special as the moments she wears it for. We craft each piece with intention — blending old-world artistry with modern sensibility to create demi-fine jewelry that transcends trends.
            </p>
            <p className="mt-4 text-base text-muted-fg leading-relaxed">
              From our studio, every design begins as a hand-drawn sketch before being brought to life in 18K gold. No shortcuts, no compromises — just beautiful jewelry made to last.
            </p>
            <button className="mt-8 px-6 py-3 border border-gold text-gold font-sans text-xs font-medium uppercase tracking-widest hover:bg-gold hover:text-cream transition-colors">
              Read Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
