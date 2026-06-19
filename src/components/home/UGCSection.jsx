import React from 'react'
import { ugcPosts } from '../../data/products'

export default function UGCSection() {
  return (
    <section className="py-10 sm:py-12 md:py-16 bg-[var(--velmora-bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[var(--velmora-text-muted)] mb-2 sm:mb-3">
            @velmora
          </p>
          <h2 className="serif-heading text-2xl sm:text-3xl md:text-4xl text-[var(--velmora-text)]">
            As Worn By You
          </h2>
        </div>
      </div>

      {/* Horizontal scroll container */}
      <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 px-4 sm:px-6 lg:px-8 snap-x snap-mandatory scrollbar-hide" role="list" aria-label="User generated content">
        {ugcPosts.map(post => (
          <div
            key={post.id}
            className="flex-shrink-0 w-40 sm:w-48 md:w-56 snap-start"
            role="listitem"
          >
            <div className="relative aspect-[9/16] overflow-hidden rounded-sm">
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                <p className="serif-heading text-white text-base sm:text-lg italic">
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
