import React from 'react'

export default function UGCRow({ posts }) {
  return (
    <section className="py-16 sm:py-20 bg-[var(--velmora-bg-alt)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--velmora-text-muted)] mb-3">@velmorajewelry</p>
          <h2 className="velmora-heading text-3xl sm:text-4xl">As Worn By You</h2>
        </div>

        {/* Horizontal scroll */}
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
          {posts.map(post => (
            <div
              key={post.id}
              className="flex-shrink-0 w-48 sm:w-56 relative group cursor-pointer"
            >
              <div className="aspect-[9/16] overflow-hidden rounded-sm">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Caption overlay */}
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <p className="velmora-heading text-white text-sm italic">{post.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
