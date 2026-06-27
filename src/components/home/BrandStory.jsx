import React from 'react'
import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-warm-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800&q=85"
              alt="Crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <p className="text-gold text-xs uppercase tracking-[0.2em] font-medium mb-3">Our Story</p>
            <h2 className="text-3xl md:text-4xl font-serif font-medium leading-tight">
              Jewelry That Speaks <br className="hidden md:block" />to the Soul
            </h2>
            <div className="w-12 h-0.5 bg-gold mt-5 mb-6" />
            <p className="text-charcoal-light text-sm md:text-base leading-relaxed">
              At Velmora, we believe that fine jewelry shouldn't require a lifetime of savings. 
              Every piece is crafted with care using 18K gold plating and premium materials — 
              designed to be worn, loved, and passed down.
            </p>
            <p className="text-charcoal-light text-sm md:text-base leading-relaxed mt-4">
              From our workshop to your doorstep, we honor the artistry of traditional jewelry-making 
              while keeping our pieces accessible, ethical, and effortlessly elegant.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 text-xs uppercase tracking-[0.15em] text-gold font-medium border-b border-gold pb-0.5 hover:opacity-70 transition-opacity"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}