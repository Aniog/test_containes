import React from 'react'
import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-velmora-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=1000&fit=crop"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="text-xs tracking-widest-xl uppercase text-gold-600 mb-4 font-sans">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal-900 font-light leading-tight mb-6">
              Where Craft Meets Consciousness
            </h2>
            <div className="w-12 h-px bg-gold-400 mb-6" />
            <p className="text-charcoal-600 font-sans font-light leading-relaxed mb-4">
              Velmora was born from a simple belief: luxury jewelry shouldn't come at a luxury price — or a cost to the earth. Each piece is thoughtfully designed in our studio, crafted with 18K gold plating over recycled brass, and finished with hypoallergenic care.
            </p>
            <p className="text-charcoal-600 font-sans font-light leading-relaxed mb-8">
              We partner with artisans who share our commitment to ethical production, ensuring every piece that reaches you carries not just beauty, but integrity.
            </p>
            <Link
              to="/about"
              className="inline-block text-xs tracking-widest uppercase text-charcoal-900 border-b border-charcoal-900 pb-1 hover:text-gold-600 hover:border-gold-600 transition-colors font-sans"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
