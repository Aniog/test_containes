import React, { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ugcItems } from '@/data/products'

export function UGCReel() {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (!scrollRef.current) return
    const scrollAmount = 260
    scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' })
  }

  return (
    <section className="bg-velmora-charcoal py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-velmora-gold">@velmorajewelry</p>
            <h2 className="mt-2 font-serif text-3xl text-velmora-text-light md:text-4xl">Styled by You</h2>
          </div>
          <div className="hidden gap-2 md:flex">
            <button
              type="button"
              onClick={() => scroll('left')}
              className="flex h-10 w-10 items-center justify-center border border-velmora-border-dark text-velmora-text-light hover:border-velmora-gold hover:text-velmora-gold transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="flex h-10 w-10 items-center justify-center border border-velmora-border-dark text-velmora-text-light hover:border-velmora-gold hover:text-velmora-gold transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-4 pb-4 md:gap-6 md:px-[max(1rem,calc((100vw-80rem)/2+1rem))]"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative h-[360px] w-[220px] flex-shrink-0 overflow-hidden md:h-[420px] md:w-[260px]"
            style={{ scrollSnapAlign: 'start' }}
          >
            <img
              data-strk-img-id={item.id}
              data-strk-img={`[${item.id}-caption]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
              alt={item.caption}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal/70 via-transparent to-transparent" />
            <p
              id={`${item.id}-caption`}
              className="absolute bottom-5 left-5 right-5 font-serif text-lg italic text-velmora-text-light"
            >
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
