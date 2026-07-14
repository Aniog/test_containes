import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=1920&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-stone-900/20 to-stone-900/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-medium tracking-wide mb-6 leading-tight">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Demi-fine jewelry designed for the modern woman. Each piece tells a story of quiet luxury and timeless elegance.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 bg-white text-stone-900 px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-amber-50 transition-colors duration-300 group"
        >
          Shop the Collection
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
        </div>
      </div>
    </section>
  )
}

export default Hero
