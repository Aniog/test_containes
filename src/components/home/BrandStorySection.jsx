import React from 'react'
import { Link } from 'react-router-dom'

export default function BrandStorySection() {
  return (
    <section id="story" className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] lg:aspect-square overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=1000&fit=crop"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--velmora-accent)] mb-4">Our Story</p>
            <h2 className="velmora-heading text-3xl sm:text-4xl lg:text-5xl mb-6 leading-tight">
              Where Elegance<br />Meets Everyday
            </h2>
            <div className="velmora-divider w-12 mb-6" />
            <p className="text-[var(--velmora-text-muted)] leading-relaxed mb-4">
              Velmora was born from a simple belief: that luxury jewelry shouldn't be reserved for special occasions. 
              Every piece in our collection is designed to be worn daily — from morning meetings to evening dinners.
            </p>
            <p className="text-[var(--velmora-text-muted)] leading-relaxed mb-8">
              We use 18K gold plating over sterling silver bases, ensuring each piece is both beautiful and 
              hypoallergenic. Our artisans craft every detail with intention, creating jewelry that feels 
              as good as it looks.
            </p>
            <Link to="/shop">
              <button className="velmora-btn-outline">
                Discover More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
