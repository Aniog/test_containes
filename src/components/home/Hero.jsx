import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&h=900&fit=crop"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/40 via-charcoal-950/30 to-charcoal-950/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="text-white/70 text-xs tracking-widest-xl uppercase mb-4 font-sans font-light animate-fade-in">
          Demi-Fine Jewelry
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-light leading-tight mb-6 animate-slide-up">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-white/80 text-base md:text-lg font-sans font-light mb-10 max-w-lg mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Timeless pieces designed for the modern woman. 18K gold plated, hypoallergenic, made to last.
        </p>
        <Link
          to="/shop"
          className="inline-block px-10 py-4 bg-gold-500 text-charcoal-950 text-xs tracking-widest uppercase font-sans font-medium hover:bg-gold-400 transition-all duration-300 animate-slide-up"
          style={{ animationDelay: '0.4s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-white/30 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-4 bg-white/60" />
        </div>
      </div>
    </section>
  )
}
