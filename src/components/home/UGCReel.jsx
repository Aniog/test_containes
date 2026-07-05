import { useRef } from "react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { UGC_REELS } from "@/data/products"

export default function UGCReel() {
  const scrollRef = useRef(null)

  const scrollBy = (dir) => {
    const el = scrollRef.current
    if (!el) return
    const card = el.querySelector("[data-reel-card]")
    const amount = card ? card.clientWidth + 16 : 280
    el.scrollBy({ left: dir * amount, behavior: "smooth" })
  }

  return (
    <section className="bg-ink text-cream py-20 md:py-32">
      <div className="container-velmora mb-8 md:mb-12">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-3">@Velmora</p>
            <h2 className="display-headline text-3xl md:text-5xl text-cream">
              Worn by you
            </h2>
            <p className="text-sm md:text-base text-muted-dark font-light mt-3 max-w-md">
              Real moments, real gold. Tag <span className="text-gold">@velmora</span> to be
              featured.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Scroll left"
              className="h-10 w-10 border border-gold/30 text-cream hover:bg-gold hover:text-ink transition-colors flex items-center justify-center"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Scroll right"
              className="h-10 w-10 border border-gold/30 text-cream hover:bg-gold hover:text-ink transition-colors flex items-center justify-center"
            >
              <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="no-scrollbar flex gap-4 overflow-x-auto px-5 md:px-10 pb-6 snap-x snap-mandatory"
        style={{ scrollPaddingLeft: "1.25rem" }}
      >
        {/* spacer to align first card with container */}
        <div className="hidden md:block flex-shrink-0" style={{ width: "calc((100vw - 1280px) / 2)" }} />
        {UGC_REELS.map((reel) => (
          <article
            key={reel.id}
            data-reel-card
            className="relative flex-shrink-0 w-[220px] md:w-[260px] aspect-[9/16] overflow-hidden snap-start group cursor-pointer"
          >
            <img
              src={reel.illustration}
              alt={reel.caption}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-elegant group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />

            {/* Play indicator */}
            <div className="absolute top-4 right-4 h-8 w-8 border border-cream/40 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Play className="h-3 w-3 text-cream fill-cream" strokeWidth={0} />
            </div>

            {/* Caption */}
            <div className="absolute bottom-0 inset-x-0 p-4 md:p-5">
              <p className="font-serif text-2xl md:text-3xl text-cream leading-tight mb-1">
                {reel.caption}
              </p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-gold/90">
                {reel.handle}
              </p>
            </div>
          </article>
        ))}
        <div className="hidden md:block flex-shrink-0" style={{ width: "calc((100vw - 1280px) / 2)" }} />
      </div>
    </section>
  )
}
