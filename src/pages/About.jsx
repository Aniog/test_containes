import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="min-h-screen bg-cream pt-20 md:pt-24">
      <div className="max-w-8xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="font-serif text-3xl md:text-5xl tracking-wide text-charcoal mb-6">Our Story</h1>
          <div className="h-px w-12 bg-gold mx-auto mb-8" />
          <p className="font-sans text-sm md:text-base text-text-muted-dark leading-relaxed mb-6">
            Velmora was born from a simple belief: that beautiful jewelry shouldn't cost a fortune, and that everyday elegance is worth investing in. Each piece is crafted with 18K gold plating over sterling silver, designed to be worn and loved — not stored away.
          </p>
          <p className="font-sans text-sm md:text-base text-text-muted-dark leading-relaxed mb-6">
            We work with artisans who understand that the details matter. From the weight of a huggie to the curve of an ear cuff, every element is considered. This is jewelry made for the way you actually live.
          </p>
          <p className="font-sans text-sm md:text-base text-text-muted-dark leading-relaxed mb-8">
            Our commitment to quality means every piece is hypoallergenic, nickel-free, and backed by our 30-day return policy. We believe in jewelry that feels as good as it looks — and that you'll want to reach for every single day.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-gold text-charcoal font-sans text-xs tracking-ui uppercase px-8 py-3 hover:bg-gold-light transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </div>
  )
}
