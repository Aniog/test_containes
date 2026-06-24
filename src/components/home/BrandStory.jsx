import React from 'react'
import { Link } from 'react-router-dom'

const BrandStory = () => {
  return (
    <section className="section-padding py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Image */}
        <div className="aspect-[4/5] overflow-hidden rounded-sm">
          <img
            src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=1000&fit=crop"
            alt="Jewelry craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="py-4 md:py-8">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal tracking-wide leading-snug">
            Where Craftsmanship<br />Meets Intention
          </h2>
          <div className="w-12 h-px bg-brand-gold mt-5 mb-6" />
          <p className="text-brand-warm-gray leading-relaxed mb-4">
            Every piece in the Velmora collection is designed with a reverence for timeless beauty and a commitment to accessible luxury. We source only the finest materials — 18K gold plating over sterling silver, hand-set crystals, and hypoallergenic components that feel as good as they look.
          </p>
          <p className="text-brand-warm-gray leading-relaxed mb-8">
            Our artisans bring decades of expertise to each design, ensuring that every curve, clasp, and finish meets the standard we'd set for our own jewelry boxes.
          </p>
          <Link to="/about" className="btn-outline">
            Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
