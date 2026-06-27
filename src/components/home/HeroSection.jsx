import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1515562141589-6773e145c3a0?w=1600&q=85"
          alt="Gold jewelry on warm background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-lg">
            <p className="text-gold-light text-xs uppercase tracking-[0.2em] font-medium mb-4">
              New Collection
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-serif font-medium leading-tight">
              Crafted to be<br />Treasured
            </h1>
            <p className="text-white/80 text-sm md:text-base mt-4 max-w-md leading-relaxed">
              Demi-fine gold jewelry for the woman who values quality, craftsmanship, and timeless beauty — without the premium price tag.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/shop">
                <Button variant="primary" size="lg" className="bg-gold hover:bg-gold-dark text-white">
                  Shop the Collection
                </Button>
              </Link>
              <Link to="/collections">
                <Button variant="outline" size="lg" className="border-white/60 text-white hover:bg-white hover:text-charcoal">
                  Explore
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}