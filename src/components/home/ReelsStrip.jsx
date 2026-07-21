import React, { useRef } from "react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import SectionHeading from "@/components/SectionHeading"
import { StockImage } from "@/components/StockImage"
import { REELS } from "@/data/products"

export default function ReelsStrip() {
  const scrollerRef = useRef(null)

  const scrollBy = (dir) => {
    scrollerRef.current?.scrollBy({ left: dir * 260, behavior: "smooth" })
  }

  return (
    <section className="border-y border-line bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex items-end justify-between gap-6">
          <SectionHeading
            align="left"
            eyebrow="As Worn By You"
            title="#VelmoraMuse"
            sub="Real moments from our community — tag us to be featured."
          />
          <div className="hidden gap-2 md:flex">
            <button
              type="button"
              aria-label="Scroll reels left"
              onClick={() => scrollBy(-1)}
              className="flex h-11 w-11 items-center justify-center border border-foreground/20 text-foreground transition-colors hover:border-foreground"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label="Scroll reels right"
              onClick={() => scrollBy(1)}
              className="flex h-11 w-11 items-center justify-center border border-foreground/20 text-foreground transition-colors hover:border-foreground"
            >
              <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="no-scrollbar -mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:-mx-8 md:mt-12 md:px-8"
        >
          {REELS.map((reel) => (
            <figure
              key={reel.id}
              className="group relative aspect-[9/16] w-[190px] shrink-0 snap-start overflow-hidden bg-ink md:w-[230px]"
            >
              <StockImage
                imgId={`reel-${reel.id}-7d2f`}
                query={`${reel.caption} woman wearing fine gold jewelry close up ear neck warm golden hour light editorial vertical`}
                ratio="9x16"
                width={480}
                alt={reel.caption}
                className="opacity-95 transition-transform duration-700 ease-luxe group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-ink/10" />
              <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-ink/35 backdrop-blur-sm">
                <Play className="h-3.5 w-3.5 fill-[#F7F1E5] text-[#F7F1E5]" />
              </span>
              <figcaption className="absolute inset-x-0 bottom-0 p-4">
                <p className="font-serif text-lg italic leading-snug text-[#F7F1E5]">
                  {reel.caption}
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#C9BBA2]">
                  {reel.handle}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
