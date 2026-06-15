import React, { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ugcItems } from '@/data/products'

export default function UGCReel() {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (!scrollRef.current) return
    const amount = direction === 'left' ? -280 : 280
    scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' })
  }

  return (
    <section className="py-16 sm:py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-overline font-medium tracking-[0.25em] text-gold-muted uppercase mb-2">
              #WearVelmora
            </p>
            <h2 className="font-serif text-display-sm text-white">
              Styled by You
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 border border-white/20 rounded-full text-white/60 hover:text-white hover:border-white/40 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 border border-white/20 rounded-full text-white/60 hover:text-white hover:border-white/40 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto hide-scrollbar px-4 sm:px-[max(1rem,calc((100vw-80rem)/2+2rem))]"
      >
        {ugcItems.map((item, idx) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-[200px] sm:w-[240px] aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer"
          >
            <div
              data-strk-img-id={`ugc-reel-${item.id}`}
              data-strk-img={`woman wearing gold jewelry closeup ${item.caption}`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 font-serif text-body text-white/90 italic">
              {item.caption}
            </p>
            <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </section>
  )
}
