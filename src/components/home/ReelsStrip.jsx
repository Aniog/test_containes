import React from "react"
import { REELS } from "@/data/products"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function ReelsStrip() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-stone mb-3">
              As Worn By You
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-espresso">
              #VelmoraMoments
            </h2>
          </div>
          <p className="hidden md:block text-sm text-stone max-w-xs">
            Tag us @velmora to be featured. Real pieces, real wear.
          </p>
        </div>
      </div>

      <div className="no-scrollbar overflow-x-auto pb-4">
        <div className="flex gap-4 md:gap-5 px-5 md:px-8 snap-x">
          {REELS.map((reel) => (
            <article
              key={reel.id}
              className="relative shrink-0 w-[68vw] sm:w-[300px] aspect-[9/16] bg-espresso overflow-hidden snap-start group"
            >
              <img
                alt={reel.caption}
                data-strk-img-id={reel.imgId}
                data-strk-img={reel.q}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src={PLACEHOLDER}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
              <p
                id={reel.titleId}
                className="absolute bottom-5 left-5 right-5 font-serif text-ivory text-xl leading-snug"
              >
                {reel.caption}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
