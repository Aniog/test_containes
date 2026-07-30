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
    <section ref={containerRef} className="relative bg-sand">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-0">
        {/* Image */}
        <div className="aspect-[4/5] md:aspect-auto overflow-hidden">
          <img
            data-strk-img-id="brand-story-img-7a3f1b"
            data-strk-img="[brand-story-subtitle] [brand-story-title]"
            data-strk-img-ratio="3x4"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
            alt="Velmora craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex items-center px-8 lg:px-16 py-16 lg:py-24">
          <div className="max-w-md">
            <span className="text-xs tracking-[0.25em] uppercase text-stone">Our Story</span>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl lg:text-4xl text-charcoal mt-4 leading-tight tracking-wide"
            >
              Designed to be lived in, loved, and passed down
            </h2>
            <div className="w-12 h-px bg-gold mt-6" />
            <p
              id="brand-story-subtitle"
              className="mt-6 text-sm text-stone leading-relaxed font-light"
            >
              Velmora was born from a belief that fine jewelry should be part of your everyday — not locked away for special occasions. Each piece is designed in our London atelier and crafted from 18K gold-plated brass using techniques refined by generations of artisans. The result is jewelry that feels substantial, wears beautifully, and tells a story.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 text-xs tracking-[0.2em] uppercase text-gold-dark hover:text-bronze transition-colors underline underline-offset-4"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
