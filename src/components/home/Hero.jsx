import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&h=1000&fit=crop&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-velmora-base/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in-up">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-velmora-cream mb-4 leading-tight">
          Crafted to be<br />Treasured
        </h1>
        <p className="font-sans text-sm md:text-base text-velmora-cream/80 mb-8 max-w-md mx-auto leading-relaxed">
          Demi-fine gold jewelry designed for the modern woman. Everyday luxury, thoughtfully made.
        </p>
        <Link to="/shop" className="btn-primary inline-block">
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-velmora-cream/50" />
      </div>
    </section>
  )
}

export default Hero
