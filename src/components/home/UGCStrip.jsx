import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ugcItems } from '../../data/products'

export default function UGCStrip() {
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: dir * 260, behavior: 'smooth' })
  }

  return (
    <section className="py-16 md:py-24 bg-velmora-cream/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex items-end justify-between">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-velmora-gold font-sans mb-3">
            @velmorajewelry
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal">
            Styled by You
          </h2>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => scroll(-1)}
            className="w-10 h-10 border border-velmora-border flex items-center justify-center hover:border-velmora-charcoal transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll(1)}
            className="w-10 h-10 border border-velmora-border flex items-center justify-center hover:border-velmora-charcoal transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8 snap-x snap-mandatory"
      >
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[200px] md:w-[240px] snap-start relative group"
          >
            <div className="aspect-[9/16] bg-velmora-cream overflow-hidden rounded-sm">
              <img
                src={`https://images.unsplash.com/${item.query}?w=480&h=853&fit=crop&q=80`}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
              <p className="font-serif text-sm text-white italic">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
