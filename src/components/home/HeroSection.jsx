import React from 'react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1600&q=85"
          alt="Gold jewelry close-up"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-xl">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight font-semibold">
              Crafted to be{' '}
              <span className="italic font-normal">Treasured</span>
            </h1>
            <p className="text-white/80 text-base md:text-lg mt-4 md:mt-6 max-w-md leading-relaxed font-light">
              Demi-fine gold jewelry, designed for everyday elegance and made to last a lifetime of moments.
            </p>
            <Link
              to="/shop"
              className="inline-block mt-8 md:mt-10 bg-gold text-white px-10 py-4 text-sm font-medium tracking-[0.15em] uppercase hover:bg-gold-hover transition-colors duration-300"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}