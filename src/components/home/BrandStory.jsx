import React from 'react'
import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="text-xs tracking-widest uppercase text-velmora-gold mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-velmora-base mb-6 leading-tight">
              Where Elegance<br />Meets Everyday
            </h2>
            <div className="w-12 h-px bg-velmora-gold mb-6" />
            <p className="text-velmora-text-light leading-relaxed mb-4">
              Velmora was born from a simple belief: that luxury jewelry shouldn't be reserved for special occasions. Every piece in our collection is designed to be worn, loved, and treasured — day after day.
            </p>
            <p className="text-velmora-text-light leading-relaxed mb-8">
              We use 18K gold plating over responsibly sourced brass, ensuring each piece is both beautiful and hypoallergenic. Our designs draw inspiration from nature, architecture, and the quiet confidence of the modern woman.
            </p>
            <Link
              to="/"
              className="inline-block text-xs tracking-widest uppercase text-velmora-base border-b border-velmora-base pb-1 hover:text-velmora-gold hover:border-velmora-gold transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
