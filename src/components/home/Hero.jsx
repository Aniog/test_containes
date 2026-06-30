import React from 'react'
import { Link } from 'react-router-dom'
import { getImage } from '@/data/images'

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${getImage('hero-bg')})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-charcoal/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-wide leading-tight"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-4 md:mt-6 text-base md:text-lg text-white/80 font-light max-w-lg leading-relaxed"
        >
          Demi-fine gold jewelry designed for everyday elegance and lasting beauty
        </p>
        <Link
          to="/shop"
          className="mt-8 md:mt-10 bg-gold text-charcoal text-xs tracking-wide-2 uppercase font-semibold px-10 py-3.5 hover:bg-gold-light transition-all duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}

export default Hero
