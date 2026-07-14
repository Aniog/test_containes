import React from 'react'
import { reels } from '@/data/products'
import { useStrkImages } from '@/lib/useStrkImages'

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function ReelsStrip() {
  const containerRef = useStrkImages([])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-sand">
      <div className="max-w-7xl mx-auto px-5 md:px-8 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">
              #VelmoraWomen
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">
              Worn & Loved
            </h2>
          </div>
          <p className="hidden md:block text-sm text-stone max-w-xs">
            Real moments, real wear. Tag <span className="text-ink">@velmora</span> to be featured.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-4 px-5 md:px-8 pb-2">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="relative shrink-0 w-[240px] md:w-[280px] aspect-[9/16] overflow-hidden bg-espresso group"
            >
              <img
                data-strk-img-id={reel.imgId}
                data-strk-img={`[${reel.titleId}] gold jewelry worn on ear and neck editorial`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src={PLACEHOLDER}
                alt={reel.caption}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
              <p
                id={reel.titleId}
                className="absolute bottom-5 left-5 right-5 font-serif text-ivory text-lg italic leading-snug"
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
