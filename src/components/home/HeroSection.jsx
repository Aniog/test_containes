import React from 'react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative w-full h-[85vh] sm:h-[90vh] min-h-[560px] bg-charcoal overflow-hidden">
      {/* Background image placeholder */}
      <div className="absolute inset-0">
        <div
          data-strk-bg-id="hero-bg-main"
          data-strk-bg="close-up woman wearing gold jewelry warm lighting editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0 bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-charcoal/20" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-xl animate-fade-in">
          <p className="text-overline font-medium tracking-[0.25em] text-gold-light mb-4 sm:mb-5 uppercase">
            New Collection
          </p>
          <h1 className="font-serif text-display-sm sm:text-display text-white mb-5 sm:mb-6 leading-[1.05]">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-body-lg text-white/70 mb-8 max-w-md leading-relaxed">
            Demi-fine 18K gold-plated jewelry designed for the modern woman.
            Accessible luxury that lasts.
          </p>
          <Link
            to="/shop"
            className="inline-block px-10 py-3.5 bg-gold text-charcoal text-body font-semibold tracking-wider uppercase rounded hover:bg-gold-light transition-colors duration-300 shadow-gold"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent" />
    </section>
  )
}
