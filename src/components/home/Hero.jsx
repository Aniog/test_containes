import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[650px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-velmora">
        <div className="absolute inset-0 bg-gradient-to-b from-velmora/80 via-velmora/60 to-velmora/90" />
        {/* Decorative gold ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-velmora-gold/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-velmora-gold/10" />
        <div
          className="absolute inset-0 opacity-30"
          data-strk-bg-id="hero-bg-8f2a9c"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="text-velmora-gold text-[0.6875rem] tracking-[0.2em] uppercase font-medium mb-6 animate-fade-in">
          Demi-Fine Jewelry
        </p>
        <h1 id="hero-title" className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-light leading-[1.1] mb-6 tracking-wide animate-slide-up">
          Crafted to be<br />Treasured
        </h1>
        <p id="hero-subtitle" className="text-white/60 text-base md:text-lg font-light max-w-xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.15s' }}>
          18K gold-plated demi-fine jewelry designed for the modern woman — luxurious, accessible, and made to last.
        </p>
        <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <Link to="/shop" className="inline-block border border-velmora-gold text-velmora-gold hover:bg-velmora-gold hover:text-velmora px-10 py-3.5 text-[0.8125rem] tracking-[0.12em] uppercase font-medium transition-all duration-300">
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-[0.625rem] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  )
}
