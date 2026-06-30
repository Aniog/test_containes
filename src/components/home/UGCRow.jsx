import React, { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const ugcItems = [
  { caption: 'Everyday elegance', id: 'ugc-1' },
  { caption: 'Stacked & styled', id: 'ugc-2' },
  { caption: 'Golden hour glow', id: 'ugc-3' },
  { caption: 'Minimal moments', id: 'ugc-4' },
  { caption: 'Curated layers', id: 'ugc-5' },
  { caption: 'Solo statement', id: 'ugc-6' },
]

export default function UGCRow() {
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 280, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-20 md:py-28 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10">
        <p className="font-sans text-[11px] text-accent uppercase tracking-[0.2em] mb-3">
          As Seen On You
        </p>
        <h2 className="section-title">Styled by You</h2>
      </div>

      <div className="relative">
        {/* Scroll buttons */}
        <button
          onClick={() => scroll(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 shadow-md flex items-center justify-center hover:bg-white transition-colors hidden md:flex"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={() => scroll(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 shadow-md flex items-center justify-center hover:bg-white transition-colors hidden md:flex"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Horizontal scroll */}
        <div
          ref={scrollRef}
          className="flex gap-4 px-4 md:px-8 overflow-x-auto scrollbar-none"
          style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
        >
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[180px] md:w-[220px]"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="aspect-[9/16] bg-gradient-to-b from-amber-100/40 via-amber-200/20 to-amber-50/30 relative overflow-hidden group cursor-pointer">
                {/* Simulated jewelry image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-amber-300/15 blur-xl" />
                  <div className="absolute w-10 h-10 rounded-full bg-amber-400/10 blur-md" />
                </div>
                {/* Caption overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-base/70 via-base/30 to-transparent">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-5 h-5 rounded-full bg-border/40" />
                    <span className="font-sans text-[10px] text-surface/80">@velmorajewelry</span>
                  </div>
                  <p className="font-serif text-sm text-white italic">{item.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
