import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="gold jewelry on model warm lighting editorial luxury close-up"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-onyx-950/40 via-onyx-950/20 to-onyx-950/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="font-sans text-xs tracking-mega-wide uppercase text-gold-300 mb-4 animate-fade-in">
          Demi-Fine Jewelry
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl text-ivory-50 leading-tight mb-6 animate-slide-up">
          Crafted to be
          <br />
          <span className="italic">Treasured</span>
        </h1>
        <p className="font-sans text-sm sm:text-base text-ivory-200 max-w-md mx-auto mb-8 leading-relaxed opacity-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Premium 18K gold-plated jewelry, designed for the modern woman.
          Hypoallergenic. Tarnish-resistant. Effortlessly elegant.
        </p>
        <Link
          to="/shop"
          className="inline-block btn-gold opacity-0 animate-slide-up"
          style={{ animationDelay: '0.4s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-ivory-400/60 mx-auto" />
      </div>
    </section>
  )
}
