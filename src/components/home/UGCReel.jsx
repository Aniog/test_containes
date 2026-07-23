import React, { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const ugcItems = [
  { id: 'ugc-1', caption: 'Golden hour glow', query: 'gold jewelry worn on ear model portrait warm sunlight' },
  { id: 'ugc-2', caption: 'Layered & luxe', query: 'gold necklaces layered on neck model closeup warm lighting' },
  { id: 'ugc-3', caption: 'Everyday sparkle', query: 'gold huggie earrings worn on ear closeup natural light' },
  { id: 'ugc-4', caption: 'Statement drops', query: 'gold drop earrings worn on woman portrait soft lighting' },
  { id: 'ugc-5', caption: 'Ear stack goals', query: 'gold ear cuff and earring stack on ear closeup' },
  { id: 'ugc-6', caption: 'Minimal elegance', query: 'simple gold necklace on collarbone model warm skin' },
  { id: 'ugc-7', caption: 'Gift-worthy', query: 'gold jewelry gift box open luxury display velvet' },
  { id: 'ugc-8', caption: 'Golden goddess', query: 'gold jewelry collection on model editorial warm lighting' },
]

export default function UGCReel() {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (!scrollRef.current) return
    const amount = direction === 'left' ? -300 : 300
    scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' })
  }

  return (
    <section className="py-16 lg:py-20 bg-surface-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-caption tracking-ultra-wide uppercase text-gold mb-2 font-sans">
              @VelmoraJewelry
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-ivory">
              As Worn By You
            </h2>
          </div>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-surface-600 text-surface-400 hover:border-gold hover:text-gold flex items-center justify-center transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-surface-600 text-surface-400 hover:border-gold hover:text-gold flex items-center justify-center transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 pb-4"
      >
        {ugcItems.map((item, i) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[200px] sm:w-[240px] relative rounded-xl overflow-hidden group cursor-pointer"
            style={{ aspectRatio: '9/16' }}
          >
            <img
              data-strk-img-id={item.id}
              data-strk-img={`[ugc-caption-${item.id}] ${item.query}`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-950/70 via-transparent to-transparent" />
            <p
              id={`ugc-caption-${item.id}`}
              className="absolute bottom-4 left-4 right-4 font-serif text-lg text-ivory italic"
            >
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
