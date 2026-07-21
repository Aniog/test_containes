import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.25em] uppercase text-velmora-gold font-medium">
            About Velmora
          </span>
          <h1 className="mt-4 font-serif text-4xl md:text-5xl font-light text-velmora-charcoal tracking-wide">
            Our Story
          </h1>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-6" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-base md:text-lg text-velmora-graphite leading-relaxed mb-6">
            Velmora was founded with a singular vision: to create jewelry that feels as good
            as it looks. We believe that luxury should be a daily experience, not an occasional
            indulgence.
          </p>
          <p className="text-base md:text-lg text-velmora-graphite leading-relaxed mb-6">
            Every piece in our collection is crafted from 18K gold-plated stainless steel,
            designed to be hypoallergenic, waterproof, and tarnish-resistant. We work directly
            with skilled artisans who share our commitment to quality and ethical production.
          </p>
          <p className="text-base md:text-lg text-velmora-graphite leading-relaxed mb-6">
            By selling directly to you — without traditional retail markups — we offer premium
            demi-fine jewelry at prices that make sense. Because we believe every woman deserves
            to wear pieces that make her feel extraordinary.
          </p>
          <p className="text-base md:text-lg text-velmora-graphite leading-relaxed mb-10">
            Welcome to Velmora. We are so glad you are here.
          </p>

          <div className="text-center">
            <Link
              to="/shop"
              className="inline-block px-10 py-3.5 bg-velmora-gold text-white text-sm tracking-[0.15em] uppercase font-medium hover:bg-velmora-gold-dark transition-colors"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
