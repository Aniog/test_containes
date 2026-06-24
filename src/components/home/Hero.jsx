import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1600&h=900&fit=crop"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-light leading-tight tracking-wide">
          Crafted to be<br />Treasured
        </h1>
        <p className="mt-5 text-white/80 text-base md:text-lg font-light max-w-lg mx-auto leading-relaxed">
          Demi-fine jewelry in 18K gold plate. Designed for everyday elegance, made to last.
        </p>
        <Link to="/shop" className="btn-accent mt-8 inline-block">
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}

export default Hero
