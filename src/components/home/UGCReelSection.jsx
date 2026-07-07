import React from 'react'
import { ugcPosts } from '@/data/products'

export default function UGCReelSection() {
  return (
    <section className="py-16 bg-[var(--color-warm-white)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-8">
        <h2 className="serif-heading text-3xl md:text-4xl text-center mb-2">As Worn By You</h2>
        <p className="text-sm text-[var(--color-muted)] text-center">Tag @velmora to be featured</p>
      </div>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide px-6 pb-4">
        {ugcPosts.map(post => (
          <div
            key={post.id}
            className="flex-shrink-0 w-48 md:w-56 relative group cursor-pointer"
          >
            <div className="aspect-[9/16] overflow-hidden bg-[var(--color-soft-gray)]">
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <p className="serif-heading text-white text-sm p-4 italic">{post.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
