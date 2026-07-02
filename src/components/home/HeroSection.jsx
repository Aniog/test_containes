import React from 'react'
import { Link } from 'react-router-dom'
import { heroImage } from '@/data/images'

export default function HeroSection() {
  return (
    <section className="relative h-[100vh] min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${heroImage}')` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <p className="text-white/70 text-xs tracking-[0.3em] uppercase mb-4 font-sans">
          Demi-Fine Jewelry
        </p>
        <h1 className="font-serif text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
          Crafted to be Treasured
        </h1>
        <p className="text-white/70 text-sm md:text-base max-w-lg mx-auto mb-8 leading-relaxed font-light">
          18K gold-plated pieces designed for the modern woman. Elegant enough for evening, durable enough for everyday.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-accent text-white px-10 py-3.5 text-xs tracking-[0.25em] uppercase font-medium hover:bg-accent-dark transition-all duration-300"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
