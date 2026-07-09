import React from 'react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&h=1200&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-velmora-base/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-slide-up">
        <p className="text-velmora-gold-light text-sm tracking-widest mb-4 font-sans">
          DEMI-FINE GOLD JEWELRY
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-velmora-cream leading-tight mb-6">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-velmora-cream/80 text-base md:text-lg mb-10 max-w-lg mx-auto font-light">
          Timeless pieces designed for everyday elegance. 18K gold plated, hypoallergenic, and made to last.
        </p>
        <Link
          to="/shop"
          className="inline-block px-10 py-4 bg-velmora-gold text-velmora-base text-sm tracking-widest font-medium hover:bg-velmora-gold-dark transition-all duration-300"
        >
          SHOP THE COLLECTION
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-velmora-cream/40" />
      </div>
    </section>
  )
}
