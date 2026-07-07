import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="text-velmora-gold text-xs tracking-super-wide uppercase mb-4 animate-fade-in">
          Demi-Fine Jewelry
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight animate-slide-up">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-white/80 text-base md:text-lg font-light mb-10 max-w-lg mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Timeless pieces designed for the modern woman. 18K gold plated, hypoallergenic, made to last.
        </p>
        <Link
          to="/collection"
          className="inline-block px-10 py-4 bg-velmora-gold text-velmora-base text-xs tracking-super-wide uppercase hover:bg-velmora-gold-light transition-all duration-300 animate-slide-up"
          style={{ animationDelay: '0.4s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-white/40" />
      </div>
    </section>
  )
}
