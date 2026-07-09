import React from "react"
import { reels } from "@/data/products"
import { getImgUrl } from "@/lib/imgConfig"


export default function ReelStrip() {
  return (
    <section className="py-20 md:py-28 bg-sand">
      <div className="max-w-editorial mx-auto px-6 md:px-10 mb-10">
        <div className="text-center">
          <p className="text-xs uppercase tracking-widest2 text-gold mb-3">As Worn</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">On You</h2>
        </div>
      </div>

      <div
        className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar px-6 md:px-10 pb-4 snap-x snap-mandatory"
      >
        {reels.map((reel) => (
          <article
            key={reel.id}
            className="relative shrink-0 w-[260px] md:w-[300px] aspect-[9/16] overflow-hidden bg-ink snap-start group"
          >
            <img
              src={getImgUrl(reel.imgId)}
              alt={reel.caption}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <p
              className="absolute bottom-5 left-5 right-5 font-serif text-cream text-lg italic"
            >
              {reel.caption}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
