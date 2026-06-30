import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1920&q=80"
          alt="Velmora Fine Jewelry hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso-900/70 via-espresso-900/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-xl">
          <span className="inline-block text-xs font-medium tracking-ultra-wide text-gold mb-6 animate-fade-in">
            DEMI-FINE JEWELRY
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream-50 leading-tight mb-6 animate-fade-in stagger-1">
            Crafted to be Treasured
          </h1>
          <p className="text-lg text-cream-100/80 mb-10 leading-relaxed animate-fade-in stagger-2">
            Elevate everyday moments with our 18K gold plated collection. 
            Timeless designs for the modern woman who deserves more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in stagger-3">
            <Link to="/shop">
              <Button variant="gold" size="lg">
                Shop the Collection
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="secondary" size="lg" className="border-cream-100 text-cream-100 hover:bg-cream-100 hover:text-espresso-800">
                Our Story
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream-100/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-cream-100/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
