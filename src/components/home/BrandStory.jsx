import React from 'react'
import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80"
              alt="Velmora fine jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-md">
            <h2 className="section-title">Our Story</h2>
            <div className="w-12 h-px bg-gold-500 mt-4 mb-6" />
            <p className="text-sm md:text-base text-velmora-600 leading-relaxed">
              Velmora was born from a simple belief: that fine jewelry should not require a fine price. 
              We partner with master artisans to create demi-fine pieces using genuine 18K gold plating 
              over premium metals — delivering heirloom quality at an accessible price point.
            </p>
            <p className="text-sm md:text-base text-velmora-600 leading-relaxed mt-4">
              Every piece is designed in-house and crafted with meticulous attention to detail. 
              From the initial sketch to the final polish, we ensure that each piece meets our 
              standards of beauty, durability, and comfort.
            </p>
            <Link
              to="/"
              className="inline-block mt-8 text-xs tracking-[0.12em] uppercase font-medium text-velmora-900 border-b border-velmora-900 hover:text-gold-600 hover:border-gold-600 transition-colors pb-0.5"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}