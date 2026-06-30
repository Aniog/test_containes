import React from 'react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&h=1000&fit=crop"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <p className="velmora-body-xs tracking-[0.3em] mb-4 text-white/80">
          Demi-Fine Gold Jewelry
        </p>
        <h1 className="velmora-heading velmora-heading-lg mb-6 text-balance">
          Crafted to be<br />Treasured
        </h1>
        <p className="velmora-body text-white/90 mb-8 max-w-lg mx-auto text-balance">
          Timeless pieces designed for everyday elegance. 18K gold plated, hypoallergenic, and made to last.
        </p>
        <Link to="/shop" className="velmora-btn bg-white text-[var(--velmora-text)] hover:bg-[var(--velmora-accent)] hover:text-white transition-all duration-300">
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7" />
        </svg>
      </div>
    </section>
  )
}
