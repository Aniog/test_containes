import React from 'react'
import { ugcPosts } from '../../data/products'

export default function UGCSection() {
  return (
    <section className="py-16 md:py-20 bg-[#faf8f5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[#c9a96e] mb-3 font-sans">
            @velmora
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a]">
            As Worn By You
          </h2>
        </div>
      </div>

      {/* Horizontal scroll row */}
      <div className="flex gap-4 px-4 sm:px-6 lg:px-8 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory">
        {ugcPosts.map((post) => (
          <div
            key={post.id}
            className="flex-shrink-0 w-44 sm:w-52 md:w-60 snap-start"
          >
            <div className="relative aspect-[9/16] overflow-hidden bg-[#f5f0eb]">
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover"
              />
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <p className="font-serif text-[#faf8f5] text-sm italic">
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
