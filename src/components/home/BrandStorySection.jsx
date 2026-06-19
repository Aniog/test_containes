import React from 'react'
import { Link } from 'react-router-dom'

export default function BrandStorySection() {
  return (
    <section className="section-padding bg-[var(--velmora-bg-secondary)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&h=1000&fit=crop"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[var(--velmora-gold)] mb-3 sm:mb-4">
              Our Story
            </p>
            <h2 className="serif-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[var(--velmora-text)] mb-4 sm:mb-6 text-balance leading-tight">
              Where Elegance Meets Everyday
            </h2>
            <div className="hairline-divider w-16 mb-4 sm:mb-6" />
            <p className="text-sm sm:text-base text-[var(--velmora-text-secondary)] leading-relaxed mb-3 sm:mb-4">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't be reserved for special occasions. We create demi-fine pieces that bridge the gap between everyday wear and luxury — crafted with care, priced with intention.
            </p>
            <p className="text-sm sm:text-base text-[var(--velmora-text-secondary)] leading-relaxed mb-6 sm:mb-8">
              Each piece is designed in our studio, plated in 18K gold, and made to be worn, loved, and treasured. Because the best jewelry is the kind you never want to take off.
            </p>
            <Link to="/about" className="btn-outline inline-flex text-xs sm:text-sm">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
