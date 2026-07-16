import React from 'react'
import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Image */}
        <div className="aspect-[4/5] bg-stone overflow-hidden rounded-sm">
          <div
            className="w-full h-full"
            data-strk-img-id="brand-story-img-3d4e5f"
            data-strk-img="atelier gold jewelry craftsmanship warm light"
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
          />
        </div>

        {/* Text */}
        <div className="lg:pl-4">
          <p className="font-sans text-[10px] tracking-widest uppercase text-taupe mb-4">
            Our Story
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl font-light tracking-wide leading-tight text-charcoal">
            Jewelry That Tells Your Story
          </h2>
          <div className="w-12 h-px bg-gold/40 mt-6" />
          <p className="text-sm text-taupe mt-6 leading-relaxed max-w-md">
            At Velmora, we believe demi-fine jewelry should feel as luxurious as it looks. 
            Each piece is designed in our London atelier and crafted from 18K gold-plated brass, 
            made to layer, stack, and live in — not sit in a drawer.
          </p>
          <p className="text-sm text-taupe mt-4 leading-relaxed max-w-md">
            Founded on the principle that premium craftsmanship should be accessible, 
            we create pieces that empower you to express your elegance, every day.
          </p>
          <Link
            to="/about"
            className="inline-block mt-8 pb-1.5 font-sans text-xs tracking-wider uppercase text-charcoal border-b border-charcoal/30 hover:border-gold hover:text-gold transition-all duration-300"
          >
            Read Our Full Story
          </Link>
        </div>
      </div>
    </section>
  )
}