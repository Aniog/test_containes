import React from 'react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative h-[85vh] min-h-[500px] md:min-h-[600px] overflow-hidden -mt-16 md:-mt-20">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1515562141589-5e7f1158bb6e?w=1600&q=80"
          alt="Elegant gold jewelry"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-velmora-900/60 via-velmora-900/20 to-transparent" />
      </div>
      <div className="absolute inset-0 flex items-end md:items-center">
        <div className="max-w-7xl mx-auto px-5 md:px-8 w-full pb-20 md:pb-0">
          <div className="max-w-lg">
            <h1 className="serif-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Crafted to be Treasured
            </h1>
            <p className="text-base md:text-lg text-white/80 mt-4 leading-relaxed max-w-md">
              Demi-fine gold jewelry designed for life's everyday moments and most memorable occasions.
            </p>
            <Link
              to="/shop"
              className="inline-block mt-8 px-8 py-3.5 bg-gold-500 text-white text-xs tracking-[0.12em] uppercase font-medium hover:bg-gold-600 transition-all duration-300"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}