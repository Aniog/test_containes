import React from 'react'
import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section id="story" className="section-padding bg-[var(--color-warm-white)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1601121141461-9d6647bca1db?w=800&h=1000&fit=crop"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-warm-gray)] mb-4">Our Story</p>
            <h2 className="serif-heading text-3xl md:text-4xl lg:text-5xl tracking-wide mb-6">
              Jewelry That Tells<br />Your Story
            </h2>
            <div className="hairline w-16 mb-6" />
            <p className="text-[var(--color-warm-gray)] leading-relaxed mb-4">
              Velmora was born from a simple belief: beautiful jewelry shouldn't cost a fortune. We craft each piece in 18K gold-plated brass, designed to feel luxurious against your skin and last through every moment of your life.
            </p>
            <p className="text-[var(--color-warm-gray)] leading-relaxed mb-8">
              From boardroom meetings to weekend brunches, our pieces are made to move with you — hypoallergenic, lightweight, and effortlessly elegant.
            </p>
            <Link to="/shop" className="btn-outline">
              Discover More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
