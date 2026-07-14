import { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { ugcReels } from "@/data/products"
import { StockImage } from "@/components/ui/StockImage"

export function ReelStrip() {
  const containerRef = useRef(null)
  const scrollerRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [location.pathname])

  const handleScroll = (dir) => {
    const el = scrollerRef.current
    if (!el) return
    const step = el.clientWidth * 0.6 * dir
    el.scrollBy({ left: step, behavior: "smooth" })
  }

  return (
    <section
      ref={containerRef}
      id="reels"
      className="bg-ivory-200/60 py-20 md:py-28"
      aria-labelledby="reels-title"
    >
      <div className="container-x mb-10 flex items-end justify-between gap-6 md:mb-14">
        <div>
          <p className="eyebrow">@VelmoraDaily</p>
          <h2
            id="reels-title"
            className="mt-3 font-serif text-4xl text-ink-500 sm:text-5xl"
          >
            Worn by you
          </h2>
        </div>
        <div className="hidden gap-2 md:flex">
          <button
            type="button"
            onClick={() => handleScroll(-1)}
            aria-label="Scroll reels left"
            className="flex h-11 w-11 items-center justify-center border border-ink-500/30 text-ink-500 transition-colors duration-300 hover:border-ink-500 hover:text-ink-500"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18l-6-6 6-6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => handleScroll(1)}
            aria-label="Scroll reels right"
            className="flex h-11 w-11 items-center justify-center border border-ink-500/30 text-ink-500 transition-colors duration-300 hover:border-ink-500 hover:text-ink-500"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="no-scrollbar flex gap-4 overflow-x-auto px-5 pb-2 sm:gap-5 sm:px-8 md:gap-6 md:px-12"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {ugcReels.map((reel) => (
          <article
            key={reel.id}
            className="group relative flex-shrink-0 overflow-hidden bg-ink-600"
            style={{
              width: "min(72vw, 240px)",
              aspectRatio: "9 / 16",
              scrollSnapAlign: "start",
            }}
          >
            <StockImage
              imgId={reel.imgId}
              query={`reel-caption-${reel.id} reel-handle-${reel.id}`}
              ratio="9x16"
              width="500"
              alt={`${reel.handle} on Velmora`}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-elegant group-hover:scale-[1.03]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-b from-ink-700/10 via-transparent to-ink-700/75"
            />
            <div className="absolute inset-x-0 bottom-0 p-5 text-ivory-50">
              <p
                id={`reel-caption-${reel.id}`}
                className="font-serif text-[20px] leading-snug"
              >
                {reel.caption}
              </p>
              <p
                id={`reel-handle-${reel.id}`}
                className="mt-2 text-[10px] font-semibold uppercase tracking-wider2 text-ivory-50/70"
              >
                {reel.handle}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
