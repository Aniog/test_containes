import React from 'react'
import { reels } from '@/data/products'

export default function ReelStrip() {
  return (
    <section className="bg-espresso text-cream py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 mb-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
              As Worn By You
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">#VelmoraMoments</h2>
          </div>
          <p className="hidden md:block text-sm text-cream/60 max-w-xs text-right">
            Tag us @velmora to be featured. Swipe through real moments in gold.
          </p>
        </div>
      </div>

      {/* Horizontal scroll of 9:16 cards */}
      <div className="no-scrollbar overflow-x-auto pb-4">
        <div className="flex gap-4 md:gap-5 px-5 md:px-8 snap-x snap-mandatory">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="relative shrink-0 w-[230px] md:w-[260px] aspect-[9/16] snap-start overflow-hidden group"
            >
              <img
                data-strk-img-id={reel.imgId}
                data-strk-img={`[${reel.titleId}] gold jewelry worn on ear neck editorial`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="520"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={reel.caption}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <p
                id={reel.titleId}
                className="absolute bottom-5 left-5 right-5 font-serif text-lg text-cream leading-snug"
              >
                {reel.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
