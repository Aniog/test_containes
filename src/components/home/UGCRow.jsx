import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ugcPosts } from '@/data/products'

// Hidden jewelry-specific query text for stock image system
const ugcQueries = [
  { id: 'ugc-query-1', text: 'gold ear cuff crystal jewelry worn on ear closeup' },
  { id: 'ugc-query-2', text: 'gold pendant necklace crystal jewelry worn on neck closeup' },
  { id: 'ugc-query-3', text: 'gold hoop huggie earrings jewelry worn on ear closeup' },
  { id: 'ugc-query-4', text: 'gold filigree drop earrings jewelry worn on ear closeup' },
  { id: 'ugc-query-5', text: 'minimalist gold delicate jewelry worn closeup' },
  { id: 'ugc-query-6', text: 'layered gold chain necklaces jewelry worn on neck closeup' },
]

export default function UGCRow() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-white overflow-hidden">
      {/* Hidden jewelry-specific query text for stock image system */}
      <div style={{ position: 'absolute', left: '-9999px', top: '0', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
        {ugcQueries.map((q) => (
          <span key={q.id} id={q.id}>{q.text}</span>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <h2
            id="ugc-section-title"
            className="font-serif text-2xl md:text-3xl text-[#1A1A1A] tracking-wide"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            As Worn By You
          </h2>
          <p className="mt-2 text-sm text-[#6B6560]">
            Tag @velmorajewelry to be featured
          </p>
        </div>
      </div>

      {/* Horizontal scroll row */}
      <div className="flex gap-4 px-4 sm:px-6 lg:px-8 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
        {ugcPosts.map((post) => (
          <div
            key={post.id}
            className="flex-shrink-0 w-40 sm:w-48 md:w-56 snap-start"
          >
            <div className="relative aspect-[9/16] bg-[#E8E4DF] overflow-hidden group">
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                data-strk-bg-id={`ugc-${post.imgId}`}
                data-strk-bg={`[ugc-query-${post.id}]`}
                data-strk-bg-ratio={post.ratio}
                data-strk-bg-width={post.width}
              />
              {/* Caption overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p
                id={`ugc-caption-${post.id}`}
                className="absolute bottom-4 left-3 right-3 text-white text-xs tracking-wide font-light"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}
              >
                {post.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
