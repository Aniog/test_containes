import React from 'react'
import { Link } from 'react-router-dom'

export default function Journal() {
  return (
    <div className="pt-24 md:pt-32 pb-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h1 className="font-serif text-3xl md:text-5xl tracking-wide text-warm-900">Journal</h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
          <p className="mt-6 font-sans text-base text-warm-600 max-w-md mx-auto">
            Stories, styling tips, and inspiration from the world of Velmora.
          </p>
        </div>

        <div className="text-center py-20">
          <p className="font-serif text-lg text-warm-500 mb-6">Coming soon</p>
          <Link
            to="/shop"
            className="inline-block border border-gold text-gold font-sans text-xs font-semibold uppercase tracking-widest px-10 py-3 hover:bg-gold hover:text-white transition-all duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </div>
  )
}
