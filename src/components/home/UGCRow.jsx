import React from 'react'
import { ugcPosts } from '../../data/products'

export default function UGCRow() {
  return (
    <section className="py-16 md:py-20 bg-[hsl(var(--background-secondary))]">
      <div className="container-padding">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[hsl(var(--accent))] mb-3">@velmora</p>
          <h2 className="serif-heading text-3xl md:text-4xl tracking-[0.15em]">As Worn By You</h2>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto px-6 md:px-12 pb-4 scrollbar-hide snap-x snap-mandatory">
        {ugcPosts.map(post => (
          <div
            key={post.id}
            className="flex-shrink-0 w-44 md:w-56 snap-start relative rounded-sm overflow-hidden aspect-[9/16] group"
          >
            <img
              src={post.image}
              alt={post.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 text-white serif-heading text-xs tracking-[0.15em]">
              {post.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
