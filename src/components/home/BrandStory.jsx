import React from 'react'
import { Link } from 'react-router-dom'

const BrandStory = () => {
  return (
    <section className="py-16 md:py-24 bg-velmora-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=1000&fit=crop&q=80"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <span className="font-sans text-xs tracking-wide-luxury uppercase text-velmora-gold mb-4 block">
              Our Story
            </span>
            <h2 className="font-serif text-3xl md:text-4xl mb-6 leading-tight">
              Jewelry That Tells<br />Your Story
            </h2>
            <div className="hairline w-16 mb-6" />
            <p className="font-sans text-sm text-velmora-text-light leading-relaxed mb-4">
              Velmora was born from a simple belief: luxury jewelry shouldn't cost a fortune. We craft each piece with the same care and attention to detail as heritage houses — but without the markup.
            </p>
            <p className="font-sans text-sm text-velmora-text-light leading-relaxed mb-8">
              Our demi-fine collection is designed in-house, plated in 18K gold, and made to be worn every day. Because the best jewelry isn't kept in a box — it's lived in.
            </p>
            <Link to="/about" className="btn-outline inline-block">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
