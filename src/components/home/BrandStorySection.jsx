import React from 'react'
import { Link } from 'react-router-dom'

export default function BrandStorySection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1515562141589-67f0d569b6c2?w=800&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="section-subtitle">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal-950 mt-4 leading-tight tracking-wide">
              Where Elegance<br />Meets Everyday
            </h2>
            <p className="mt-6 text-charcoal-600 leading-relaxed">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't come with a luxury markup. 
              We craft demi-fine pieces in 18K gold plating over solid brass — designed to feel as luxurious as 
              fine jewelry, at a price that lets you build a collection, not just own a single piece.
            </p>
            <p className="mt-4 text-charcoal-600 leading-relaxed">
              Every design is thoughtfully created for the modern woman who values quality, sustainability, 
              and timeless style. From boardroom to weekend brunch, our pieces are made to move with you.
            </p>
            <Link to="/about" className="inline-block mt-8 text-xs tracking-widest uppercase text-charcoal-950 border-b border-charcoal-950 pb-1 hover:text-gold-600 hover:border-gold-600 transition-colors">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
