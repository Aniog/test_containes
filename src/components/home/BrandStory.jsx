import React from 'react'
import { Link } from 'react-router-dom'
import { getImage } from '@/data/images'

const BrandStory = () => {
  return (
    <section className="py-16 md:py-24 lg:py-28 bg-warm-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={getImage('brand-story')}
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl font-light tracking-wide text-charcoal"
            >
              Our Story
            </h2>
            <div className="w-12 h-px bg-gold mt-4 mb-6" />
            <p
              id="brand-story-text"
              className="text-warm-600 leading-relaxed mb-4"
            >
              Born from a belief that fine jewelry should be accessible, Velmora crafts demi-fine pieces that blend timeless elegance with modern sensibility. Each piece is designed in our studio and brought to life by skilled artisans using 18K gold plating over premium brass.
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              We believe in jewelry that tells your story — pieces you reach for every morning, that become part of who you are. No compromise on quality, no unnecessary markups.
            </p>
            <Link
              to="/about"
              className="inline-block border border-gold text-gold text-xs tracking-wide-2 uppercase font-medium px-10 py-3 hover:bg-gold hover:text-charcoal transition-all duration-300"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
