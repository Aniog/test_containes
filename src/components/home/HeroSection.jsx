import React from 'react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase mb-4 text-white/80">Demi-Fine Gold Jewelry</p>
        <h1 className="serif-heading text-5xl md:text-7xl lg:text-8xl mb-6 text-balance leading-tight">
          Crafted to<br />be Treasured
        </h1>
        <p className="text-sm md:text-base text-white/80 mb-10 max-w-md mx-auto font-light">
          Timeless pieces designed for everyday elegance. 18K gold plated, hypoallergenic, made to last.
        </p>
        <Link to="/shop" className="inline-block bg-white text-primary px-10 py-4 text-xs tracking-widest uppercase hover:bg-accent hover:text-accent-foreground transition-all duration-300">
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60">
        <div className="w-px h-12 bg-white/30 mx-auto mb-2 animate-pulse" />
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  )
}
