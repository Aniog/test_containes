import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const reels = [
  { id: 1, caption: 'Golden hour with the Vivid Aura cuff', bg: 'linear-gradient(135deg, #c9a87c, #b8956a)' },
  { id: 2, caption: 'Stacked & styled: Sphere Huggies', bg: 'linear-gradient(135deg, #d4b896, #c9a97a)' },
  { id: 3, caption: 'Majestic Flora in full bloom', bg: 'linear-gradient(135deg, #bfa384, #a78b6c)' },
  { id: 4, caption: 'The everyday edit', bg: 'linear-gradient(135deg, #d9c2a8, #c4a884)' },
  { id: 5, caption: 'Amber Lace for date night', bg: 'linear-gradient(135deg, #ccad8b, #b8926a)' },
]

export default function UGCStrip() {
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: dir * 280, behavior: 'smooth' })
  }

  return (
    <section className="py-16 md:py-24 bg-velvet-50">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <h2 className="section-title text-center mb-2">As Seen On You</h2>
        <p className="text-center text-velvet-500 text-sm mb-10 font-sans">Tag @velmora to be featured</p>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4 -mx-5 px-5 md:-mx-10 md:px-10"
          >
            {reels.map((reel) => (
              <div
                key={reel.id}
                className="flex-shrink-0 w-[180px] md:w-[220px] aspect-[9/16] rounded-sm overflow-hidden relative group cursor-pointer"
                style={{ background: reel.bg }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-velvet-950/60 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 font-serif text-sm text-cream italic leading-snug">
                  {reel.caption}
                </p>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border-2 border-cream/80 flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[10px] border-l-cream border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-0.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 bg-cream shadow-md rounded-full flex items-center justify-center text-velvet-700 hover:text-gold-600 transition-colors hidden md:flex -ml-4"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 bg-cream shadow-md rounded-full flex items-center justify-center text-velvet-700 hover:text-gold-600 transition-colors hidden md:flex -mr-4"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}