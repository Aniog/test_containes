import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const reels = [
  { id: 1, caption: 'Everyday gold', label: 'ear cuff stack' },
  { id: 2, caption: 'Date night ready', label: 'floral necklace' },
  { id: 3, caption: 'Minimal moments', label: 'dome huggies' },
  { id: 4, caption: 'Soft glow', label: 'filigree drops' },
  { id: 5, caption: 'Gift of gold', label: 'heirloom set' },
  { id: 6, caption: 'Stacked style', label: 'layered look' },
  { id: 7, caption: 'Morning light', label: ' delicate gold' },
]

export default function UGCReels() {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction * 260, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
        <div className="flex items-end justify-between mb-8 md:mb-12">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">Styled by You</h2>
            <p className="mt-2 font-sans text-sm text-muted">@velmorajewelry</p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll(-1)}
              className="p-2 border border-divider hover:border-foreground transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll(1)}
              className="p-2 border border-divider hover:border-foreground transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal scroll row */}
      <div
        ref={scrollRef}
        className="flex gap-3 md:gap-4 overflow-x-auto hide-scrollbar px-5 md:px-10 lg:px-16"
      >
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-[180px] md:w-[220px] aspect-[9/16] bg-surface-warm overflow-hidden group cursor-pointer"
          >
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.caption}
              data-strk-img-id={`ugc-reel-${reel.id}`}
              data-strk-img={`[ugc-label-${reel.id}] [ugc-caption-${reel.id}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p
                id={`ugc-caption-${reel.id}`}
                className="font-serif text-white text-sm italic leading-snug"
              >
                {reel.caption}
              </p>
              <p
                id={`ugc-label-${reel.id}`}
                className="font-sans text-[10px] uppercase tracking-[0.12em] text-white/70 mt-1"
              >
                {reel.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
