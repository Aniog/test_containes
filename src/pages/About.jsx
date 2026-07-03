import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-28 pb-16 bg-ivory min-h-screen">
      <div className="container-wide max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-5xl text-warm-black font-light">Our Story</h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="space-y-8 text-warm-tan leading-relaxed">
          <p className="text-base md:text-lg font-light">
            Velmora was born from a simple belief: fine jewelry shouldn't be reserved for special occasions. 
            We create demi-fine pieces that move with you — from morning coffee to evening cocktails.
          </p>
          <p className="text-sm md:text-base">
            Founded in Paris, our studio draws inspiration from the city's effortless elegance. Each piece is designed 
            with intention — clean lines, warm gold tones, and a weight that feels substantial without being heavy. 
            We believe the best jewelry is the kind you never take off.
          </p>
          <p className="text-sm md:text-base">
            Every Velmora piece is crafted with 18K gold plating over brass, using hypoallergenic materials that are 
            gentle on sensitive skin. Our crystals are hand-set, our clasps are tested for security, and each item 
            arrives in our signature packaging — because the experience matters as much as the piece itself.
          </p>
          <p className="text-sm md:text-base">
            We're proud to offer premium quality at an accessible price point. By selling directly to you, we eliminate 
            the traditional retail markup and pass those savings along — without compromising on craftsmanship.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-serif text-3xl text-gold">18K</h3>
            <p className="text-xs tracking-[0.1em] uppercase text-warm-tan mt-2">Gold Plated</p>
          </div>
          <div>
            <h3 className="font-serif text-3xl text-gold">100%</h3>
            <p className="text-xs tracking-[0.1em] uppercase text-warm-tan mt-2">Hypoallergenic</p>
          </div>
          <div>
            <h3 className="font-serif text-3xl text-gold">30</h3>
            <p className="text-xs tracking-[0.1em] uppercase text-warm-tan mt-2">Day Returns</p>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link to="/shop" className="btn-primary inline-block">
            Shop the Collection
          </Link>
        </div>
      </div>
    </div>
  )
}
