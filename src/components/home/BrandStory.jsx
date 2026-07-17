import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="section-padding py-20 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-6xl mx-auto">
        {/* Image */}
        <div className="aspect-[4/5] md:aspect-auto overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?w=1000&q=80"
            alt="Velmora craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center px-6 md:px-16 py-14 md:py-0 bg-white">
          <p className="font-sans text-xs tracking-widest uppercase text-brand-gold mb-6">
            Our Story
          </p>
          <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl text-brand-base mb-6">
            Jewelry That Lives With You
          </h2>
          <div className="w-12 h-px bg-brand-gold mb-6" />
          <p className="text-brand-muted leading-relaxed mb-4">
            Velmora was born from the belief that fine jewelry should be worn, not locked away. Every piece is crafted in 18K gold plate over brass, designed to move through your day with you — from morning coffee to evening celebrations.
          </p>
          <p className="text-brand-muted leading-relaxed mb-8">
            We work directly with artisan foundries to bring you demi-fine pieces that feel substantial, wear beautifully, and never compromise on ethics or quality.
          </p>
          <Link to="/" className="btn-text group">
            <span>Discover Our Story</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
