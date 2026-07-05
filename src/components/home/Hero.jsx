import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80"
          alt="Velmora fine jewelry"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs uppercase tracking-widest text-white/80 mb-4 animate-fade-in">Demi-Fine Jewelry</p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white text-balance animate-slide-up">
          Crafted to be Treasured
        </h1>
        <p className="mt-6 max-w-xl mx-auto text-base md:text-lg text-white/80 leading-relaxed animate-slide-up">
          Quiet luxury for the modern woman. 18K gold-plated pieces designed to be worn, loved, and passed down.
        </p>
        <div className="mt-10 animate-slide-up">
          <Link to="/shop">
            <Button size="lg" className="shadow-xl">Shop the Collection</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}