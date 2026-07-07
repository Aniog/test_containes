import React from 'react'
import { ugcReels } from '../../data/products'

export default function UGCRow() {
  return (
    <section className="py-16 md:py-24 bg-[#F5EFE6]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="section-title">As Seen On You</h2>
          <p className="section-subtitle">Tag @velmorajewelry for a chance to be featured</p>
        </div>
      </div>

      <div className="overflow-x-auto ugc-scroll">
        <div className="flex gap-4 px-4 md:px-8 pb-4" style={{ width: 'max-content' }}>
          {ugcReels.map((reel) => (
            <div
              key={reel.id}
              className="relative aspect-[9/16] h-[350px] md:h-[420px] bg-[#E8DFD3] overflow-hidden group flex-shrink-0 cursor-pointer"
            >
              <img
                src={reel.image}
                alt={reel.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1814]/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="font-heading text-white text-lg italic leading-tight">
                  "{reel.caption}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}