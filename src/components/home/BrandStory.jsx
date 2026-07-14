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
    <section ref={containerRef} className="py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-muted overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-r1s2t3"
              data-strk-img="[brand-story-heading] [brand-story-text] artisan jewelry crafting gold"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4">
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl font-light text-foreground mb-6"
            >
              The Art of Quiet Luxury
            </h2>
            <p
              id="brand-story-text"
              className="text-muted-foreground leading-relaxed mb-4"
            >
              Every Velmora piece begins as a sketch in our London atelier — inspired by
              architecture, nature, and the women who wear them. We believe fine jewelry
              shouldn't require a fine-jewelry price tag.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our 18K gold-plated pieces are crafted with the same attention to detail as
              solid gold, using ethically sourced materials and artisan techniques passed
              down through generations.
            </p>
            <Link
              to="/about"
              className="inline-block border-b border-foreground text-foreground text-sm uppercase tracking-wider pb-1 hover:border-accent hover:text-accent transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
