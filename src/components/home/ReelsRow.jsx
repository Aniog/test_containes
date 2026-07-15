import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import StrkImage from "@/components/ui/StrkImage"
import { EDITORIAL } from "@/data/products"
import { cn } from "@/lib/utils"

export default function ReelsRow() {
  const trackRef = useRef(null)
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(true)

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const onScroll = () => {
      setShowLeft(el.scrollLeft > 8)
      setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8)
    }
    onScroll()
    el.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      el.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  const scrollBy = (dir) => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth * 0.7, behavior: "smooth" })
  }

  return (
    <section className="bg-night py-20 text-onNight md:py-28">
      <div className="container-content mb-10 flex flex-col items-start justify-between gap-4 md:mb-14 md:flex-row md:items-end">
        <div>
          <p className="eyebrow-gold">Worn by you · @velmora</p>
          <h2
            className="display-lg mt-3 text-onNight text-balance"
            style={{ fontSize: "clamp(36px, 4.5vw, 56px)" }}
          >
            In the golden hour.
          </h2>
        </div>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer noopener"
          className="text-[12px] font-semibold uppercase tracking-[0.22em] text-gold transition-opacity hover:opacity-80"
        >
          Follow on Instagram →
        </a>
      </div>

      <div className="relative">
        <div
          ref={trackRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-6 px-6 pb-4 md:gap-6 md:scroll-px-10 md:px-10 lg:scroll-px-16 lg:px-16"
        >
          {EDITORIAL.reels.map((reel, i) => (
            <ReelCard key={reel.id} reel={reel} index={i} />
          ))}
        </div>

        {/* Edge fades for editorial feel */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-night to-transparent md:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-night to-transparent md:w-20" />

        {/* Desktop arrows */}
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          aria-label="Scroll reels left"
          className={cn(
            "absolute left-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center border border-onNight/25 bg-night/60 text-onNight transition-all duration-300 ease-editorial hover:border-gold hover:text-gold md:flex",
            showLeft ? "opacity-100" : "pointer-events-none opacity-0",
          )}
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={1.4} />
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          aria-label="Scroll reels right"
          className={cn(
            "absolute right-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center border border-onNight/25 bg-night/60 text-onNight transition-all duration-300 ease-editorial hover:border-gold hover:text-gold md:flex",
            showRight ? "opacity-100" : "pointer-events-none opacity-0",
          )}
        >
          <ChevronRight className="h-5 w-5" strokeWidth={1.4} />
        </button>
      </div>
    </section>
  )
}

function ReelCard({ reel, index }) {
  return (
    <article className="relative aspect-[9/16] w-[60vw] flex-shrink-0 snap-start overflow-hidden sm:w-[260px] md:w-[280px]">
      <StrkImage
        id={`reel-${reel.id}`}
        query={`gold jewelry worn on ear or neck editorial portrait ${reel.caption}`}
        ratio="9x16"
        width={500}
        alt={`Velmora jewelry ${reel.caption}`}
        fallback="bg-nightSoft"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-night/0 via-night/0 to-night/80" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-gold">
          0{index + 1} · Velmora
        </p>
        <p
          id={reel.titleId}
          className="mt-2 font-serif text-2xl italic text-onNight"
        >
          {reel.caption}
        </p>
      </div>
    </article>
  )
}
