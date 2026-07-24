import React, { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const reels = [
  { id: "reel-1", caption: "Everyday gold" },
  { id: "reel-2", caption: "Soft light, bold shine" },
  { id: "reel-3", caption: "Layered moments" },
  { id: "reel-4", caption: "Gifted & kept" },
  { id: "reel-5", caption: "Fine, not flashy" },
  { id: "reel-6", caption: "Made to mix" },
]

export default function UGCReel() {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (!scrollRef.current) return
    const amount = direction === "left" ? -280 : 280
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" })
  }

  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-accent mb-3">
              @velmora
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-primary">
              Styled by You
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 border border-hairline rounded-sm hover:bg-muted transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 border border-hairline rounded-sm hover:bg-muted transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 snap-x snap-mandatory"
        >
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="relative shrink-0 w-[220px] md:w-[260px] aspect-[9/16] snap-start overflow-hidden rounded-sm group"
            >
              <img
                data-strk-img-id={`ugc-${reel.id}`}
                data-strk-img={`[reel-caption-${reel.id}] [ugc-section-title]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={reel.caption}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p
                  id={`reel-caption-${reel.id}`}
                  className="font-serif text-lg text-white leading-tight"
                >
                  {reel.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
  )
}
