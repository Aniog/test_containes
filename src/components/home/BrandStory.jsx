import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section className="py-20 md:py-28 bg-velvet-50" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Image */}
        <div className="aspect-[4/5] bg-velvet-200 rounded-sm overflow-hidden">
          <img
            alt="Our Story"
            data-strk-img-id="brand-story-img-7d2e1f"
            data-strk-img="[brand-story-title] [brand-story-subtitle]"
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="max-w-md">
          <p className="text-xs tracking-[0.2em] uppercase text-gold-600 font-medium mb-3">Our Story</p>
          <h2
            id="brand-story-title"
            className="font-serif text-2xl md:text-3xl text-velvet-950 tracking-wide mb-6 leading-snug"
          >
            Jewelry That Lives With You, Not Just in a Box
          </h2>
          <p
            id="brand-story-subtitle"
            className="text-sm text-velvet-600 leading-relaxed mb-6"
          >
            Velmora was born from a simple belief: that exceptional quality should not require an exceptional price tag. We craft each piece in small batches using 18K gold-plated brass and ethically sourced crystals — the same materials used by luxury houses, without the markup. The result is jewelry that feels personal, intentional, and made to be worn every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center px-8 py-3 bg-velvet-900 text-white text-xs tracking-[0.1em] uppercase font-semibold hover:bg-velvet-800 transition-colors rounded-sm"
            >
              Explore the Collection
            </Link>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-8 py-3 border border-velvet-300 text-velvet-700 text-xs tracking-[0.1em] uppercase font-semibold hover:border-velvet-700 transition-colors rounded-sm"
            >
              Read Our Story
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
