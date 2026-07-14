import React, { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ugcReels } from '@/data/products'
import { StockImage } from '@/components/shared/StockImage'

export default function UgcReelSection() {
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    if (!scrollRef.current) return
    const width = scrollRef.current.firstElementChild?.clientWidth || 280
    scrollRef.current.scrollBy({ left: dir === 'left' ? -width : width, behavior: 'smooth' })
  }

  return (
    <section className="py-16 sm:py-24 bg-cream-100/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="section-label mb-2">@velmorajewelry</p>
            <h2 className="font-serif text-3xl text-espresso-900 sm:text-4xl">Styled by You</h2>
          </div>
          <div className="hidden sm:flex gap-2">
            <button onClick={() => scroll('left')} className="p-2 border border-cream-300 text-espresso-900 hover:bg-cream-200 transition-colors" aria-label="Scroll left">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={() => scroll('right')} className="p-2 border border-cream-300 text-espresso-900 hover:bg-cream-200 transition-colors" aria-label="Scroll right">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-4 pb-4 scrollbar-hide sm:px-6 lg:px-8"
      >
        {ugcReels.map((reel) => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-[220px] sm:w-[260px] aspect-[9/16] overflow-hidden rounded-sm group"
          >
            <StockImage
              query={reel.query}
              ratio="9x16"
              width={400}
              imgId={`ugc-reel-${reel.id}`}
              alt={reel.caption}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="font-serif text-lg text-white">{reel.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
