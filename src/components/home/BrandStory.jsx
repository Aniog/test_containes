import React from 'react'
import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="text-velmora-gold text-xs tracking-super-wide uppercase mb-4">Our Story</p>
            <h2 className="font-serif text-4xl md:text-5xl text-velmora-base mb-6 leading-tight">
              Where Elegance<br />Meets Everyday
            </h2>
            <div className="w-12 h-px bg-velmora-gold mb-8" />
            <p className="text-velmora-muted leading-relaxed mb-6">
              Velmora was born from a simple belief: that luxury jewelry shouldn't be reserved for special occasions. 
              We create demi-fine pieces that bridge the gap between everyday wear and heirloom quality.
            </p>
            <p className="text-velmora-muted leading-relaxed mb-8">
              Each piece is crafted with 18K gold plating over solid brass, designed to be hypoallergenic 
              and built to last. Because the jewelry you wear every day deserves to feel extraordinary.
            </p>
            <Link
              to="/"
              className="inline-block text-xs tracking-super-wide uppercase text-velmora-base border-b border-velmora-gold pb-1 hover:text-velmora-gold transition-colors"
            >
              Read Our Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
