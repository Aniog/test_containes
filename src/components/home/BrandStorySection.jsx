import React from 'react'
import { Link } from 'react-router-dom'

export default function BrandStorySection() {
  return (
    <section className="section-padding bg-[var(--color-warm-white)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <span className="text-xs tracking-widest uppercase text-[var(--color-gold)] mb-4 block">Our Story</span>
            <h2 className="serif-heading text-4xl md:text-5xl mb-6">Where Elegance<br />Meets Everyday</h2>
            <div className="w-12 h-px bg-[var(--color-gold)] mb-6" />
            <p className="text-[var(--color-muted)] leading-relaxed mb-6">
              Velmora was born from a simple belief: luxury jewelry shouldn't be reserved for special occasions. 
              We create demi-fine pieces that transition seamlessly from boardroom to brunch, from date night to daily rituals.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed mb-8">
              Each piece is crafted with 18K gold plating over recycled brass, designed to be worn, loved, and treasured — 
              not locked away in a velvet box.
            </p>
            <Link to="/about" className="btn-outline inline-block">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
