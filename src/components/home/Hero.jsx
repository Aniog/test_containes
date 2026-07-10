import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden bg-base">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-base/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-4 max-w-3xl mx-auto">
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream font-light tracking-wide leading-tight"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-4 md:mt-6 text-sm md:text-lg text-stone-300 font-sans font-light tracking-wide max-w-xl mx-auto"
        >
          Demi-fine gold jewelry for the moments that matter
        </p>
        <Link
          to="/shop"
          className="inline-block mt-8 md:mt-10 bg-gold hover:bg-gold-hover text-white text-xs tracking-ultra-wide uppercase font-sans font-semibold px-10 py-4 transition-all duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}

export default Hero
