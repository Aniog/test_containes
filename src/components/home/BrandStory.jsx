import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} id="about" className="py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              alt="Velmora craftsmanship"
              data-strk-img-id="brand-story-img-i1j2k3"
              data-strk-img="[brand-story-text] [brand-story-heading] gold jewelry craftsmanship artisan"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:py-8">
            <h2 id="brand-story-heading" className="font-serif text-3xl md:text-4xl font-light leading-snug">
              A Legacy of Quiet Luxury
            </h2>
            <p id="brand-story-text" className="mt-6 text-muted leading-relaxed">
              Velmora was born from a simple belief: that beautiful jewelry should be accessible without compromise. 
              Each piece is thoughtfully designed in our studio and crafted with 18K gold plating over premium metals, 
              ensuring lasting beauty at an attainable price point.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We believe in slow fashion — pieces that transcend trends and become part of your story. 
              From our hands to yours, every Velmora creation is made to be treasured.
            </p>
            <span className="inline-block mt-8 text-sm text-accent uppercase tracking-widest border-b border-accent pb-1 cursor-pointer hover:text-accent-hover hover:border-accent-hover transition-colors">
              Our Story
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
