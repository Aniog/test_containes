import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-8f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-charcoal/40" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
        <h1
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-light tracking-wide leading-tight"
          id="hero-title"
        >
          Crafted to be Treasured
        </h1>
        <p
          className="mt-6 text-base md:text-lg font-sans font-light text-white/80 max-w-xl mx-auto leading-relaxed"
          id="hero-subtitle"
        >
          Demi-fine gold jewelry for the modern woman — timeless pieces that transform everyday moments into something extraordinary.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-10 px-10 py-3.5 border border-white/60 text-white font-sans text-xs tracking-wider uppercase hover:bg-white hover:text-charcoal transition-all duration-400"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="font-sans text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-white/30" />
      </div>
    </section>
  )
}