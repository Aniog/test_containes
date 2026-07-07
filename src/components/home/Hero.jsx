import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1920&auto=format"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1814]/60 via-[#1C1814]/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 md:px-8 flex items-center">
        <div className="max-w-lg">
          <p className="font-body text-xs md:text-sm uppercase tracking-widest text-[#C9A96E] mb-4">
            Demi-Fine Gold Jewelry
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-tight tracking-wider">
            Crafted to be<br />Treasured
          </h1>
          <p className="font-body text-base md:text-lg text-white/80 mt-6 max-w-md leading-relaxed">
            Timeless gold pieces designed for the woman who values quiet luxury. Each piece is crafted to last a lifetime.
          </p>
          <Link to="/shop" className="inline-block mt-8 bg-[#C9A96E] text-white px-10 py-4 font-body text-sm font-medium uppercase tracking-wider hover:bg-[#B8944F] transition-all duration-300 ease-in-out">
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <span className="font-body text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-white/30 animate-pulse" />
      </div>
    </section>
  )
}