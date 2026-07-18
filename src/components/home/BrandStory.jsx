import React from 'react'
import { Link } from 'react-router-dom'

const BrandStory = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Image */}
        <div className="aspect-[4/3] bg-vel-bg-alt overflow-hidden rounded-sm">
          <img
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80"
            alt="Velmora atelier - hands crafting fine jewelry"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="max-w-lg">
          <div className="uppercase tracking-[0.15em] text-xs text-vel-gold mb-3">Since 2019</div>
          <h2 className="heading-serif text-4xl md:text-5xl tracking-[-0.01em] mb-6">Our Story</h2>
          <div className="space-y-4 text-vel-muted leading-relaxed">
            <p>
              Velmora was born from a simple belief: that beautiful, lasting jewelry should be accessible without compromise.
            </p>
            <p>
              We work with skilled artisans to create demi-fine pieces in 18K gold plating—thoughtfully designed, responsibly made, and meant to be worn every day.
            </p>
          </div>
          <Link
            to="/about"
            className="inline-block mt-8 text-sm underline-offset-4 hover:underline"
          >
            Read more about us →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
