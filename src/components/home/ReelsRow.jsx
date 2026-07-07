import React from "react"
import { resolveImg } from "@/lib/utils"
import { REELS } from "@/data/products"

export default function ReelsRow() {
  return (
    <section className="bg-sand py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gold">As Seen On You</p>
            <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">Worn & Loved</h2>
          </div>
          <p className="hidden max-w-xs text-sm text-stone md:block">
            Tag <span className="text-ink">@velmora</span> to be featured.
          </p>
        </div>
      </div>

      <div className="no-scrollbar flex gap-4 overflow-x-auto px-5 pb-2 md:px-8">
        {REELS.map((reel) => (
          <article
            key={reel.id}
            className="relative aspect-[9/16] w-[230px] shrink-0 overflow-hidden bg-ink md:w-[260px]"
          >
            <img
              alt={reel.caption}
              src={resolveImg(reel.imgId)}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 font-serif text-lg italic leading-snug text-cream">
              {reel.caption}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
