import React from 'react'
import { ugcItems } from '../../data/products'

export default function UGCReel() {
  return (
    <section className="py-16 md:py-24 bg-velmora-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="font-sans text-xs tracking-mega-wide uppercase text-velmora-gold mb-3">
            @VelmoraJewelry
          </p>
          <h2 className="section-title">Worn & Loved</h2>
          <div className="w-12 h-[1px] bg-velmora-gold mx-auto mt-4" />
        </div>
      </div>

      {/* Horizontal reel scroll */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto pb-4 px-4 md:px-8 scrollbar-none snap-x snap-mandatory">
        {ugcItems.map((item, index) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-52 aspect-[9/16] rounded-lg overflow-hidden snap-start group cursor-pointer"
          >
            <img
              data-strk-img-id={item.id}
              data-strk-img={`gold jewelry woman wearing ${item.caption}`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="font-serif text-base md:text-lg text-white italic leading-snug">
                {item.caption}
              </p>
            </div>

            {/* Hover ring */}
            <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-lg transition-all duration-300" />
          </div>
        ))}
      </div>
    </section>
  )
}
