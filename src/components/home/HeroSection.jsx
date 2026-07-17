import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] md:min-h-[700px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=1600&auto=format&fit=crop"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/50 via-ink-900/30 to-ink-900/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-2xl animate-fade-in">
          <p className="text-cream-50/60 text-xs md:text-sm tracking-widest uppercase mb-4 font-sans">
            Demi-Fine Gold Jewelry
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-cream-50 font-light leading-tight mb-5">
            Crafted to be
            <br />
            <span className="italic">Treasured</span>
          </h1>
          <p className="text-cream-50/70 text-sm md:text-base max-w-md mx-auto mb-8 font-sans leading-relaxed">
            Elevated essentials for the woman who values quality, craftsmanship, and timeless design.
          </p>
          <Link
            to="/shop"
            className="btn-accent inline-flex items-center gap-2 text-xs md:text-sm"
          >
            Shop the Collection
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream-50/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-cream-50/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}