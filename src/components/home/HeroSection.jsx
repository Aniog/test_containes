import React from 'react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&h=900&fit=crop"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <p className="text-sm tracking-[0.3em] uppercase mb-4 text-white/80">
          Demi-Fine Jewelry
        </p>
        <h1 className="serif-heading text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-10 font-light max-w-xl mx-auto">
          Timeless pieces designed for everyday luxury. 18K gold plated, hypoallergenic, made to last.
        </p>
        <Link to="/shop" className="inline-block bg-white text-foreground px-10 py-4 text-sm tracking-wider uppercase hover:bg-primary hover:text-white transition-all duration-300">
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}
