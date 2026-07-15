import React from 'react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] md:h-screen w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="warm gold jewelry luxury editorial close-up model wearing gold necklace earrings"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/30 to-charcoal/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <p className="font-sans text-xs tracking-superwide uppercase text-white/70 mb-4 animate-fade-in">
          Velmora Fine Jewelry
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight animate-fade-in" style={{ animationDelay: '0.15s' }}>
          Crafted to be Treasured
        </h1>
        <p className="font-sans text-sm md:text-base text-white/70 mt-4 max-w-lg leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Premium demi-fine gold jewelry for the modern woman. 18K gold plated, hypoallergenic, designed to last.
        </p>
        <Link
          to="/collection"
          className="btn-primary mt-8 animate-fade-in bg-gold hover:bg-gold-600"
          style={{ animationDelay: '0.45s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent" />
    </section>
  )
}
