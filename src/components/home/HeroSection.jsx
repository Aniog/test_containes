import React from 'react'
import { Link } from 'react-router-dom'

export default function HeroSection() {

  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#3D2B1F] via-[#5C4033] to-[#2C1810]"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title] gold jewelry warm"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-warm-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in-up">
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-text-light font-medium tracking-wide leading-tight"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-4 md:mt-6 text-sm md:text-base text-text-light/70 max-w-lg mx-auto leading-relaxed animate-fade-in delay-300"
        >
          Demi-fine jewelry in 18K gold plate. Designed for everyday elegance, made to last a lifetime.
        </p>
        <Link
          to="/shop"
          className="btn-premium inline-block mt-8 bg-muted-gold text-warm-black px-10 py-3.5 text-xs font-medium uppercase tracking-ultra-wide hover:bg-bright-gold transition-colors duration-300 animate-fade-in delay-500"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}
