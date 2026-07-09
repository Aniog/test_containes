import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ugcItems } from '@/data/products'

export default function UGCRow() {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (!scrollRef.current) return
    const amount = 300
    scrollRef.current.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  return (
    <section className="section-padding bg-velvet-900">
      <div className="container-site">
        <div className="text-center mb-14">
          <p className="text-xs tracking-super-wide uppercase text-gold-400 mb-4 font-medium">Styled by You</p>
          <h2 className="heading-lg text-velvet-50">As Seen On</h2>
        </div>

        <div className="relative">
          {/* Scroll buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-velvet-800/80 text-velvet-300
                       hover:bg-velvet-700 hover:text-velvet-100 transition-all hidden md:flex items-center justify-center"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-velvet-800/80 text-velvet-300
                       hover:bg-velvet-700 hover:text-velvet-100 transition-all hidden md:flex items-center justify-center"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Scrollable strip */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none' }}
          >
            {ugcItems.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-[160px] md:w-[200px] snap-start"
              >
                <div className="relative aspect-[9/16] bg-velvet-800 rounded-sm overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-t from-velvet-900/80 via-transparent to-transparent flex items-center justify-center">
                    <span className="text-velvet-500 text-xs">JEWELRY</span>
                  </div>
                  {/* Caption overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-velvet-100 text-xs font-serif italic leading-snug">
                      "{item.caption}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile scroll hint */}
          <p className="text-center text-velvet-600 text-xs mt-4 md:hidden">Swipe to explore →</p>
        </div>
      </div>
    </section>
  )
}