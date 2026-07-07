import React from 'react'
import { ugcItems } from '../../data/products'

function UGCard({ item }) {
  return (
    <div className="flex-shrink-0 w-[180px] md:w-[220px] relative aspect-[9/16] overflow-hidden bg-ivory group cursor-pointer">
      <img
        src={item.image}
        alt=""
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      <p className="absolute bottom-4 left-3 right-3 font-serif text-sm text-white italic leading-tight">
        {item.caption}
      </p>
    </div>
  )
}

export default function UGCCarousel() {
  return (
    <section className="py-16 md:py-20 border-t border-warm-border">
      <div className="max-w-7xl mx-auto px-6 mb-8 md:mb-10">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl text-[#1a1a1a] font-semibold">
              As Seen On You
            </h2>
            <p className="text-taupe text-sm mt-1">Tag @velmorajewelry to be featured</p>
          </div>
          <span className="text-[11px] tracking-wider uppercase text-taupe hidden md:inline">
            &#8592; Scroll &#8594;
          </span>
        </div>
      </div>

      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex gap-3 md:gap-4 px-6 pb-2">
          {ugcItems.map((item) => (
            <UGCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}