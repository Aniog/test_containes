import React, { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ugcItems } from '@/data/products'

export default function UGCReel() {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -300 : 300
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-16 md:py-20 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="font-sans text-xs tracking-superwide uppercase text-gold mb-2">Wear It Your Way</p>
            <h2 className="section-heading text-left">#VelmoraStyle</h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 border border-charcoal-200 rounded-full flex items-center justify-center text-charcoal-400 hover:text-charcoal hover:border-charcoal transition-all duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 border border-charcoal-200 rounded-full flex items-center justify-center text-charcoal-400 hover:text-charcoal hover:border-charcoal transition-all duration-300"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal scroll of vertical cards */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto custom-scrollbar px-4 sm:px-6 lg:px-8 pb-4 snap-x snap-mandatory"
      >
        {/* Spacer for edge alignment */}
        <div className="flex-shrink-0 w-0 lg:w-[calc((100vw-1280px)/2)]" />

        {ugcItems.map(item => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[200px] md:w-[240px] snap-start group relative rounded-lg overflow-hidden"
          >
            <div className="aspect-[9/16] relative">
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.id}-caption] gold jewelry worn on ear neck close up editorial`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Caption overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              <p
                id={`${item.id}-caption`}
                className="absolute bottom-4 left-4 right-4 font-serif text-base text-white italic"
              >
                {item.caption}
              </p>
            </div>
          </div>
        ))}

        {/* Spacer for edge alignment */}
        <div className="flex-shrink-0 w-4" />
      </div>
    </section>
  )
}
