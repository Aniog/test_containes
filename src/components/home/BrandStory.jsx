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
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-f6g7"
              data-strk-img="[brand-story-title] [brand-story-desc]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <span className="text-xs uppercase tracking-widest text-accent mb-4">Our Story</span>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl text-charcoal leading-snug"
            >
              Where Craftsmanship Meets Everyday Elegance
            </h2>
            <p
              id="brand-story-desc"
              className="mt-6 text-muted leading-relaxed"
            >
              Born from a belief that fine jewelry shouldn't live in a vault, Velmora creates pieces meant to be worn, loved, and passed down. Each design is crafted with 18K gold plating over ethically sourced materials — bridging the gap between heirloom quality and accessible luxury.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We believe every woman deserves to feel adorned — not just on special occasions, but in the quiet, beautiful moments of everyday life.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 border border-accent text-accent px-6 py-3 text-sm uppercase tracking-widest font-medium hover:bg-accent hover:text-white transition-colors duration-300 self-start"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
