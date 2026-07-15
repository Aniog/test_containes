import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { reels } from "@/data/products"
import { useStrkImages } from "@/components/ui/StrkImage"

export default function ReelsStrip() {
  const ref = useStrkImages([])
  const scrollerRef = useRef(null)

  const scrollBy = (dir) => {
    const el = scrollerRef.current
    if (!el) return
    el.scrollBy({ left: dir * 320, behavior: "smooth" })
  }

  return (
    <section ref={ref} className="py-20 md:py-28 bg-cream-deep/50">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs uppercase tracking-widest3 text-gold mb-3">As Seen On You</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink font-light">
              Worn & Loved
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Scroll left"
              className="w-10 h-10 rounded-full border border-sand text-ink hover:bg-ink hover:text-cream transition-colors flex items-center justify-center"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Scroll right"
              className="w-10 h-10 rounded-full border border-sand text-ink hover:bg-ink hover:text-cream transition-colors flex items-center justify-center"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="no-scrollbar flex gap-4 md:gap-6 overflow-x-auto px-6 md:px-10 pb-2 snap-x snap-mandatory"
      >
        {/* leading spacer to align with max-w-content */}
        <div className="shrink-0 w-[max(0px,calc((100vw-80rem)/2-2.5rem))]" />
        {reels.map((reel) => (
          <article
            key={reel.id}
            className="relative shrink-0 w-[260px] md:w-[300px] aspect-[9x16] overflow-hidden snap-start group"
          >
            <img
              alt={reel.caption}
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.titleId}] gold jewelry worn on ear neck editorial vertical`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <p
              id={reel.titleId}
              className="absolute bottom-0 inset-x-0 p-5 font-serif text-cream text-lg leading-snug italic"
            >
              {reel.caption}
            </p>
          </article>
        ))}
        <div className="shrink-0 w-4" />
      </div>
    </section>
  )
}
