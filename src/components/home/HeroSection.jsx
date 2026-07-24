import React from 'react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&h=1000&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto animate-slide-up">
        <p className="text-xs tracking-[0.3em] uppercase mb-4 text-[var(--color-gold-light)]">
          Demi-Fine Gold Jewelry
        </p>
        <h1 className="serif-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-sm sm:text-base font-light mb-10 max-w-md mx-auto text-white/80">
          18K gold plated pieces designed for the modern woman. Hypoallergenic, timeless, and made to be worn every day.
        </p>
        <Link to="/shop" className="btn-accent inline-flex">
          Shop the Collection
        </Link>
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
