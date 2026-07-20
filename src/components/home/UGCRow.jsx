import React from 'react'
import { ugcPosts } from '../../data/products'

export default function UGCRow() {
  return (
    <section className="py-16 bg-muted/30 overflow-hidden">
      <div className="container-padding mb-8">
        <h2 className="serif-heading text-3xl md:text-4xl text-center mb-2">As Worn By You</h2>
        <p className="text-muted-foreground text-center text-sm">Tag @velmora to be featured</p>
      </div>

      <div className="flex gap-4 px-4 md:px-8 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
        {ugcPosts.map((post) => (
          <div
            key={post.id}
            className="flex-shrink-0 w-48 md:w-56 snap-start relative group"
          >
            <div className="aspect-[9/16] overflow-hidden rounded-sm">
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="serif-heading text-white text-lg italic">{post.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
