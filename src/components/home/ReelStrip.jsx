import React, { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { reels } from "@/data/content"
import { cn } from "@/lib/utils"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function ReelStrip() {
  React.useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, document.body)
  }, [])

  const trackRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateButtons = () => {
    const el = trackRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 4)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
  }

  useEffect(() => {
    updateButtons()
    const el = trackRef.current
    if (!el) return undefined
    el.addEventListener("scroll", updateButtons, { passive: true })
    window.addEventListener("resize", updateButtons)
    return () => {
      el.removeEventListener("scroll", updateButtons)
      window.removeEventListener("resize", updateButtons)
    }
  }, [])

  const scrollBy = (dir) => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" })
  }

  return (
    <section
      id="home-reels"
      className="bg-bone-soft py-20 md:py-28 lg:py-32 border-y border-line"
    >
      <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
          <div>
            <p className="text-[10px] md:text-[11px] tracking-widest3 uppercase text-champagne-deep mb-3">
              From the Community
            </p>
            <h2
              id="home-reels-title"
              className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink tracking-tight"
            >
              Worn by you
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              aria-label="Scroll reels left"
              onClick={() => scrollBy(-1)}
              disabled={!canScrollLeft}
              className={cn(
                "w-11 h-11 inline-flex items-center justify-center border border-line rounded-full transition-colors duration-300",
                canScrollLeft
                  ? "text-ink hover:bg-ink hover:text-bone hover:border-ink"
                  : "text-muted/40 cursor-not-allowed"
              )}
            >
              <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label="Scroll reels right"
              onClick={() => scrollBy(1)}
              disabled={!canScrollRight}
              className={cn(
                "w-11 h-11 inline-flex items-center justify-center border border-line rounded-full transition-colors duration-300",
                canScrollRight
                  ? "text-ink hover:bg-ink hover:text-bone hover:border-ink"
                  : "text-muted/40 cursor-not-allowed"
              )}
            >
              <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        className="reel-scroll flex gap-4 md:gap-6 overflow-x-auto px-5 md:px-8 lg:px-12 pb-2 snap-x snap-mandatory"
      >
        {reels.map((r) => (
          <article
            key={r.id}
            className="shrink-0 w-[68vw] sm:w-[280px] md:w-[260px] aspect-[9/16] relative overflow-hidden snap-start group"
          >
            <img
              alt={r.caption}
              data-strk-img-id={r.img.id}
              data-strk-img={r.img.query}
              data-strk-img-ratio={r.img.ratio}
              data-strk-img-width={r.img.width}
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out-soft group-hover:scale-[1.03]"
              loading="lazy"
            />
            {/* Subtle gradient for legibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/70" />
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 text-bone">
              <p className="font-serif text-lg md:text-xl leading-snug">
                {r.caption}
              </p>
              <p className="mt-2 text-[10px] tracking-widest3 uppercase text-bone/70">
                {r.handle}
              </p>
            </div>
          </article>
        ))}
        <div className="shrink-0 w-1 md:w-2" aria-hidden="true" />
      </div>
    </section>
  )
}
