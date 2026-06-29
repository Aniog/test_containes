import React from 'react'
import { Link } from 'react-router-dom'

export default function JournalPage() {
  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <h1 className="font-serif text-3xl md:text-4xl tracking-[0.15em] uppercase text-warm-cream">
          Journal
        </h1>
        <div className="w-12 h-px bg-warm-gold mx-auto mt-4 mb-10" />
        <p className="text-sm text-warm-tan leading-relaxed">
          Stories, styling tips, and behind-the-scenes moments from the Velmora studio. Coming soon.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-8 border border-warm-gold text-warm-gold px-8 py-3 text-[11px] font-medium uppercase tracking-[0.2em] hover:bg-warm-gold hover:text-warm-black transition-all duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </div>
  )
}
