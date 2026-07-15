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
    <section ref={containerRef} className="py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden bg-surface">
            <img
              alt="Velmora brand story"
              data-strk-img-id="brand-story-img-i1j2k3"
              data-strk-img="[brand-story-text] [brand-story-heading] jewelry artisan crafting gold"
              data-strk-img-ratio="3x4"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 id="brand-story-heading" className="font-serif text-3xl md:text-4xl text-foreground leading-snug">
              Designed with Intention, Made to Last
            </h2>
            <p id="brand-story-text" className="text-muted text-base leading-relaxed mt-6">
              Every Velmora piece begins as a sketch inspired by architecture, nature, and the quiet confidence of the women who wear them. We believe luxury should be accessible — that's why we use 18K gold plating over premium brass and sterling silver, creating jewelry that looks and feels expensive without the markup.
            </p>
            <p className="text-muted text-base leading-relaxed mt-4">
              From our studio to your jewelry box, each piece is crafted with care, designed to be worn every day, and made to become part of your story.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 text-sm font-medium text-accent hover:text-accent-hover transition-colors underline underline-offset-4 decoration-accent/40"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
