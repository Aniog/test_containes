import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useReveal } from "@/hooks/useReveal"
import { UGC_REELS } from "@/data/products"
import { cn } from "@/lib/utils"
import StockImage from "@/components/ui/StockImage"

export default function UGCReel() {
  const [ref, inView] = useReveal({ threshold: 0.1 })
  const scrollerRef = useRef(null)

  const scrollBy = (dir) => {
    const el = scrollerRef.current
    if (!el) return
    const step = el.clientWidth * 0.8
    el.scrollBy({ left: dir * step, behavior: "smooth" })
  }

  return (
    <section ref={ref} className="py-20 md:py-24 bg-ink text-bone" aria-labelledby="ugc-heading">
      <div className="container-editorial">
        <header className="flex items-end justify-between gap-4 mb-10 md:mb-12">
          <div className={cn("transition-all duration-700", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3")}>
            <p className="eyebrow-gold mb-3 text-bone/60">From the Community</p>
            <h2 id="ugc-heading" className="font-serif text-4xl sm:text-5xl text-bone font-light tracking-tight">
              Worn by you
            </h2>
            <p className="mt-3 text-bone/65 max-w-md text-sm sm:text-base font-sans">
              Real customers, real light, real outfits. Tag <span className="text-bone">@velmora</span> to be featured.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              className="h-11 w-11 inline-flex items-center justify-center rounded-full border border-bone/20 text-bone hover:border-bone hover:bg-bone/5 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} strokeWidth={1.4} />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              className="h-11 w-11 inline-flex items-center justify-center rounded-full border border-bone/20 text-bone hover:border-bone hover:bg-bone/5 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} strokeWidth={1.4} />
            </button>
          </div>
        </header>
      </div>

      <div
        ref={scrollerRef}
        className="no-scrollbar overflow-x-auto scroll-smooth"
        style={{ scrollSnapType: "x mandatory" }}
      >
        <ul className="flex gap-4 sm:gap-5 px-5 sm:px-8 lg:px-12 pb-4">
          {UGC_REELS.map((reel, i) => (
            <li
              key={reel.id}
              className={cn(
                "relative flex-shrink-0 w-[55vw] sm:w-[230px] md:w-[240px] aspect-[9/16] rounded-sm overflow-hidden bg-bone-2 transition-all duration-700",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              )}
              style={{
                transitionDelay: inView ? `${i * 70}ms` : "0ms",
                scrollSnapAlign: "start",
              }}
            >
              <StockImage
                imgId={reel.imgId}
                query={`[${reel.captionId}] customer wearing gold jewelry on ear or neck`}
                ratio="9x16"
                width={600}
                alt={reel.caption}
                className="absolute inset-0 w-full h-full"
                imgClassName="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(27,24,21,0) 40%, rgba(27,24,21,0.7) 100%)",
                }}
                aria-hidden="true"
              />
              <p
                id={reel.captionId}
                className="absolute left-0 right-0 bottom-0 p-4 font-serif italic text-bone text-base sm:text-lg leading-snug"
              >
                {reel.caption}
              </p>
            </li>
          ))}
          <li className="flex-shrink-0 w-1" aria-hidden="true" />
        </ul>
      </div>
    </section>
  )
}
