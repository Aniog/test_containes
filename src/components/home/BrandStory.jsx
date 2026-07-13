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
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-muted overflow-hidden">
            <img
              alt="Velmora jewelry craftsmanship"
              data-strk-img-id="brand-story-img-w9c5"
              data-strk-img="[brand-story-desc] [brand-story-heading]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <h2 id="brand-story-heading" className="font-serif text-3xl md:text-4xl font-light text-charcoal leading-tight">
              A Legacy of Quiet Elegance
            </h2>
            <p id="brand-story-desc" className="mt-6 text-muted-fg leading-relaxed">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a fortune. 
              Each piece is thoughtfully designed in our studio, crafted with 18K gold plating over 
              hypoallergenic metals, and finished by hand.
            </p>
            <p className="mt-4 text-muted-fg leading-relaxed">
              We create for the woman who values quality and intention — pieces meant to be worn daily, 
              layered freely, and treasured always. No fast fashion. No compromise.
            </p>
            <button className="mt-8 border border-accent text-accent px-8 py-3 text-sm uppercase tracking-wider font-medium hover:bg-accent hover:text-white transition-colors">
              Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
