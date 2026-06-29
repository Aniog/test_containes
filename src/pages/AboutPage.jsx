import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h1 className="font-serif text-3xl md:text-4xl tracking-[0.15em] uppercase text-warm-cream text-center">
          Our Story
        </h1>
        <div className="w-12 h-px bg-warm-gold mx-auto mt-4 mb-10" />

        <div className="space-y-6 text-sm text-warm-tan leading-relaxed">
          <p>
            Velmora was born from a simple belief: luxury shouldn't be exclusive. We craft demi-fine jewelry with the same care and intention as the finest houses — using 18K gold plating, ethically sourced materials, and hypoallergenic bases — at a price that invites you to collect, gift, and wear every day.
          </p>
          <p>
            Each piece is designed in our studio and finished by hand, ensuring the kind of detail and warmth that makes jewelry feel personal. Our designers draw inspiration from architecture, nature, and the quiet beauty of everyday moments.
          </p>
          <p>
            We believe that the best jewelry is the kind you forget you're wearing — until someone compliments you. That's the Velmora standard: effortless, intentional, and made to be treasured.
          </p>
          <p>
            From our hands to yours, welcome to Velmora.
          </p>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block bg-warm-gold text-warm-black px-10 py-3.5 text-[11px] font-semibold uppercase tracking-[0.25em] hover:bg-warm-gold-light transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </div>
  )
}
