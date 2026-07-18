import React from 'react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="luxury gold jewelry warm editorial portrait close-up woman wearing gold necklace earrings warm lighting dark background"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <p className="font-sans text-xs tracking-mega-wide uppercase mb-6 text-white/70 animate-fade-in">
          Fine Jewelry Collection
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Crafted to be Treasured
        </h1>
        <p className="font-sans text-sm md:text-base text-white/80 leading-relaxed max-w-lg mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Premium demi-fine gold jewelry designed for the modern woman. Elegant enough for special occasions, durable enough for every day.
        </p>
        <Link
          to="/shop"
          className="inline-block btn-accent animate-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-10 bg-white/30" />
      </div>
    </section>
  )
}
