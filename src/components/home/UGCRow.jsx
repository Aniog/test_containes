import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const ugcItems = [
  { caption: 'Golden hour with Golden Spheres', handle: '@sarah.m' },
  { caption: 'Everyday stack — never taking these off', handle: '@jessicat' },
  { caption: 'New season, new heirlooms', handle: '@michellew' },
  { caption: 'The perfect gift moment', handle: '@amara.k' },
  { caption: 'Sunday best with Velmora', handle: '@priyam' },
  { caption: 'Huggies that go with everything', handle: '@simonel' },
  { caption: 'Date night sparkle', handle: '@elenar' },
  { caption: 'My Velmora collection grows', handle: '@lianaw' },
]

export default function UGCRow() {
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: dir * 300, behavior: 'smooth' })
  }

  return (
    <section className="py-24 bg-velvet-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[11px] tracking-widest-plus uppercase text-gold-600 mb-3 font-medium">
              As Seen On
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-deep font-medium">
              Worn by You
            </h2>
          </div>

          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll(-1)}
              className="w-9 h-9 border border-velvet-300 flex items-center justify-center hover:border-deep transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-9 h-9 border border-velvet-300 flex items-center justify-center hover:border-deep transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 px-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none' }}
      >
        {ugcItems.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[180px] md:w-[220px] snap-start"
          >
            <div className="aspect-[9/16] bg-velvet-200 relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs text-velvet-400 font-serif italic">
                  UGC Image
                </span>
              </div>
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-xs font-serif leading-snug mb-1">
                  {item.caption}
                </p>
                <p className="text-white/60 text-[10px]">{item.handle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}