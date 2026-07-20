import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} id="about" className="py-16 md:py-24 bg-muted-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-charcoal/5 overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-c5d6e7"
              data-strk-img="[brand-story-text] [brand-story-heading] artisan jewelry craftsmanship gold"
              data-strk-img-ratio="3x4"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4">
            <p className="text-xs uppercase tracking-product text-accent font-medium mb-4">Our Story</p>
            <h2 id="brand-story-heading" className="font-serif text-3xl md:text-4xl text-charcoal leading-tight">
              Where Craft Meets Intention
            </h2>
            <p id="brand-story-text" className="mt-6 text-sm md:text-base text-muted leading-relaxed">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a luxury price tag. 
              Each piece is thoughtfully designed in our studio, hand-finished by skilled artisans, and crafted 
              with 18K gold plating over hypoallergenic metals. We create jewelry that feels as special as the 
              moments you wear it for — whether that's a Tuesday morning or a milestone celebration.
            </p>
            <p className="mt-4 text-sm md:text-base text-muted leading-relaxed">
              Our commitment to quality means every clasp, every setting, every surface is inspected by hand. 
              Because you deserve pieces that last.
            </p>
            <button className="mt-8 border border-accent text-accent px-8 py-3 text-sm uppercase tracking-product font-medium hover:bg-accent hover:text-white transition-colors">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
