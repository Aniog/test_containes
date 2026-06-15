import React from 'react'

export default function AboutPage() {
  return (
    <main className="pt-20 sm:pt-24">
      <div className="bg-cream-dark py-10 sm:py-14 text-center">
        <p className="text-overline font-medium tracking-[0.25em] text-gold uppercase mb-2">
          Our Story
        </p>
        <h1 className="font-serif text-display-sm text-charcoal">
          About Velmora
        </h1>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <p className="text-body-lg text-warm-gray leading-relaxed mb-6">
          Velmora was born from a simple belief: every woman deserves to feel adorned without compromise. We create demi-fine jewelry that bridges the gap between costume and couture — pieces that are luxurious enough to treasure, accessible enough to wear every day.
        </p>
        <p className="text-body-lg text-warm-gray leading-relaxed mb-6">
          Our design process starts with the wearer. We think about how a piece will feel at 9am in a meeting, at a candlelit dinner, or caught in a summer breeze. Jewelry should move with you, not against you.
        </p>
        <p className="text-body-lg text-warm-gray leading-relaxed mb-6">
          Each piece is crafted from 18K gold-plated sterling silver, designed to be hypoallergenic and enduring. We work with artisan manufacturers who share our commitment to quality and ethical sourcing.
        </p>
        <p className="text-body-lg text-warm-gray leading-relaxed">
          Because jewelry should be a joy, not a compromise.
        </p>
      </div>
    </main>
  )
}
