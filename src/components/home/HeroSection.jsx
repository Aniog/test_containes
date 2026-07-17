import React from 'react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1920&q=80"
          alt="Velmora Fine Jewelry"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-base/70 via-brand-base/30 to-brand-base/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p className="font-sans text-xs tracking-widest uppercase text-brand-gold-light mb-6 animate-fade-in">
          Velmora Fine Jewelry
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-semibold tracking-wide mb-6 max-w-2xl leading-tight animate-slide-up">
          Crafted to be Treasured
        </h1>
        <p className="text-brand-gold-light/80 text-base md:text-lg max-w-lg mb-10 animate-slide-up leading-relaxed" style={{ animationDelay: '0.1s' }}>
          Demi-fine gold jewelry designed for the moments that matter — from everyday elegance to lifelong keepsakes.
        </p>
        <Link
          to="/shop"
          className="btn-primary animate-slide-up"
          style={{ animationDelay: '0.2s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  )
}
