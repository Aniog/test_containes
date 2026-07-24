import React from 'react'
import { ugcPosts } from '../../data/products'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function UGCRow() {
  const [ref, isVisible] = useScrollAnimation(0.1)

  return (
    <section ref={ref} className={`py-16 md:py-24 bg-velmora-warm/20 animate-on-scroll ${isVisible ? 'is-visible' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-10">
        <div className="text-center">
          <p className="section-subtitle">@velmorajewelry</p>
          <h2 className="section-title mt-2">As Worn By You</h2>
        </div>
      </div>

      {/* Horizontal scroll container */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto pb-4 px-4 sm:px-6 lg:px-8 scrollbar-hide snap-x snap-mandatory">
        {ugcPosts.map((post) => (
          <div
            key={post.id}
            className="flex-shrink-0 w-40 sm:w-48 md:w-56 snap-start"
          >
            <div className="relative aspect-[9/16] bg-velmora-warm/30 overflow-hidden rounded-sm">
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Caption overlay */}
              <div className="absolute inset-x-0 bottom-0 p-3 md:p-4 bg-gradient-to-t from-black/60 to-transparent">
                <p className="font-serif text-xs md:text-sm text-white/90 italic">
                  "{post.caption}"
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
