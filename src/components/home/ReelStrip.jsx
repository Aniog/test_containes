import { useRef } from "react"
import { reels } from "@/data/products"
import { useStrkImages } from "@/hooks/useStrkImages"

export default function ReelStrip() {
  const containerRef = useStrkImages([])
  const scrollRef = useRef(null)

  return (
    <section ref={containerRef} className="bg-ink py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-center text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-champagne">
            As Worn
          </p>
          <h2 className="mt-3 font-serif text-3xl text-cream md:text-4xl">
            Styled by You
          </h2>
          <div className="mt-5 h-px w-12 bg-champagne" />
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div
        ref={scrollRef}
        className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:px-8"
      >
        {reels.map((reel) => (
          <article
            key={reel.id}
            className="relative aspect-[9/16] w-[230px] shrink-0 snap-start overflow-hidden bg-stone/30 md:w-[260px]"
          >
            <img
              alt={reel.caption}
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.titleId}] gold jewelry worn`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            <p
              id={reel.titleId}
              className="absolute bottom-5 left-5 right-5 font-serif text-lg italic text-cream"
            >
              {reel.caption}
            </p>
          </article>
        ))}
      </div>

      <p className="mt-6 text-center text-xs uppercase tracking-[0.2em] text-stone">
        @velmora · Swipe →
      </p>
    </section>
  )
}
