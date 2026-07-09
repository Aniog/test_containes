import React from 'react'
import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&q=80"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="text-xs tracking-widest-xl uppercase text-velmora-muted mb-4">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl text-velmora-base mb-6 leading-tight">
              Where Tradition<br />Meets Modern Elegance
            </h2>
            <div className="w-12 h-px bg-velmora-gold mb-6" />
            <p className="text-velmora-muted leading-relaxed mb-4">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a luxury budget. 
              Each piece is crafted with 18K gold plating over sterling silver, designed to be worn daily 
              and treasured for years.
            </p>
            <p className="text-velmora-muted leading-relaxed mb-8">
              Our designers draw inspiration from nature, architecture, and the quiet moments that make life beautiful. 
              Every curve, every detail is intentional.
            </p>
            <Link to="/about" className="text-sm tracking-wide uppercase text-velmora-base hover:text-velmora-gold transition-colors border-b border-velmora-base hover:border-velmora-gold pb-1">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
