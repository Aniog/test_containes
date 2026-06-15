import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function BrandStory() {
  return (
    <section className="py-16 sm:py-24 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
            <div
              data-strk-img-id="brand-story-img"
              data-strk-img="jewelry artisan workshop gold crafting editorial warm light"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:py-8">
            <p className="text-overline font-medium tracking-[0.25em] text-gold uppercase mb-3">
              Our Story
            </p>
            <h2 className="font-serif text-display-sm text-charcoal mb-6">
              Jewelry That<br />Tells Your Story
            </h2>
            <div className="w-12 h-px bg-gold mb-6" />
            <p className="text-body-lg text-warm-gray mb-5 leading-relaxed">
              Velmora was born from a simple belief: every woman deserves to feel
              adorned without compromise. We create demi-fine jewelry that bridges
              the gap between costume and couture — pieces that are luxurious
              enough to treasure, accessible enough to wear every day.
            </p>
            <p className="text-body-lg text-warm-gray mb-8 leading-relaxed">
              Each piece is crafted from 18K gold-plated sterling silver,
              designed to be hypoallergenic and enduring. Because jewelry should
              be a joy, not a compromise.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-body font-medium text-charcoal hover:text-gold transition-colors group"
            >
              Read Our Story
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
