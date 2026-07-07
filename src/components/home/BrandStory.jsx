import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-champagne/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative aspect-[4/5] bg-charcoal overflow-hidden">
            <img
              data-strk-img-id="brand-story-image"
              data-strk-img="[brand-story-title] [brand-story-body]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src={PLACEHOLDER}
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:pl-8">
            <p className="text-xs uppercase tracking-[0.2em] text-gold font-sans mb-4">
              Our Philosophy
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso leading-[1.15]"
            >
              Designed for the Moments That Matter
            </h2>
            <p
              id="brand-story-body"
              className="mt-6 text-charcoal/80 font-sans font-light leading-relaxed"
            >
              Velmora was born from a belief that fine jewelry should feel
              accessible, personal, and made to last. Each piece is crafted in
              18K gold plate with careful attention to silhouette, weight, and
              finish — so you can wear it confidently, every day.
            </p>
            <p className="mt-4 text-charcoal/80 font-sans font-light leading-relaxed">
              From quiet mornings to celebratory evenings, our demi-fine
              collection is made to be treasured.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-sm uppercase tracking-[0.16em] font-sans text-espresso hover:text-gold transition-colors duration-300"
            >
              Our Story
              <ArrowRight size={16} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
