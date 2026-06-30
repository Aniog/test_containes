import React from 'react'
import { ugcPosts } from '../../data/products'

export default function UGCReelSection() {
  return (
    <section className="py-12 md:py-16 bg-[var(--velmora-bg-alt)]">
      <div className="velmora-container mx-auto">
        <div className="text-center mb-8">
          <p className="velmora-body-xs text-[var(--velmora-text-light)] tracking-[0.2em] mb-3">
            @velmorajewelry
          </p>
          <h2 className="velmora-heading velmora-heading-md">As Worn By You</h2>
        </div>

        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 md:mx-0 md:px-0">
          {ugcPosts.map((post) => (
            <div
              key={post.id}
              className="flex-shrink-0 w-40 md:w-48 relative group cursor-pointer"
            >
              <div className="aspect-[9/16] overflow-hidden bg-[var(--velmora-border)]">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="velmora-heading-sm text-white p-4">
                  {post.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
