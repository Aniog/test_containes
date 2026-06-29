import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <div className="bg-cream min-h-screen pt-20 md:pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h1 className="font-serif text-4xl md:text-5xl tracking-wide text-charcoal text-center">
          Our Story
        </h1>
        <div className="w-12 h-px bg-gold mx-auto mt-4 mb-10" />

        <div className="prose max-w-none">
          <p className="text-muted leading-relaxed text-lg mb-6">
            Velmora was born from a simple belief: that fine jewelry shouldn't be reserved for special occasions. Every piece in our collection is designed to be worn, loved, and treasured — every single day.
          </p>
          <p className="text-muted leading-relaxed mb-6">
            Founded in 2022, we set out to bridge the gap between luxury and accessibility. Our demi-fine jewelry is crafted with 18K gold plating over hypoallergenic brass, ensuring each piece is as gentle on your skin as it is beautiful.
          </p>
          <p className="text-muted leading-relaxed mb-6">
            Each design balances the warmth of traditional goldsmithing with the clean lines of modern aesthetics. The result is jewelry that feels both timeless and effortlessly now — pieces you'll reach for morning after morning.
          </p>
          <p className="text-muted leading-relaxed mb-8">
            We believe in conscious creation. From ethically sourced materials to sustainable packaging, every decision we make is guided by respect for our craft and our planet.
          </p>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block bg-gold text-cream px-10 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-gold-dark transition-colors"
          >
            Explore the Collection
          </Link>
        </div>
      </div>
    </div>
  )
}
