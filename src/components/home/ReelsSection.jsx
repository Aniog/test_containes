import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ugcReels } from '@/data/products'

export default function ReelsSection() {
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    if (!scrollRef.current) return
    const amount = 280
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  return (
    <section className="bg-velmora-cream/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-10 flex items-end justify-between md:mb-12">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-velmora-gold">
              @velmorajewelry
            </p>
            <h2 className="font-serif text-3xl font-light tracking-wide text-velmora-espresso md:text-4xl">
              Styled by You
            </h2>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <button
              onClick={() => scroll('left')}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-velmora-sand/50 text-velmora-warm-gray transition-colors hover:border-velmora-espresso hover:text-velmora-espresso"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-velmora-sand/50 text-velmora-warm-gray transition-colors hover:border-velmora-espresso hover:text-velmora-espresso"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-5 pb-4 scrollbar-hide md:px-8"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcReels.map((reel) => (
          <div
            key={reel.id}
            className="relative h-[380px] w-[240px] flex-shrink-0 overflow-hidden rounded-lg md:h-[440px] md:w-[280px]"
          >
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'%3E%3Crect fill='%233D3228' width='9' height='16'/%3E%3Ccircle cx='3' cy='6' r='1.5' fill='%23B8935F' opacity='0.4'/%3E%3Ccircle cx='6' cy='10' r='1' fill='%23C9A876' opacity='0.3'/%3E%3C/svg%3E")`,
              }}
            />
            <div className="absolute inset-0 bg-velmora-charcoal/20" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="font-serif text-lg font-medium italic text-white drop-shadow-md">
                {reel.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
