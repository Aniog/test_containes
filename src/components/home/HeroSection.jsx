import React from 'react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-brand-espresso"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/30" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <p className="section-subtitle text-brand-gold-pale mb-4 animate-fade-in">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-hero text-white tracking-wide mb-6 animate-slide-up text-balance"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="font-sans text-white/70 text-base md:text-lg max-w-md mb-10 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          Premium 18K gold-plated jewelry, designed for everyday elegance and unforgettable moments.
        </p>
        <Link
          to="/shop"
          className="btn-gold animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-white/30" />
      </div>
    </section>
  )
}
