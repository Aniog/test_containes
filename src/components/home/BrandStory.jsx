import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=85"
              alt="Velmora fine jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </div>

          {/* Text */}
          <div className="max-w-md">
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">Our Story</span>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal tracking-wide mt-3 leading-tight">
              Quality That<br />
              <span className="italic">Outlasts Trends</span>
            </h2>
            <div className="w-12 h-px bg-gold/40 my-6" />
            <p className="text-secondary text-sm md:text-base leading-relaxed">
              Velmora was born from a simple belief — that fine jewelry shouldn't require a fine fortune. 
              Each piece is crafted in 18K gold with genuine crystals, designed to be worn every day and 
              passed down for generations to come.
            </p>
            <p className="text-secondary text-sm md:text-base leading-relaxed mt-4">
              From our workshop to your jewelry box, we skip the markup and deliver enduring beauty 
              at an honest price.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-sm tracking-[0.2em] uppercase font-medium text-charcoal hover:text-gold transition-colors group"
            >
              Read Our Story
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}