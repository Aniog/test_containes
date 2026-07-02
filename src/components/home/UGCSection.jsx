import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const reels = [
  {
    id: 1,
    caption: 'Morning light with the Amber Lace drop earrings',
    gradient: 'from-amber-700/80 via-amber-600/60 to-rose-800/80',
  },
  {
    id: 2,
    caption: 'Golden Sphere Huggies — the everyday stack',
    gradient: 'from-yellow-700/80 via-amber-600/60 to-amber-900/80',
  },
  {
    id: 3,
    caption: 'Majestic Flora Nectar for date night',
    gradient: 'from-rose-800/80 via-amber-700/60 to-rose-900/80',
  },
  {
    id: 4,
    caption: 'Vivid Aura Jewels — one cuff, endless looks',
    gradient: 'from-stone-800/80 via-amber-700/60 to-stone-900/80',
  },
  {
    id: 5,
    caption: 'Royal Heirloom Set — her reaction says it all',
    gradient: 'from-amber-800/80 via-yellow-700/60 to-amber-950/80',
  },
  {
    id: 6,
    caption: 'Stacked & styled: The complete Velmora ear',
    gradient: 'from-amber-900/80 via-rose-800/60 to-amber-950/80',
  },
]

export default function UGCSection() {
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === 'left' ? -320 : 320,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="py-20 md:py-28 bg-velmora-ivory">
      <div className="page-container">
        <div className="flex items-end justify-between section-padding mb-10">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-velmora-text-muted mb-4">
              As Worn By You
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-velmora-text">
              Styled by the <br className="md:hidden" />
              Velmora Community
            </h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 border border-velmora-border rounded-full flex items-center justify-center text-velmora-text-secondary hover:text-velmora-text hover:border-velmora-text transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 border border-velmora-border rounded-full flex items-center justify-center text-velmora-text-secondary hover:text-velmora-text hover:border-velmora-text transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto px-6 md:px-12 lg:px-20 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="flex-shrink-0 w-[160px] md:w-[200px] aspect-[9/16] relative rounded-sm overflow-hidden snap-start group cursor-pointer"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${reel.gradient}`}
              />
              {/* Simulated jewelry shimmer */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-32 h-32 bg-white/30 rounded-full blur-2xl" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                <p className="text-white text-xs leading-relaxed font-serif italic">
                  &ldquo;{reel.caption}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}