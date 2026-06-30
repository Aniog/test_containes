import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="font-serif text-3xl md:text-5xl font-light text-cream tracking-wide">
            Our Story
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mt-6" />
        </div>

        <div className="space-y-8 text-center">
          <p className="text-sm md:text-base text-warm-gray font-light leading-relaxed max-w-2xl mx-auto">
            Velmora was born from a simple belief: that luxury should be lived in, not locked away.
            Founded in 2023, we set out to create demi-fine jewelry that combines the warmth of
            solid gold with the accessibility modern women deserve.
          </p>
          <p className="text-sm md:text-base text-warm-gray font-light leading-relaxed max-w-2xl mx-auto">
            Every piece in our collection is crafted with meticulous attention to detail — 18K gold
            plating over hypoallergenic brass, hand-finished by artisans who understand that true
            elegance lies in restraint. We design for the woman who values quality over quantity,
            who reaches for the same treasured pieces day after day.
          </p>
          <p className="text-sm md:text-base text-warm-gray font-light leading-relaxed max-w-2xl mx-auto">
            Because the finest jewelry isn't just worn — it's lived in.
          </p>
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/shop"
            className="inline-block bg-gold text-charcoal text-xs tracking-[0.15em] uppercase font-sans font-medium px-10 py-4 hover:bg-gold-light transition-all duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About
