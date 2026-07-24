import React from 'react'
import { Link } from 'react-router-dom'

const HERO_BG_URL = 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1503351107055-43fe50b5d4fa'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-base">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG_URL})` }}
        data-strk-bg-id="hero-bg-a1b2c3d4"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-wide leading-tight"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="font-sans text-sm md:text-base text-white/80 mt-6 tracking-wide leading-relaxed"
        >
          Demi-fine gold jewelry for the moments that matter. Warm, refined, and made to last.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-8 bg-accent hover:bg-accentHover text-foreground font-sans text-sm tracking-widest uppercase px-10 py-3.5 transition-colors duration-200 rounded-none"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}
