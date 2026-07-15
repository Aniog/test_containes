import { useEffect, useRef } from "react"
import { REELS } from "@/data/products"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { useReveal } from "@/lib/useReveal"

export default function ReelsRow() {
  const containerRef = useRef(null)
  const scrollRef = useRef(null)
  useReveal(containerRef, [])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const scrollBy = (dir) => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir * 280, behavior: "smooth" })
  }

  return (
    <section ref={containerRef} className="bg-sand py-20 sm:py-24 lg:py-28 border-y border-taupe-300/40">
      <div className="container-editorial">
        <div className="reveal flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10">
          <div>
            <p className="eyebrow">@Velmora · Worn By You</p>
            <h2 className="font-serif text-[32px] sm:text-[44px] lg:text-[52px] mt-3 text-espresso">
              Worn In The Wild
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Scroll left"
              className="w-10 h-10 grid place-items-center border border-taupe-300 text-espresso hover:border-gold-500 hover:text-gold-600 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Scroll right"
              className="w-10 h-10 grid place-items-center border border-taupe-300 text-espresso hover:border-gold-500 hover:text-gold-600 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Full-bleed scroll */}
      <div
        ref={scrollRef}
        className="no-scrollbar flex gap-3 sm:gap-4 overflow-x-auto scroll-smooth pl-5 sm:pl-8 lg:pl-12 pr-5 sm:pr-8 lg:pr-12"
      >
        {REELS.map((reel, i) => (
          <ReelCard key={reel.id} reel={reel} index={i} />
        ))}
        <div className="flex-shrink-0 w-1" />
      </div>
    </section>
  )
}

function ReelCard({ reel, index }) {
  const handle = reel.handle || "@velmora"
  return (
    <div
      className="reveal flex-shrink-0 relative w-[180px] sm:w-[220px] lg:w-[240px] aspect-[9/16] overflow-hidden bg-espresso group cursor-pointer"
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <img
        data-strk-img-id={reel.imgId}
        data-strk-img={`[${reel.caption}] [velmora reels jewelry]`}
        data-strk-img-ratio="9x16"
        data-strk-img-width="500"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={reel.caption}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.04]"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(26,18,8,0) 30%, rgba(26,18,8,0.05) 55%, rgba(26,18,8,0.75) 100%)",
        }}
      />
      {/* Reel indicator */}
      <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 bg-espresso/40 backdrop-blur-sm rounded-full">
        <span className="w-1.5 h-1.5 bg-cream rounded-full" />
        <span className="text-[9px] uppercase tracking-wider-2 text-cream font-medium">Reel</span>
      </div>
      {/* Caption */}
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <p
          className="font-serif text-[20px] sm:text-[24px] lg:text-[26px] text-cream leading-tight italic"
        >
          {reel.caption}
        </p>
        <p className="mt-2 text-[10px] uppercase tracking-wider-2 text-cream/75">
          {handle}
        </p>
      </div>
    </div>
  )
}
