import React from 'react'
import { Link } from 'react-router-dom'

const BrandStory = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Image */}
        <div className="aspect-[4/3] bg-[var(--color-cream)] overflow-hidden rounded-sm">
          <img 
            src="https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=1000&q=80" 
            alt="Velmora atelier - handcrafted jewelry"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div>
          <div className="text-xs tracking-[0.15em] uppercase text-[var(--color-text-muted)] mb-3">Since 2018</div>
          <h2 className="serif text-4xl md:text-5xl tracking-[-0.01em] mb-6">Our Story</h2>
          
          <div className="space-y-4 text-[15px] text-[var(--color-text-muted)] leading-relaxed max-w-[42ch]">
            <p>
              Velmora was born from a simple belief: that beautiful jewelry should be worn every day, 
              not saved for special occasions.
            </p>
            <p>
              We craft demi-fine pieces in 18K gold plating—substantial enough to feel precious, 
              accessible enough to become part of your daily ritual.
            </p>
          </div>

          <Link 
            to="/about" 
            className="inline-block mt-8 text-sm tracking-[0.08em] uppercase border-b border-current pb-0.5 hover:text-[var(--color-gold)] hover:border-[var(--color-gold)] transition-colors"
          >
            Read More About Us
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
