import React from 'react'
import { Link } from 'react-router-dom'

export default function BrandStorySection() {
  return (
    <section className="py-20 md:py-28 bg-ivory-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&h=1000&fit=crop"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6 leading-tight">
              Where Elegance<br />Meets Everyday
            </h2>
            <div className="w-12 h-px bg-gold mb-6" />
            <p className="text-warm-gray leading-relaxed mb-4">
              Velmora was born from a simple belief: luxury jewelry shouldn't be reserved for special occasions. 
              We create demi-fine pieces that bridge the gap between everyday wear and timeless elegance.
            </p>
            <p className="text-warm-gray leading-relaxed mb-8">
              Each piece is crafted with 18K gold plating over recycled brass, designed to be hypoallergenic 
              and built to last. From our studio to your jewelry box, every detail is considered.
            </p>
            <Link to="/about" className="btn-gold-outline inline-block">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
