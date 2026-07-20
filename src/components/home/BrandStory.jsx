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
    <section ref={containerRef} className="py-16 lg:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-q1w2e3"
              data-strk-img="[brand-story-desc] [brand-story-title] artisan jewelry crafting gold"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <h2
              id="brand-story-title"
              className="font-serif text-3xl lg:text-4xl text-charcoal leading-tight"
            >
              Designed with Intention, Crafted with Care
            </h2>
            <p
              id="brand-story-desc"
              className="mt-6 text-muted leading-relaxed"
            >
              Every Velmora piece begins as a sketch in our London studio, inspired by the quiet confidence of the women who wear them. We believe luxury should be accessible — that's why we use 18K gold plating over premium brass and sterling silver, creating pieces that look and feel precious without the precious price tag.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Our commitment to quality means every clasp, every setting, every finish is inspected by hand before it reaches you.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 text-accent text-sm uppercase tracking-wider border-b border-accent pb-0.5 hover:text-accent-dark hover:border-accent-dark transition-colors duration-300"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
