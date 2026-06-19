import React from 'react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&h=1000&fit=crop"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-3xl mx-auto animate-slide-up">
        <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-white/80 mb-3 sm:mb-4">
          Demi-Fine Gold Jewelry
        </p>
        <h1 className="serif-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 text-balance leading-tight">
          Crafted to be<br className="hidden sm:block" /> Treasured
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-white/80 mb-6 sm:mb-8 max-w-md mx-auto text-balance leading-relaxed">
          Timeless pieces designed for everyday elegance. 18K gold plated, hypoallergenic, and made to last.
        </p>
        <Link to="/shop" className="btn-gold inline-flex text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-3.5">
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-8 sm:h-12 bg-white/40" />
      </div>
    </section>
  )
}
