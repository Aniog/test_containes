import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import StockImage from "@/components/StockImage"
import { ugcReels } from "@/data/products"
import { useReveal } from "@/hooks/useReveal"

export default function ReelsRow() {
  const scrollerRef = useRef(null)
  const headerRef = useReveal()

  const scroll = (dir) => {
    const el = scrollerRef.current
    if (!el) return
    const card = el.querySelector("[data-reel-card]")
    const step = card ? card.clientWidth + 16 : el.clientWidth * 0.7
    el.scrollBy({ left: dir === "right" ? step : -step, behavior: "smooth" })
  }

  return (
    <section className="bg-ivory-200/60 py-20 sm:py-28">
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 lg:px-12">
        <div
          ref={headerRef}
          className="reveal flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 sm:mb-14"
        >
          <div>
            <p className="eyebrow mb-3">Worn by you</p>
            <h2 className="display-lg font-serif">In the wild</h2>
            <p className="mt-4 text-sm sm:text-base text-taupe-600 max-w-md font-light leading-relaxed">
              Real moments, real light. Tag <span className="text-espresso-800">@velmora</span> to be featured.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              aria-label="Scroll left"
              onClick={() => scroll("left")}
              className="w-11 h-11 grid place-items-center border border-line text-espresso-800 hover:bg-espresso-800 hover:text-ivory transition-all"
            >
              <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label="Scroll right"
              onClick={() => scroll("right")}
              className="w-11 h-11 grid place-items-center border border-line text-espresso-800 hover:bg-espresso-800 hover:text-ivory transition-all"
            >
              <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Edge-to-edge horizontal scroller */}
      <div
        ref={scrollerRef}
        className="no-scrollbar overflow-x-auto scroll-smooth"
      >
        <ul className="flex gap-4 px-5 sm:px-8 lg:px-12 pb-4 snap-x snap-mandatory">
          {ugcReels.map((reel, idx) => (
            <li
              key={reel.id}
              data-reel-card
              className="snap-start flex-shrink-0 w-[68vw] sm:w-[280px] aspect-[9/16] relative overflow-hidden bg-espresso-700 group"
            >
              <StockImage
                id={`reel-${reel.id}-${idx}`}
                query={reel.query}
                ratio="3x4"
                width="800"
                alt={reel.caption}
                className="absolute inset-0"
                imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle gradient */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(31,22,18,0.0) 50%, rgba(31,22,18,0.7) 100%)",
                }}
              />
              {/* Caption overlay */}
              <div className="absolute inset-x-0 bottom-0 p-5 text-ivory">
                <p className="font-serif italic text-2xl leading-snug drop-shadow">
                  {reel.caption}
                </p>
                <p className="mt-2 text-[10px] tracking-[0.25em] uppercase text-ivory-200/85">
                  {reel.handle}
                </p>
              </div>
              {/* Play indicator (decorative) */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-ivory/20 backdrop-blur-sm grid place-items-center">
                <div className="w-0 h-0 border-y-[6px] border-y-transparent border-l-[10px] border-l-ivory ml-0.5" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
