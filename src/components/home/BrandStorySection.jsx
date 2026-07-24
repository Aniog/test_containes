import React from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function BrandStorySection() {
  const [ref, isVisible] = useScrollAnimation(0.1)

  return (
    <section ref={ref} className={`py-16 md:py-24 animate-on-scroll ${isVisible ? 'is-visible' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-velmora-warm/20 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&q=80"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="section-subtitle">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-base mt-3 leading-tight">
              Where Craft Meets Consciousness
            </h2>
            <div className="w-12 h-px bg-velmora-gold mt-6 mb-6" />
            <p className="font-sans text-sm md:text-base text-velmora-muted leading-relaxed mb-6">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't cost the earth. 
              Each piece is thoughtfully designed in our studio, using ethically sourced materials 
              and 18K gold plating over recycled brass.
            </p>
            <p className="font-sans text-sm md:text-base text-velmora-muted leading-relaxed mb-8">
              We create demi-fine pieces that bridge the gap between everyday accessories and 
              heirloom treasures — jewelry you can wear daily, layer freely, and treasure for years.
            </p>
            <Link
              to="/about"
              className="btn-outline inline-block"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
