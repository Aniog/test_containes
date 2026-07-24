import React from 'react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-velmora-base/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="font-sans text-[10px] md:text-xs tracking-widest uppercase text-velmora-gold-light mb-3 md:mb-4 animate-fade-in">
          Demi-Fine Gold Jewelry
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4 md:mb-6 animate-slide-up">
          Crafted to be Treasured
        </h1>
        <p className="font-sans text-xs sm:text-sm md:text-base text-white/80 mb-6 md:mb-8 max-w-lg mx-auto animate-slide-up px-2" style={{ animationDelay: '0.1s' }}>
          Timeless pieces designed for everyday luxury. 18K gold plated, hypoallergenic, and made to last.
        </p>
        <Link
          to="/shop"
          className="inline-block btn-primary animate-slide-up text-[10px] md:text-xs px-6 md:px-8 py-3 md:py-3.5"
          style={{ animationDelay: '0.2s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-8 md:h-12 bg-white/40" />
      </div>
    </section>
  )
}
