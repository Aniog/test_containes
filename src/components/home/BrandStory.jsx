import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function BrandStory() {
  return (
    <section id="about" className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="jewelry artisan workshop gold crafting hands making jewelry warm editorial"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
              alt="Velmora jewelry artisan at work"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="font-sans text-xs tracking-superwide uppercase text-gold mb-4">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal leading-snug mb-6">
              Jewelry That Feels Like You
            </h2>
            <div className="space-y-4 text-charcoal-500 text-sm leading-relaxed">
              <p>
                Velmora was born from a simple belief: luxury shouldn't cost a fortune, and it shouldn't come with compromise. We create demi-fine jewelry that feels as good as it looks — pieces designed to be reached for every single morning.
              </p>
              <p>
                Every piece starts with a sketch in our London studio and ends with meticulous hand-finishing. We use 18K gold plating over surgical-grade stainless steel, so you get the warmth and glow of solid gold without the anxiety of wearing it. Our jewelry is hypoallergenic, tarnish-resistant, and made to live in.
              </p>
              <p>
                From our founder: "I wanted to build a brand that women trust — where the jewelry feels premium, the price feels fair, and the experience feels personal."
              </p>
            </div>
            <Link
              to="/collection"
              className="inline-flex items-center gap-2 mt-8 font-sans text-xs tracking-wider uppercase text-charcoal border-b border-charcoal pb-1 hover:text-gold hover:border-gold transition-all duration-300 group"
            >
              Discover Our Collection
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
