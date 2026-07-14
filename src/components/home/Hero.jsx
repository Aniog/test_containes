import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative w-full h-[85vh] md:h-screen overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-8f2a9c"
        data-strk-bg="warm gold jewelry on dark elegant background luxury editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-end h-full pb-20 md:pb-28 px-4 text-center">
        <p className="font-sans text-xs tracking-widest-3xl uppercase text-velmora-gold-light mb-4 animate-fade-in">
          Demi-Fine 18K Gold Jewelry
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-light text-white leading-tight mb-6 animate-slide-up">
          Crafted to Be<br />Treasured
        </h1>
        <p className="font-sans text-sm md:text-base text-white/80 max-w-md mb-8 animate-slide-up" style={{ animationDelay: '0.15s' }}>
          Thoughtfully designed pieces that celebrate the beauty in everyday moments. Premium quality, accessible luxury.
        </p>
        <Link
          to="/shop"
          className="inline-block px-8 py-3.5 bg-velmora-gold text-white text-xs font-sans font-semibold tracking-widest-xl uppercase hover:bg-velmora-gold-dark transition-all duration-300 animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}
