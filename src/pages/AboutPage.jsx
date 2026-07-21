import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
        <h1 className="font-serif text-4xl md:text-5xl font-light tracking-wide text-charcoal text-center">
          Our Story
        </h1>
        <div className="w-12 h-px bg-gold mx-auto mt-4 mb-10" />

        <div className="prose prose-stone max-w-none">
          <p className="text-stone-600 leading-relaxed text-lg">
            Velmora was born from a simple belief: fine jewelry should be part of your everyday, not locked away for special occasions.
          </p>
          <p className="text-stone-600 leading-relaxed mt-4">
            Founded in 2023, we set out to create demi-fine jewelry that combines the craftsmanship of luxury houses with the accessibility modern women deserve. Every piece is 18K gold plated over sterling silver, nickel-free, and designed to be worn from morning to evening without a second thought.
          </p>
          <p className="text-stone-600 leading-relaxed mt-4">
            Our design studio draws inspiration from the quiet confidence of modern femininity — understated, intentional, and effortlessly elegant. We believe the best jewelry doesn't demand attention; it earns it.
          </p>
          <p className="text-stone-600 leading-relaxed mt-4">
            From our hands to yours, every detail matters.
          </p>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block bg-gold text-white px-10 py-3.5 text-xs font-semibold uppercase tracking-wide-product hover:bg-gold-light transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </div>
  )
}
