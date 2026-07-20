import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=2000&q=85" 
          alt="Velmora Fine Jewelry - Warm lit gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="serif text-white text-5xl md:text-7xl tracking-[0.08em] leading-[1.1] mb-6">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-white/90 text-lg md:text-xl mb-10 tracking-wide">
          Demi-fine gold jewelry for the moments that matter.
        </p>
        <Link 
          to="/shop" 
          className="btn btn-primary inline-block"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-px h-12 bg-white/40" />
      </div>
    </section>
  )
}
