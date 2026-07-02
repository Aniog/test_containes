import React from 'react'
import { ugcPosts } from '../../data/products'

export default function UGCRow() {
  return (
    <section className="py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8 md:mb-10">
        <div className="flex justify-center">
          <div className="gold-divider" />
        </div>
        <h2 className="font-serif text-3xl md:text-4xl text-[#F5F0EB] font-light text-center mt-4">
          As Seen On You
        </h2>
        <p className="text-sm text-[#A0988E] text-center mt-2">
          Tag <span className="text-[#C9A96E]">@velmorajewelry</span> to be featured
        </p>
      </div>

      <div className="relative">
        <div className="flex gap-4 overflow-x-auto pb-4 px-4 md:px-8 scrollbar-hide snap-x snap-mandatory">
          {ugcPosts.map((post) => (
            <div
              key={post.id}
              className="flex-shrink-0 w-[180px] md:w-[220px] snap-start group cursor-pointer"
            >
              <div className="relative aspect-[9/16] rounded-sm overflow-hidden bg-[#111111]">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <p className="absolute bottom-3 left-3 right-3 text-xs text-[#F5F0EB]/90 font-serif italic leading-relaxed">
                  &ldquo;{post.caption}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}