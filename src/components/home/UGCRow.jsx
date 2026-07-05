import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ugcItems } from '@/data/products'

export default function UGCRow() {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = 320
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="py-20 md:py-28 bg-velvet-600/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-gold text-xs uppercase tracking-[0.25em] mb-4 font-sans">As Seen On You</p>
            <h2 className="font-serif text-3xl md:text-4xl text-velvet-50">Worn in Real Life</h2>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 border border-velvet-400/40 rounded-full flex items-center justify-center text-velvet-200 hover:text-velvet-50 hover:border-gold/50 transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 border border-velvet-400/40 rounded-full flex items-center justify-center text-velvet-200 hover:text-velvet-50 hover:border-gold/50 transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-6 lg:px-8 pb-4 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[240px] sm:w-[260px] snap-start group cursor-pointer"
          >
            <div className="relative aspect-[9/16] bg-velvet-600 rounded-sm overflow-hidden">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="font-serif italic text-sm text-velvet-50 leading-relaxed">
                  &ldquo;{item.caption}&rdquo;
                </p>
                <p className="text-[10px] text-gold uppercase tracking-widest mt-2 font-sans">
                  {item.product}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}