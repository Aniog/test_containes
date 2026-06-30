import React from 'react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1600&h=1000&fit=crop"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-2xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] mb-4 text-white/80 animate-fade-in">
          Demi-Fine Gold Jewelry
        </p>
        <h1 className="font-serif-display text-5xl md:text-6xl lg:text-7xl mb-6 animate-slide-up">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-sm md:text-base text-white/80 mb-8 max-w-md mx-auto animate-slide-up stagger-2">
          Everyday luxury pieces designed for the modern woman. 18K gold plated, hypoallergenic, and made to last.
        </p>
        <div className="animate-slide-up stagger-3">
          <Link to="/shop" className="inline-block bg-white text-[var(--velmora-dark)] px-10 py-4 text-sm uppercase tracking-widest font-medium hover:bg-[var(--velmora-accent)] hover:text-white transition-all duration-300">
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
