import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} id="about" className="py-20 lg:py-28 bg-muted">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-q1w2e3"
              data-strk-img="[brand-story-desc] [brand-story-title] artisan gold jewelry crafting"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <h2 id="brand-story-title" className="font-serif text-3xl lg:text-4xl text-foreground">Our Story</h2>
            <p id="brand-story-desc" className="mt-6 text-muted-foreground leading-relaxed">
              Velmora was born from a simple belief: every woman deserves jewelry that feels as special as she is. We bridge the gap between fine jewelry and everyday wear — creating pieces in 18K gold that are designed to be lived in, layered, and loved for years.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Each piece is thoughtfully designed in our studio and crafted by skilled artisans using ethically sourced materials. No middlemen, no markups — just beautiful jewelry delivered directly to you.
            </p>
            <button className="mt-8 border border-foreground text-foreground px-8 py-3 text-sm uppercase tracking-widest font-medium hover:bg-foreground hover:text-background transition-colors bg-transparent">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
