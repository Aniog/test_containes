import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <div className="bg-cream min-h-screen pt-20 md:pt-24">
      <div className="max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <p className="font-sans text-xs uppercase tracking-nav text-gold text-center mb-4">Our Story</p>
        <h1 className="font-serif text-4xl md:text-5xl font-medium text-charcoal mb-12 text-center">
          The Art of Everyday Luxury
        </h1>
        <div className="space-y-6 font-sans text-sm md:text-base text-stone-600 leading-relaxed">
          <p>
            Velmora was born from a simple belief: luxury jewelry should be accessible, wearable, and made to last. We saw a gap between fast-fashion pieces that tarnish in weeks and fine jewelry that costs thousands — and we set out to fill it.
          </p>
          <p>
            Every Velmora piece is crafted with 18K gold plating over 925 sterling silver, ensuring both beauty and durability. Our designs draw from timeless silhouettes with a modern sensibility — jewelry that feels both heirloom and entirely now.
          </p>
          <p>
            By selling directly to you, we eliminate the traditional markups and pass those savings along. The result: demi-fine jewelry that looks and feels luxurious, at a price that makes sense.
          </p>
          <p>
            We are committed to responsible sourcing, sustainable packaging, and creating pieces you will reach for every single day.
          </p>
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/shop"
            className="inline-block bg-gold hover:bg-gold-hover text-cream font-sans text-xs uppercase tracking-btn font-medium px-10 py-4 transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </div>
  )
}
