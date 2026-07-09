import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../../strk-img-config.json'
import { ugcPosts } from '../../data/products'

export default function UGCRow() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-16 md:py-20 bg-[var(--velmora-bg-alt)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <h2 className="serif-heading text-2xl md:text-3xl tracking-[0.05em] text-center">
          As Worn By You
        </h2>
        <p className="text-sm text-[var(--velmora-text-muted)] text-center mt-2">
          Tag @velmora to be featured
        </p>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={containerRef}
        className="flex gap-4 md:gap-6 overflow-x-auto pb-4 px-4 sm:px-6 lg:px-8 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcPosts.map((post) => (
          <div
            key={post.id}
            className="flex-shrink-0 w-[200px] md:w-[240px] snap-start"
          >
            <div className="relative aspect-[9/16] bg-[var(--velmora-border-light)] overflow-hidden rounded-sm">
              <img
                alt={`UGC post ${post.id}`}
                data-strk-img-id={`ugc-${post.id}`}
                data-strk-img={`[${post.query}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />

              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <p className="serif-heading text-white text-sm tracking-wide">
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
