import React from 'react'
import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-sm">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="gold jewelry artisan crafting handmade fine jewelry warm workshop studio"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan crafting gold jewelry"
              className="w-full h-full object-cover"
            />
            {/* Gold frame accent */}
            <div className="absolute inset-3 border border-velmora-gold/20 pointer-events-none" />
          </div>

          {/* Text content */}
          <div className="lg:pl-8">
            <p className="font-sans text-xs tracking-mega-wide uppercase text-velmora-gold mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-charcoal leading-snug mb-6">
              Jewelry That Feels Like You
            </h2>
            <div className="w-12 h-[1px] bg-velmora-gold mb-6" />
            <p className="font-sans text-sm leading-relaxed text-velmora-mid-gray mb-4">
              Velmora was born from a simple belief: every woman deserves jewelry that feels
              luxurious without the luxury price tag. We create demi-fine pieces using 18K
              gold-plated precious metals, designed to be worn every single day.
            </p>
            <p className="font-sans text-sm leading-relaxed text-velmora-mid-gray mb-8">
              Each piece is hypoallergenic, tarnish-resistant, and crafted with the kind of
              attention to detail usually reserved for fine jewelry houses. Because you
              shouldn't have to choose between quality and accessibility.
            </p>
            <Link
              to="#"
              className="inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-velmora-charcoal border-b border-velmora-charcoal pb-1 hover:text-velmora-gold hover:border-velmora-gold transition-colors duration-300"
            >
              Read Our Full Story
              <span className="text-sm">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
