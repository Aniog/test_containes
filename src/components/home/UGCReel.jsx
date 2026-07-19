import React, { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const ugcItems = [
  {
    id: 1,
    caption: 'Golden hour glow',
    query: 'gold earrings on ear close up model warm light',
  },
  {
    id: 2,
    caption: 'Layered & luminous',
    query: 'layered gold necklaces on neck model editorial',
  },
  {
    id: 3,
    caption: 'Everyday elegance',
    query: 'gold huggie earrings woman portrait jewelry',
  },
  {
    id: 4,
    caption: 'Treasured moments',
    query: 'gold jewelry gift box luxury unboxing',
  },
  {
    id: 5,
    caption: 'Shine brighter',
    query: 'crystal necklace on collarbone model close up',
  },
  {
    id: 6,
    caption: 'Quiet luxury',
    query: 'minimal gold jewelry on skin editorial beauty',
  },
]

export default function UGCReel() {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -300 : 300
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-16 lg:py-24 bg-onyx-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="font-sans text-xs tracking-mega-wide uppercase text-gold-400 mb-3">
              #VelmoraStyle
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-ivory-100">
              Worn & Loved
            </h2>
          </div>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 border border-velvet-700 flex items-center justify-center text-velvet-400 hover:text-gold-400 hover:border-gold-400 transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 border border-velvet-700 flex items-center justify-center text-velvet-400 hover:text-gold-400 hover:border-gold-400 transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div
        ref={scrollRef}
        className="flex gap-4 px-4 sm:px-6 lg:px-8 overflow-x-auto scrollbar-hide pb-4"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {/* Leading spacer for edge padding */}
        <div className="flex-shrink-0 w-0 lg:w-[calc((100vw-80rem)/2)]" />

        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[200px] sm:w-[240px] aspect-[9/16] relative overflow-hidden rounded-lg group"
            style={{ scrollSnapAlign: 'start' }}
          >
            <img
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              data-strk-img-id={`ugc-reel-${item.id}`}
              data-strk-img={item.query}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="font-serif text-base italic text-ivory-100 leading-snug">
                {item.caption}
              </p>
            </div>
          </div>
        ))}

        {/* Trailing spacer */}
        <div className="flex-shrink-0 w-4" />
      </div>
    </section>
  )
}
