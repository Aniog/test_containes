import { useEffect, useRef } from "react"
import { Play } from "lucide-react"
import { reels } from "@/data/products"
import SectionHeading from "@/components/home/SectionHeading"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function ReelStrip() {
  const scrollRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const scrollBy = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" })
  }

  return (
    <section ref={containerRef} className="bg-ink py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-5 md:px-8">
        <div className="flex items-end justify-between">
          <SectionHeading
            eyebrow="As Seen On You"
            title="Worn & Loved"
            subtitle="Real moments, real wear. Tag #Velmora to be featured."
            align="left"
            light
          />
          <div className="hidden gap-2 md:flex">
            <button
              onClick={() => scrollBy(-1)}
              className="flex h-10 w-10 items-center justify-center border border-ivory/30 text-ivory transition-colors hover:bg-ivory hover:text-ink"
              aria-label="Scroll left"
            >
              ‹
            </button>
            <button
              onClick={() => scrollBy(1)}
              className="flex h-10 w-10 items-center justify-center border border-ivory/30 text-ivory transition-colors hover:bg-ivory hover:text-ink"
              aria-label="Scroll right"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 md:px-8"
      >
        {reels.map((reel) => (
          <article
            key={reel.id}
            className="group relative aspect-[9/16] w-[260px] flex-shrink-0 snap-start overflow-hidden bg-ink-soft md:w-[300px]"
          >
            <img
              alt={reel.caption}
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.descId}] [${reel.titleId}] jewelry worn on ear neck vertical`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/20" />
            <div className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-ivory/20 backdrop-blur-sm">
              <Play className="h-4 w-4 fill-ivory text-ivory" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-4">
              <p id={reel.titleId} className="font-serif text-lg italic text-ivory">
                {reel.caption}
              </p>
              <p id={reel.descId} className="mt-1 text-xs text-ivory/70">
                {reel.handle}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
