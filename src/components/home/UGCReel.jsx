import React from 'react'
import { ugcItems } from '@/data/products'

export default function UGCReel() {
  return (
    <section className="py-16 md:py-20 bg-velmora-linen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <p className="font-sans text-xs tracking-widest-3xl uppercase text-velmora-gold mb-3">
            #VelmoraStyle
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-black">
            As Seen On You
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-5" />
        </div>
      </div>

      <div className="flex gap-4 px-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-48 md:w-56 aspect-[9/16] rounded-lg overflow-hidden snap-start group"
          >
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.caption}] woman wearing gold jewelry portrait vertical`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 font-serif text-base italic text-white leading-snug">
              {item.caption}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  )
}
