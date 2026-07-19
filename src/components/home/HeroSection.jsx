import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] -mt-16 md:-mt-20 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-8f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1
              id="hero-title"
              className="font-serif text-5xl sm:text-6xl md:text-7xl text-white font-light leading-tight"
            >
              Crafted to be<br />Treasured
            </h1>
            <p
              id="hero-subtitle"
              className="text-white/80 text-base sm:text-lg md:text-xl mt-4 md:mt-6 max-w-lg font-light leading-relaxed"
            >
              Demi-fine gold jewelry, handcrafted for the woman who values quality, 
              elegance, and everyday luxury.
            </p>
            <div className="mt-8 md:mt-10">
              <Link to="/shop">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-dark">
                  Shop the Collection
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}