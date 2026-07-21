import React from 'react'
import { Link } from 'react-router-dom'
import { products } from '../../data/products'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1600&q=80"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 animate-slide-up">
        <p className="text-xs tracking-widest uppercase mb-4 text-white/80">
          Demi-Fine Gold Jewelry
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-6">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-sm md:text-base text-white/80 max-w-md mx-auto mb-8 font-light">
          Timeless pieces designed for the modern woman. 18K gold plated, hypoallergenic, made to last.
        </p>
        <Link
          to="/shop"
          className="inline-block px-8 py-4 bg-velmora-gold text-white text-xs tracking-widest uppercase hover:bg-velmora-gold-dark transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-white/40" />
      </div>
    </section>
  )
}
