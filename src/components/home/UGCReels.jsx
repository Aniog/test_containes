import React, { useRef } from 'react'
import { ugcReels } from '@/data/products'

export default function UGCReels() {
  const scrollRef = useRef(null)

  return (
    <section className="py-16 md:py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between mb-10">
          <div>
            <span className="text-gold/80 text-xs tracking-[0.3em] uppercase font-medium">As Seen On</span>
            <h2 className="font-serif text-3xl md:text-4xl text-white tracking-wide mt-2">
              Worn by You
            </h2>
          </div>
          <span className="hidden md:inline text-white/40 text-xs tracking-[0.2em] uppercase">Scroll →</span>
        </div>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto px-4 md:px-8 pb-4 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcReels.map((reel, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-48 md:w-56 snap-start"
          >
            <div className="relative aspect-[9/16] rounded-lg overflow-hidden bg-white/5">
              {/* Placeholder image background with gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-gold/10 via-warm-dark to-black" />

              {/* Scenic jewelry-style placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border-2 border-gold/30 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full border border-gold/50" />
                </div>
              </div>

              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                <p className="font-serif text-white text-sm italic leading-snug">
                  "{reel.caption}"
                </p>
              </div>

              {/* User avatar placeholder */}
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gold/30 flex items-center justify-center">
                  <span className="text-white text-[10px] font-serif">@</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}