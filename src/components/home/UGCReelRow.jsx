import React from 'react'
import { ugcPosts } from '../../data/products'

export default function UGCReelRow() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <p className="text-xs tracking-widest uppercase text-velmora-gold mb-3">
            @velmora
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-base">
            As Worn By You
          </h2>
        </div>
      </div>

      <div className="flex gap-4 px-4 sm:px-6 lg:px-8 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
        {ugcPosts.map((post) => (
          <div
            key={post.id}
            className="flex-shrink-0 w-40 sm:w-48 md:w-56 snap-start"
          >
            <div className="relative aspect-[9/16] overflow-hidden rounded-sm">
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-serif text-white text-sm italic">
                  {post.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
