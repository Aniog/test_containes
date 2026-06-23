import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ugcItems } from '@/data/products'

export default function UGCRow() {
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir * 300,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="bg-velvet-950 py-20 md:py-28">
      <div className="text-center mb-12">
        <p className="font-sans text-[10px] tracking-[0.35em] text-cream-400 uppercase mb-3">
          As Seen On
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-cream-50 font-medium tracking-tight">
          Styled by You
        </h2>
        <div className="hairline-divider w-16 mx-auto mt-6 opacity-30" />
      </div>

      <div className="relative max-w-[1440px] mx-auto">
        <button
          onClick={() => scroll(-1)}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-cream-50/10 backdrop-blur flex items-center justify-center text-cream-300 hover:bg-cream-50/20 transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} strokeWidth={1} />
        </button>
        <button
          onClick={() => scroll(1)}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-cream-50/10 backdrop-blur flex items-center justify-center text-cream-300 hover:bg-cream-50/20 transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight size={20} strokeWidth={1} />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 px-6 md:px-12 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        >
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[200px] md:w-[220px] aspect-[9/16] relative group snap-start cursor-pointer overflow-hidden"
            >
              <div
                className="absolute inset-0"
                style={{ backgroundColor: item.hex }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velvet-950/70 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 font-serif italic text-sm text-cream-200 leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {item.caption}
              </p>
              {/* Instagram-style icon */}
              <span className="absolute top-3 right-3 text-[10px] font-sans tracking-widest text-cream-400/60">
                @VELMORA
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
