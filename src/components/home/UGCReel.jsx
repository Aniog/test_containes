import React from 'react'
import { ugcPosts } from '@/data/products'

export default function UGCReel() {
  return (
    <section className="py-16 md:py-20 overflow-hidden">
      <div className="text-center mb-10 px-6">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">@velmora.jewelry</p>
        <h2 className="serif-heading text-3xl md:text-4xl">As Worn By You</h2>
      </div>

      <div className="flex gap-4 px-6 md:px-12 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
        {ugcPosts.map((post) => (
          <div
            key={post.id}
            className="flex-shrink-0 w-48 md:w-56 snap-start"
          >
            <div className="aspect-[9/16] relative overflow-hidden group">
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="serif-heading text-white text-lg italic">{post.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
