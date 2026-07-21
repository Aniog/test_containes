import React, { useEffect, useRef } from "react"
import { reels } from "@/data/products"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { useReveal } from "@/hooks/useReveal"


export default function ReelsStrip() {
  const containerRef = useRef(null)
  const { ref, visible } = useReveal()

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={containerRef} className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? "is-visible" : ""} flex flex-col items-center text-center md:flex-row md:items-end md:justify-between md:text-left`}
        >
          <div>
            <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold">
              As Worn
            </p>
            <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
              On the Ear, On the Neck
            </h2>
          </div>
          <p className="mt-4 max-w-sm font-sans text-sm text-muted md:mt-0">
            Real moments, real wear. Tag <span className="text-gold">@velmora</span> to be featured.
          </p>
        </div>
      </div>

      {/* Horizontal scroll of 9:16 cards */}
      <div className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 sm:px-8">
        {reels.map((reel) => (
          <article
            key={reel.id}
            className="group relative aspect-[9/16] w-[230px] shrink-0 snap-start overflow-hidden bg-sand/40 sm:w-[260px]"
          >
            <img
              alt={reel.caption}
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.titleId}] gold jewelry worn editorial warm`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/10 to-transparent" />
            <p
              id={reel.titleId}
              className="absolute bottom-5 left-5 right-5 font-serif text-lg italic leading-snug text-cream"
            >
              {reel.caption}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
