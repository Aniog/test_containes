import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h1 className="font-serif text-3xl md:text-5xl tracking-wide text-warm-900">Our Story</h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center mb-20">
          <div className="aspect-[4x5] overflow-hidden">
            <img
              data-strk-img-id="about-img-1a2b3c"
              data-strk-img="[about-mission] [about-title] gold jewelry craftsmanship artisan"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 id="about-title" className="font-serif text-2xl md:text-3xl tracking-wide text-warm-900 mb-6">
              Jewelry for Every Day
            </h2>
            <p id="about-mission" className="font-sans text-base text-warm-600 leading-relaxed mb-4">
              Velmora was founded on a simple conviction: that beautiful, well-crafted jewelry should be accessible enough to wear every day, not just on special occasions.
            </p>
            <p className="font-sans text-base text-warm-600 leading-relaxed mb-4">
              Every piece in our collection is designed in-house and crafted with 18K gold plating over hypoallergenic brass. We work directly with artisans, cutting out the middlemen and traditional retail markups, so you get premium quality at a fair price.
            </p>
            <p className="font-sans text-base text-warm-600 leading-relaxed">
              From the initial sketch to the final polish, we obsess over every detail — because the jewelry you reach for every morning should feel as special as the pieces you save for special moments.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-serif text-3xl text-gold mb-2">18K</h3>
            <p className="font-sans text-xs uppercase tracking-widest text-warm-600">Gold Plated</p>
          </div>
          <div>
            <h3 className="font-serif text-3xl text-gold mb-2">100%</h3>
            <p className="font-sans text-xs uppercase tracking-widest text-warm-600">Hypoallergenic</p>
          </div>
          <div>
            <h3 className="font-serif text-3xl text-gold mb-2">30</h3>
            <p className="font-sans text-xs uppercase tracking-widest text-warm-600">Day Returns</p>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link
            to="/shop"
            className="inline-block bg-gold text-white font-sans text-xs font-semibold uppercase tracking-widest px-10 py-3.5 hover:bg-gold-hover transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </div>
  )
}
