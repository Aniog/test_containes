import { useRef } from "react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { ProductImage } from "@/lib/imagery"

const REELS = [
  { id: "ugc-ear",       handle: "@noor.styles",   caption: "The everyday stack" },
  { id: "ugc-necklace",  handle: "@amelia.earrings", caption: "Layered, never loud" },
  { id: "ugc-huggies",   handle: "@sienna.knot",   caption: "Sundays in gold" },
  { id: "ugc-flora",     handle: "@marielle.co",   caption: "Heirloom in waiting" },
  { id: "ugc-filigree",  handle: "@thevelvet.edit", caption: "Lace, in metal" },
  { id: "ugc-set",       handle: "@june.manifesto", caption: "The gift that lands" },
]

export function UGCReel() {
  const scrollerRef = useRef(null)

  const scroll = (dir) => {
    const el = scrollerRef.current
    if (!el) return
    el.scrollBy({ left: dir * 360, behavior: "smooth" })
  }

  return (
    <section className="py-20 md:py-28 bg-cocoa text-bone">
      <div className="max-w-editorial mx-auto px-6 md:px-10 lg:px-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <div className="flex flex-col gap-3">
            <span className="eyebrow text-gold-100">@velmora.fine</span>
            <h2 className="editorial-heading text-4xl md:text-5xl lg:text-6xl text-bone max-w-xl">
              Worn by the women who find us
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Scroll left"
              onClick={() => scroll(-1)}
              className="w-11 h-11 inline-flex items-center justify-center border border-bone/30 hover:border-gold-100 hover:text-gold-100 transition-colors"
            >
              <ChevronLeft size={18} strokeWidth={1.4} />
            </button>
            <button
              type="button"
              aria-label="Scroll right"
              onClick={() => scroll(1)}
              className="w-11 h-11 inline-flex items-center justify-center border border-bone/30 hover:border-gold-100 hover:text-gold-100 transition-colors"
            >
              <ChevronRight size={18} strokeWidth={1.4} />
            </button>
          </div>
        </div>
      </div>

      {/* Edge-to-edge horizontal scroller */}
      <div
        ref={scrollerRef}
        className="no-scrollbar overflow-x-auto scroll-smooth"
        style={{ scrollSnapType: "x mandatory" }}
      >
        <ul className="flex gap-4 md:gap-5 px-6 md:px-10 lg:px-14 pb-2">
          {REELS.map((reel) => (
            <li
              key={reel.id}
              className="relative flex-shrink-0 w-[240px] md:w-[280px] aspect-[9/16] overflow-hidden bg-cocoa-200 group cursor-pointer"
              style={{ scrollSnapAlign: "start" }}
            >
              <ProductImage id={reel.id} name={reel.caption} className="w-full h-full transition-transform duration-700 group-hover:scale-105" />
              {/* Top: handle */}
              <div className="absolute top-4 left-4 right-4 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-gold-100/90 flex items-center justify-center text-cocoa font-serif text-xs font-medium">
                  {reel.handle[1].toUpperCase()}
                </span>
                <span className="eyebrow text-bone/90">{reel.handle}</span>
              </div>
              {/* Center play chip */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="w-14 h-14 rounded-full bg-bone/95 flex items-center justify-center text-cocoa">
                  <Play size={18} strokeWidth={1.4} className="ml-0.5" />
                </span>
              </div>
              {/* Bottom caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-cocoa/80 to-transparent">
                <p className="font-serif italic text-2xl text-bone leading-tight">
                  {reel.caption}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
