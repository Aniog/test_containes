import React from 'react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=1600&q=85"
          alt="Elegant gold jewelry"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-xl">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-tight tracking-wide">
              Crafted to be<br />
              <span className="italic">Treasured</span>
            </h1>
            <p className="mt-4 md:mt-6 text-white/80 font-light text-base md:text-lg max-w-md leading-relaxed">
              Demi-fine gold jewelry designed for everyday elegance. Each piece whispers luxury without saying a word.
            </p>
            <div className="mt-8 md:mt-10 flex flex-wrap gap-4">
              <Link to="/shop" className="btn-primary inline-block">
                Shop the Collection
              </Link>
              <Link to="/collections" className="btn-outline inline-block !border-white/30 !text-white hover:!bg-white hover:!text-charcoal">
                View Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-white/50 text-[10px] tracking-[0.3em] uppercase font-medium">Scroll</span>
        <div className="w-px h-8 bg-white/30 animate-pulse" />
      </div>
    </section>
  )
}