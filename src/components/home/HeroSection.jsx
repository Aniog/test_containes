import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'

export function HeroSection() {
  return (
    <section className="relative h-[100dvh] min-h-[600px] w-full overflow-hidden bg-velmora-dark-bg">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=80"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <p className="text-white/70 text-xs md:text-sm uppercase tracking-[0.3em] mb-6">
          Demi-Fine Jewelry
        </p>
        <h1 className="font-serif text-white text-4xl md:text-6xl lg:text-7xl max-w-4xl leading-[1.1]">
          Crafted to be Treasured
        </h1>
        <p className="mt-6 text-white/80 text-sm md:text-base max-w-lg leading-relaxed font-light">
          Timeless gold pieces designed for everyday elegance and moments worth
          remembering.
        </p>
        <div className="mt-10">
          <Link to="/shop">
            <Button variant="primary" size="lg" className="uppercase tracking-widest text-xs">
              Shop the Collection
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
