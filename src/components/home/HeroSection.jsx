import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Shared'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1600&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in">
        <p className="text-white/80 text-xs tracking-widest-xl uppercase mb-4">Demi-Fine Gold Jewelry</p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-white/80 text-sm md:text-base max-w-md mx-auto mb-8 leading-relaxed">
          Timeless pieces designed for everyday luxury. 18K gold plated, hypoallergenic, and made to last.
        </p>
        <Link to="/shop">
          <Button variant="gold">Shop the Collection</Button>
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-white/50" />
      </div>
    </section>
  )
}
