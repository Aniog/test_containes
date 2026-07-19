import React from 'react'
import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="py-16 lg:py-24 bg-velvet-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              data-strk-img-id="brand-story-image"
              data-strk-img="jewelry artisan workshop gold hands crafting luxury editorial"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan craftsmanship"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="font-sans text-xs tracking-mega-wide uppercase text-gold-600 mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-onyx-900 leading-tight mb-6">
              Jewelry that
              <br />
              <span className="italic">tells your story</span>
            </h2>
            <div className="w-12 h-px bg-gold-400 mb-6" />
            <p className="font-sans text-sm text-onyx-600 leading-relaxed mb-4">
              Velmora was born from a simple belief: every woman deserves jewelry that feels as
              special as she is. We create demi-fine pieces that bridge the gap between
              fast-fashion accessories and fine jewelry — premium quality at prices that
              don't require an occasion.
            </p>
            <p className="font-sans text-sm text-onyx-600 leading-relaxed mb-8">
              Each piece is crafted with 18K gold plating over sterling silver, designed to
              be worn every day and treasured for years. Because the best jewelry isn't
              locked in a vault — it's worn, loved, and lived in.
            </p>
            <Link to="/about" className="btn-outline-gold text-xs">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
