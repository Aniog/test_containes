import React from 'react'
import { ugcContent } from '../../data/products'

export default function UgcRow() {
  return (
    <section className="py-12 md:py-16 bg-velmora-50">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-8">
          <h2 className="section-title">As Seen On You</h2>
          <p className="text-sm text-velmora-500 mt-2">Tag @velmorajewelry for a chance to be featured</p>
        </div>

        <div className="overflow-x-auto ugc-scroll -mx-5 md:-mx-8 px-5 md:px-8">
          <div className="flex gap-4 pb-4" style={{ minWidth: 'max-content' }}>
            {ugcContent.map((item) => (
              <div
                key={item.id}
                className="relative flex-shrink-0 w-44 md:w-52 aspect-[9/16] overflow-hidden rounded-sm group cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="serif-heading text-sm text-white italic opacity-90">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}