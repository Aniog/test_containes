import React from 'react'
import { Link } from 'react-router-dom'

const BrandStory = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Image */}
        <div className="aspect-[4/3] bg-velmora-warm-gray overflow-hidden rounded-sm">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80" 
            alt="Velmora atelier - hands crafting fine jewelry"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="max-w-lg">
          <span className="text-xs tracking-[0.15em] uppercase text-velmora-gold">Since 2018</span>
          <h2 className="serif text-4xl mt-3 mb-6">Our Story</h2>
          <div className="space-y-4 text-velmora-text-muted leading-relaxed">
            <p>
              Velmora was born from a simple belief: that beautiful jewelry should be worn every day, 
              not saved for special occasions.
            </p>
            <p>
              We craft demi-fine pieces in 18K gold plating over sterling silver—thoughtfully designed, 
              responsibly made, and meant to become part of your story.
            </p>
          </div>
          <Link 
            to="/about" 
            className="inline-block mt-8 text-sm tracking-[0.08em] uppercase border-b border-velmora-charcoal pb-0.5 hover:text-velmora-gold hover:border-velmora-gold transition-colors"
          >
            Read More
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
