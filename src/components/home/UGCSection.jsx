import React from 'react'
import { ugcPosts } from '@/data/products'

export default function UGCSection() {
  return (
    <section className="py-12 md:py-16 bg-[var(--velmora-bg-secondary)] overflow-hidden">
      <div className="px-4 md:px-8 lg:px-12 mb-8">
        <span className="velmora-label text-[var(--velmora-accent)]">@velmorajewelry</span>
        <h2 className="velmora-heading-md text-[var(--velmora-text)] mt-1">As Worn By You</h2>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-4 px-4 md:px-8 lg:px-12 scrollbar-hide snap-x snap-mandatory">
        {ugcPosts.map((post) => (
          <div
            key={post.id}
            className="relative flex-shrink-0 w-[180px] md:w-[220px] aspect-[9/16] rounded-lg overflow-hidden snap-start group"
          >
            <img
              src={post.image}
              alt={post.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 velmora-heading-sm text-white/90">
              {post.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
