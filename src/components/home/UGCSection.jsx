import React from 'react'
import { ugcPosts } from '@/data/products'

export default function UGCSection() {
  return (
    <section className="py-16 md:py-24 bg-velmora-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="section-subtitle">@velmora</p>
          <h2 className="section-title mt-2">As Worn By You</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4">
          {ugcPosts.map((post) => (
            <div
              key={post.id}
              className="flex-shrink-0 w-48 sm:w-56 relative group cursor-pointer"
            >
              <div className="aspect-[9/16] overflow-hidden bg-velmora-200">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="font-serif text-white text-sm p-4 tracking-wide">
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
