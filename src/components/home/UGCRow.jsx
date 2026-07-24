import React from 'react'
import { ugcPosts } from '@/data/products'

const UGCRow = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container-padding mb-8">
        <div className="text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">@velmora</p>
          <h2 className="serif-heading text-3xl md:text-4xl">As Worn By You</h2>
        </div>
      </div>
      <div className="flex gap-4 overflow-x-auto px-4 pb-4 scrollbar-hide snap-x snap-mandatory">
        {ugcPosts.map((post) => (
          <div
            key={post.id}
            className="flex-shrink-0 w-[200px] md:w-[240px] aspect-[9/16] relative overflow-hidden rounded snap-start"
          >
            <img
              src={post.image}
              alt={post.caption}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 serif-heading text-white text-sm italic">
              "{post.caption}"
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default UGCRow
