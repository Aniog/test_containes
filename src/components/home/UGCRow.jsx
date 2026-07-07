import React, { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ugcReels } from '@/data/products'

export default function UGCRow() {
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 280, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-20 md:py-28 bg-truffle-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-10 mb-10 flex items-end justify-between">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wider uppercase text-cream">
            As Seen On You
          </h2>
          <div className="mt-4 w-12 h-px bg-gold" />
          <p className="mt-3 text-cream-300/60 text-sm">Tag @velmorajewelry to be featured</p>
        </div>
        <div className="hidden md:flex gap-2">
          <button
            onClick={() => scroll(-1)}
            className="p-2 border border-cream-300/20 text-cream-300/60 hover:text-cream hover:border-cream transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll(1)}
            className="p-2 border border-cream-300/20 text-cream-300/60 hover:text-cream hover:border-cream transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto px-5 md:px-10 pb-4 thin-scrollbar"
      >
        {ugcReels.map((reel, i) => (
          <div key={reel.id} className="shrink-0 w-[160px] md:w-[220px] animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
            <div className="relative aspect-[9/16] overflow-hidden rounded-sm bg-truffle-700">
              <img
                src={reel.src}
                alt={reel.caption}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-truffle-900/70 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 font-serif text-cream text-sm italic">
                {reel.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
