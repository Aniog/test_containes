import React from 'react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1600&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="velmora-heading-lg text-white mb-6 velmora-slide-up">
          Crafted to be Treasured
        </h1>
        <p className="velmora-body text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto velmora-slide-up-delay">
          Demi-fine gold jewelry designed for everyday luxury. Ethically crafted, beautifully priced.
        </p>
        <Link
          to="/shop"
          className="velmora-btn velmora-btn-primary text-base px-8 py-4 velmora-slide-up-delay"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}
