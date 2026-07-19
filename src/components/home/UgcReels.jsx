import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { ugcItems } from "@/data/products"
import { Play } from "lucide-react"

export default function UgcReels() {
  const containerRef = useRef(null)
  const scrollerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const scroll = (dir) => {
    const el = scrollerRef.current
    if (!el) return
    el.scrollBy({ left: dir * 280, behavior: "smooth" })
  }

  return (
    <section
      ref={containerRef}
      className="bg-bone py-20 md:py-28"
      aria-labelledby="homepage-ugc-title"
    >
      <div className="container-x">
        <div className="flex items-end justify-between mb-10 md:mb-12">
          <div>
            <p className="label-2 text-mist mb-3">Worn by you</p>
            <h2
              id="homepage-ugc-title"
              className="font-serif text-3xl md:text-5xl text-ink leading-tight max-w-xl"
            >
              Real ways our community wears Velmora.
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll(-1)}
              className="w-10 h-10 border border-hairline text-ink hover:bg-ink hover:text-cream transition-colors flex items-center justify-center"
              aria-label="Scroll reels left"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
                aria-hidden="true"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              className="w-10 h-10 border border-hairline text-ink hover:bg-ink hover:text-cream transition-colors flex items-center justify-center"
              aria-label="Scroll reels right"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
                aria-hidden="true"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="flex gap-4 md:gap-5 overflow-x-auto no-scrollbar px-5 md:px-8 lg:px-12 pb-2 snap-x snap-mandatory"
      >
        {ugcItems.map((item) => (
          <article
            key={item.id}
            className="relative flex-shrink-0 w-[200px] md:w-[240px] aspect-[9/16] bg-ink overflow-hidden snap-start"
          >
            <div
              data-strk-bg-id={`${item.id}-img`}
              data-strk-bg={item.query}
              data-strk-bg-ratio="9x16"
              data-strk-bg-width="480"
              className="absolute inset-0"
            />
            {/* Dim overlay for legibility */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(22,19,17,0) 30%, rgba(22,19,17,0.75) 100%)",
              }}
              aria-hidden="true"
            />
            {/* Top play hint */}
            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-cream/90 text-ink flex items-center justify-center">
              <Play className="w-3.5 h-3.5 fill-ink" strokeWidth={1.5} />
            </div>
            {/* Bottom caption */}
            <div className="absolute inset-x-0 bottom-0 p-4 text-cream">
              <p
                id={`ugc-caption-${item.id.split("-")[1]}`}
                className="font-serif text-lg leading-snug mb-1"
              >
                {item.caption}
              </p>
              <p className="label-2 text-cream/70">{item.handle}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
