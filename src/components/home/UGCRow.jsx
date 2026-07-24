import React from 'react'
import { ugcPosts } from '../../data/products'

export default function UGCRow() {
  return (
    <section className="py-12 bg-[var(--color-warm-white)] overflow-hidden">
      <div className="text-center mb-8 px-4">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-warm-gray)] mb-2">@velmora</p>
        <h2 className="serif-heading text-2xl md:text-3xl tracking-wide">As Worn By You</h2>
      </div>
      <div className="flex gap-4 px-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {ugcPosts.map(post => (
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="serif-heading text-white text-lg italic">{post.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
