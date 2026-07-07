import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 border-t border-muted-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] relative overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-i1j2k3"
              data-strk-img="[brand-story-title] [brand-story-desc] artisan jewelry crafting gold"
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <span className="text-xs uppercase tracking-widest text-accent font-medium">Our Story</span>
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-charcoal mt-4">
              Where Craft Meets Intention
            </h2>
            <p id="brand-story-desc" className="mt-6 text-muted leading-relaxed">
              Velmora was born from a simple belief: every woman deserves jewelry that feels luxurious without the luxury price tag. Each piece is thoughtfully designed in our studio, crafted with 18K gold plating over hypoallergenic metals, and finished by hand.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We believe in slow fashion — timeless designs that transcend trends, made to be worn every day and treasured for years to come.
            </p>
            <a
              href="#"
              className="inline-block mt-8 text-accent text-sm uppercase tracking-widest font-medium border-b border-accent pb-0.5 hover:text-accent-hover hover:border-accent-hover transition-colors"
            >
              Read Our Story
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
