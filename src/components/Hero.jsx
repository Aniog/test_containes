import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&h=1080&fit=crop"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 leading-tight">
          Crafted to be<br />
          <em className="font-light">Treasured</em>
        </h1>
        <p className="font-sans text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Demi-fine gold jewelry for the modern romantic. Each piece tells a story of quiet luxury, 
          designed to be worn and loved every day.
        </p>
        <Link 
          to="/shop"
          className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 
                   font-sans text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-lg"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-px h-16 bg-white/50 animate-pulse" />
      </div>
    </section>
  )
}
