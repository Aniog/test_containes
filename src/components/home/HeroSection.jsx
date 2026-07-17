import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&h=1000&fit=crop"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <p className="text-white/80 text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 font-light">
          Demi-Fine Gold Jewelry
        </p>
        <h1 className="velmora-heading-lg text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-white/70 text-sm sm:text-base max-w-md mx-auto mb-8 font-light leading-relaxed">
          Timeless pieces designed for the modern woman. 18K gold plated, hypoallergenic, and made to last.
        </p>
        <Link to="/shop">
          <button className="velmora-btn-accent text-sm px-8 py-4">
            Shop the Collection
          </button>
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  )
}
