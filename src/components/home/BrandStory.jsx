import React from 'react'
import { Link } from 'react-router-dom'

const BrandStory = () => {
  return (
    <section className="py-16 md:py-24 bg-surface-warm">
      <div className="max-w-8xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              alt="Velmora brand story"
              data-strk-img-id="brand-story-img-d4e5f6"
              data-strk-img="[brand-story-text] [brand-story-heading] jewelry craftsmanship"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <h2
              id="brand-story-heading"
              className="font-serif text-2xl md:text-3xl tracking-ultra-wide uppercase text-base font-light mb-6"
            >
              Our Story
            </h2>
            <div className="w-12 h-px bg-gold mb-6" />
            <p
              id="brand-story-text"
              className="text-base text-stone-600 font-sans leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that fine-quality jewelry should be accessible, not exclusive. Every piece is crafted with 18K gold plating over sterling silver, designed to be worn every day and treasured for years.
            </p>
            <p className="text-base text-stone-600 font-sans leading-relaxed mb-8">
              From our studio to your jewelry box, we obsess over every detail — the weight of a huggie, the drape of a chain, the warmth of the gold. Because the jewelry you reach for every morning should feel as special as the day you first wore it.
            </p>
            <Link
              to="/about"
              className="inline-block border border-gold text-gold hover:bg-gold hover:text-white text-xs tracking-ultra-wide uppercase font-sans font-semibold px-8 py-3 transition-all duration-300"
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
