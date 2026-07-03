import React from 'react'
import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden order-1">
            <img
              data-strk-img-id="story-img-velmora-3c8d"
              data-strk-img="[story-text] gold jewelry craftsmanship studio warm editorial"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry craftsmanship"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="order-2 md:pl-6">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-ink leading-tight mb-6">
              Quiet luxury, made to be lived in.
            </h2>
            <p id="story-text" className="text-stone leading-relaxed mb-5">
              Velmora began with a simple belief: fine jewelry should be worn,
              not locked away. We craft demi-fine pieces in 18K gold plating
              over sterling silver — the warmth and weight of fine jewelry,
              designed for the everyday.
            </p>
            <p className="text-stone leading-relaxed mb-8">
              Every piece is hypoallergenic, ethically made, and finished by
              hand. No markups for marble showrooms — just considered design,
              delivered to you.
            </p>
            <Link
              to="/about"
              className="inline-block border border-ink text-ink text-[11px] uppercase tracking-[0.25em] px-9 py-4 hover:bg-ink hover:text-cream transition-colors duration-300"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
