import { useRef, useEffect } from 'react'
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
          <div className="aspect-[4/5] overflow-hidden bg-brand-sand">
            <img
              data-strk-img-id="brand-story-img-7g8h9i"
              data-strk-img="[brand-story-title] [brand-story-desc]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pr-8">
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-5xl text-brand-charcoal font-light leading-tight">
              A Legacy of Quiet Luxury
            </h2>
            <p id="brand-story-desc" className="text-brand-muted font-sans text-sm md:text-base leading-relaxed mt-6">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a fortune. Each piece is thoughtfully designed in our studio, crafted with 18K gold plating over hypoallergenic metals, and finished by hand.
            </p>
            <p className="text-brand-muted font-sans text-sm md:text-base leading-relaxed mt-4">
              We believe in slow fashion — pieces that transcend trends and become part of your story. From our hands to yours, every Velmora jewel is made to be treasured.
            </p>
            <button className="mt-8 border border-brand-charcoal text-brand-charcoal px-8 py-3 text-sm tracking-widest uppercase font-sans font-medium hover:bg-brand-charcoal hover:text-white transition-colors">
              Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
