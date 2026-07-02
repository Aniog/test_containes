import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ugcItems } from '@/data/products'

export default function UGCRow() {
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: dir * 280, behavior: 'smooth' })
  }

  return (
    <section className="py-20 md:py-28 bg-velmora-warmwhite overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="section-subtitle mb-3">Styled by You</p>
            <h2 className="section-title">As Seen On</h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll(-1)}
              className="w-10 h-10 flex items-center justify-center border border-velmora-sand text-velmora-stone hover:border-velmora-gold hover:text-velmora-gold transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-10 h-10 flex items-center justify-center border border-velmora-sand text-velmora-stone hover:border-velmora-gold hover:text-velmora-gold transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable row */}
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[220px] md:w-[260px] snap-start"
            >
              <div className="relative aspect-[9/16] bg-velmora-blush overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-velmora-stone/40 text-xs text-center px-2 font-serif">
                    {item.product}
                  </span>
                </div>
                {/* Caption overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-serif text-white text-sm italic leading-snug">
                    {item.caption}
                  </p>
                  <p className="text-white/60 text-xs mt-1 font-sans">@{item.product.toLowerCase().replace(/\s+/g, '')}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}