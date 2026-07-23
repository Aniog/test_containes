import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center bg-ivory">
      {/* Background image */}
      <div className="absolute inset-0">
        <div
          data-strk-bg-id="hero-background"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0 bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ivory/90 via-ivory/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
        <div className="max-w-xl">
          <p
            id="hero-subtitle"
            className="text-caption tracking-ultra-wide uppercase text-gold-dark mb-4 font-sans"
          >
            Handcrafted Demi-Fine Jewelry
          </p>
          <h1
            id="hero-title"
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-surface-900 mb-6 leading-tight"
          >
            Crafted to be Treasured
          </h1>
          <p className="text-body-lg text-surface-600 mb-8 max-w-md leading-relaxed">
            Discover 18K gold-plated pieces designed for everyday luxury. 
            Accessible elegance that lasts.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/shop">
              <Button variant="gold" size="lg">
                Shop the Collection
              </Button>
            </Link>
            <Link to="/shop">
              <Button variant="outlineGold" size="lg">
                Explore
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-surface-400 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-surface-400 rounded-full" />
        </div>
      </div>
    </section>
  )
}
