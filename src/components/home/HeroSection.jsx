import React from 'react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="[hero-headline] [hero-sub] Velmora gold jewelry"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        style={{
          background: 'linear-gradient(135deg, #2A1F06 0%, #1A1D23 40%, #0F1114 100%)',
        }}
      >
        {/* Warm gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream-100 via-transparent to-transparent opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-0">
        <div className="max-w-xl">
          <p className="font-sans text-[10px] uppercase tracking-mega-wide text-gold-400 mb-4 animate-fade-in">
            Velmora Fine Jewelry
          </p>
          <h1
            id="hero-headline"
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream-50 font-light leading-[1.1] mb-6 animate-slide-up"
          >
            Crafted to be
            <br />
            <span className="italic text-gold-300">Treasured</span>
          </h1>
          <p
            id="hero-sub"
            className="font-sans text-sm md:text-base text-cream-200/70 leading-relaxed mb-10 max-w-md animate-slide-up"
            style={{ animationDelay: '0.15s' }}
          >
            Premium demi-fine jewelry designed for the modern woman. 18K gold plated, hypoallergenic, and crafted to last.
          </p>
          <Link
            to="/shop"
            className="btn-primary inline-block animate-slide-up"
            style={{ animationDelay: '0.3s' }}
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream-100 to-transparent" />
    </section>
  )
}
