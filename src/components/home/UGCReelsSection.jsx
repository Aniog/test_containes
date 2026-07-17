import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../../strk-img-config.json'

const ugcPosts = [
  {
    id: 'ugc-1',
    caption: 'Everyday elegance ✨',
    query: 'gold earrings worn woman ear closeup elegant',
  },
  {
    id: 'ugc-2',
    caption: 'Layered perfection',
    query: 'gold necklace layered woman neck elegant jewelry',
  },
  {
    id: 'ugc-3',
    caption: 'Golden hour glow',
    query: 'gold huggie earrings woman ear warm lighting',
  },
  {
    id: 'ugc-4',
    caption: 'Stacked & styled',
    query: 'gold rings stacked woman hand elegant jewelry',
  },
  {
    id: 'ugc-5',
    caption: 'Minimal & refined',
    query: 'minimal gold jewelry woman portrait elegant',
  },
  {
    id: 'ugc-6',
    caption: 'The perfect gift',
    query: 'jewelry gift box gold elegant luxury',
  },
]

export default function UGCReelsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-16 md:py-24 bg-[var(--velmora-bg-alt)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="velmora-label text-[var(--velmora-accent)] mb-3">@velmora.jewelry</p>
          <h2 className="velmora-heading text-3xl md:text-4xl">As Worn By You</h2>
          <div className="velmora-divider-thin w-24 mx-auto mt-6" />
        </div>

        {/* Horizontal Scroll Row */}
        <div ref={containerRef} className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 md:mx-0 md:px-0">
          {ugcPosts.map((post) => (
            <div
              key={post.id}
              className="flex-shrink-0 w-48 sm:w-56 md:w-64 relative group cursor-pointer"
            >
              {/* 9:16 Card */}
              <div className="aspect-[9/16] bg-[var(--velmora-border)] overflow-hidden relative">
                <img
                  data-strk-img-id={post.id}
                  data-strk-img={post.query}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Caption Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="velmora-heading text-white text-lg p-4 pb-6">{post.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
