import React from 'react'
import { ugcPosts } from '../../data/products'

export default function UGCRow() {
  return (
    <section className="py-16 md:py-24 bg-velmora-warm/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <p className="text-velmora-gold text-sm tracking-widest mb-2">@VELMORAJEWELRY</p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-base">As Worn By You</h2>
        </div>
      </div>
      <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 px-4 sm:px-6 lg:px-8 scrollbar-hide snap-x snap-mandatory">
        {ugcPosts.map((post) => (
          <div
            key={post.id}
            className="flex-shrink-0 w-[200px] md:w-[240px] snap-start"
          >
            <div className="relative aspect-[9/16] overflow-hidden rounded-sm">
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-base/60 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 font-serif text-velmora-cream text-sm italic">
                "{post.caption}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
