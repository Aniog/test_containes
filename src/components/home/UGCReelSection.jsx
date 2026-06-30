import React, { useRef } from 'react'
import { ugcPosts } from '../../data/products'

export default function UGCReelSection() {
  const containerRef = useRef(null)

  return (
    <section ref={containerRef} className="py-12 bg-[#faf8f5]">
      <div className="container-padding mb-8">
        <h2 className="font-['Cormorant_Garamond'] text-2xl md:text-3xl text-center">
          As Worn By You
        </h2>
        <p className="text-[#6b6560] text-sm text-center mt-2">
          Tag @velmorajewelry to be featured
        </p>
      </div>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 lg:px-12 pb-4">
        {ugcPosts.map((post) => (
          <div
            key={post.id}
            className="flex-shrink-0 w-40 md:w-48 lg:w-56 relative group cursor-pointer"
          >
            <div className="aspect-[9/16] bg-gradient-to-br from-[#d4c5b2] to-[#c9b896] overflow-hidden rounded-sm flex items-center justify-center">
              <span className="text-[#6b6560] text-xs uppercase tracking-wider">{post.caption}</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <p className="text-white text-xs p-3 font-['Cormorant_Garamond'] tracking-wider">
                {post.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
