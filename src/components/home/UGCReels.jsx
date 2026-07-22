import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { UGC_REELS } from "@/data/products"
import { makeStrkImageLoaderRef } from "@/components/ui/StrkImage"

export default function UGCReels() {
  const scrollerRef = useRef(null)

  const scroll = (dir) => {
    const el = scrollerRef.current
    if (!el) return
    const amount = el.clientWidth * 0.7
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" })
  }

  return (
    <section className="bg-espresso-800 py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-editorial px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
          <div>
            <p className="eyebrow text-gold-300">@velmora · #wornwithvelmora</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl text-cream-50">
              As <span className="italic">Worn</span> by You
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream-100/20 text-cream-100/80 hover:border-gold-300 hover:text-gold-300 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={1.4} />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream-100/20 text-cream-100/80 hover:border-gold-300 hover:text-gold-300 transition-colors"
            >
              <ChevronRight className="h-4 w-4" strokeWidth={1.4} />
            </button>
          </div>
        </div>
      </div>

      <div ref={makeStrkImageLoaderRef()} className="relative">
        <div
          ref={scrollerRef}
          className="no-scrollbar flex gap-3 md:gap-4 overflow-x-auto px-5 md:px-10 pb-2 snap-x snap-mandatory scroll-smooth"
        >
          {UGC_REELS.map((reel) => (
            <ReelCard key={reel.id} reel={reel} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ReelCard({ reel }) {
  return (
    <div className="relative flex-shrink-0 w-[55vw] sm:w-[220px] md:w-[240px] aspect-[9/16] overflow-hidden snap-start bg-espresso-700 group">
      <img
        data-strk-img-id={reel.imgId}
        data-strk-img={reel.imageQuery}
        data-strk-img-ratio="9x16"
        data-strk-img-width="480"
        alt={reel.caption}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 overlay-bottom" />
      <div className="absolute top-3 left-3 text-cream-100/90 text-[10px] uppercase tracking-widest2">
        @velmora · Reel
      </div>
      <p
        id={`ugc-caption-${reel.id}`}
        className="absolute bottom-4 left-4 right-4 font-serif italic text-cream-50 text-lg leading-snug text-balance"
      >
        {reel.caption}
      </p>
    </div>
  )
}
