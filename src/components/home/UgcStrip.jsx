import React, { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ugcPosts } from '../../data/products'

export default function UgcStrip() {
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: dir * 300, behavior: 'smooth' })
  }

  return (
    <section className="bg-velmora-sand py-20 lg:py-28">
      <div className="mb-12 px-6 lg:px-12 max-w-[1440px] mx-auto flex items-end justify-between">
        <div>
          <p className="text-[0.6875rem] tracking-[0.2em] uppercase text-velmora-muted font-medium mb-3">
            As Seen On You
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-wide">
            Velmora Community
          </h2>
        </div>
        <div className="hidden md:flex gap-2">
          <button
            onClick={() => scroll(-1)}
            className="w-10 h-10 rounded-full border border-velmora-rose flex items-center justify-center hover:bg-white transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft size={18} strokeWidth={1.5} />
          </button>
          <button
            onClick={() => scroll(1)}
            className="w-10 h-10 rounded-full border border-velmora-rose flex items-center justify-center hover:bg-white transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight size={18} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Scrollable strip */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-6 lg:px-12 pb-4 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcPosts.map((post) => (
          <div
            key={post.id}
            className="flex-shrink-0 w-[180px] md:w-[220px] snap-start"
          >
            <div className="aspect-[9/16] bg-velmora rounded-sm overflow-hidden relative group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-velmora/70 via-transparent to-transparent" />
              {/* Decorative */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center">
                  <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[14px] border-l-white/60 ml-0.5" />
                </div>
              </div>
              <p className="absolute bottom-3 left-3 right-3 text-white text-xs font-serif italic leading-snug">
                {post.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
