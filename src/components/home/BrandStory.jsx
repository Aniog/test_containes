import React from 'react'
import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 px-4 bg-brand-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative overflow-hidden aspect-[4/5] lg:aspect-[3/4] bg-brand-espresso">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-text] [brand-story-title] gold jewelry artisan workshop warm editorial"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan crafting gold jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="section-subtitle mb-4">Our Story</p>
            <h2 id="brand-story-title" className="font-serif text-display text-brand-charcoal mb-6">
              Jewelry That Tells Your Story
            </h2>
            <div className="divider mb-6" />
            <p
              id="brand-story-text"
              className="font-sans text-brand-warm leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: every woman deserves jewelry that feels as
              special as the moments she wears it. We create demi-fine pieces that bridge the gap
              between costume and fine jewelry — premium enough to treasure, accessible enough
              to collect.
            </p>
            <p className="font-sans text-brand-warm leading-relaxed mb-8">
              Each piece is crafted with 18K gold plating over surgical-grade materials,
              designed to be hypoallergenic and made to last. From our studio to your jewelry box,
              we obsess over every detail.
            </p>
            <Link to="/about" className="btn-outline">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
