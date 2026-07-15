import React from 'react'
import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
            <img
              data-strk-img-id="brand-story-main"
              data-strk-img="[story-heading] [story-text] gold jewelry craftsmanship artisan"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=1066&fit=crop"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-gold-400/30 hidden lg:block" />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="font-sans text-[10px] uppercase tracking-mega-wide text-gold-600 mb-4">Our Story</p>
            <h2 id="story-heading" className="section-heading mb-6 leading-tight">
              Jewelry That Tells
              <br />
              <span className="italic">Your Story</span>
            </h2>
            <div className="divider-hairline mb-8" />
            <p id="story-text" className="font-sans text-sm md:text-base text-slate-850/60 leading-relaxed mb-6">
              Velmora was born from a simple belief: every woman deserves jewelry that feels as
              special as she is. We create demi-fine pieces that bridge the gap between costume
              jewelry and fine jewelry — premium quality without the luxury markup.
            </p>
            <p className="font-sans text-sm md:text-base text-slate-850/60 leading-relaxed mb-8">
              Each piece is crafted with 18K gold plating over premium brass, designed to be
              hypoallergenic and built to last. Because we believe beautiful jewelry should be
              an everyday luxury, not a special occasion splurge.
            </p>
            <Link to="/about" className="btn-outline inline-block">
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
