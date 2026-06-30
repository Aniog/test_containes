import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  const containerRef = useRef(null)

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#2a2420] via-[#1a1614] to-[#0d0b09]"
      />
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl">
        <h1
          id="hero-title"
          className="font-['Cormorant_Garamond'] text-4xl md:text-5xl lg:text-7xl font-light tracking-wide mb-4 md:mb-6 fade-in-up"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="text-sm md:text-base font-light tracking-wide text-white/80 mb-8 md:mb-10 fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          Demi-fine gold jewelry for the modern woman. Designed to elevate your everyday.
        </p>
        <Link
          to="/shop"
          className="btn-accent inline-block fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  )
}
