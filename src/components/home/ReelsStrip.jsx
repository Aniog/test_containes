import React from 'react'
import { reels } from '@/data/products'
import { useStrkImages } from '@/lib/useStrkImages'

export default function ReelsStrip() {
  const containerRef = useStrkImages([])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-sand">
      <div className="container-velmora mb-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow mb-3">As Seen On You</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">
              Worn & Loved
            </h2>
          </div>
          <p className="hidden md:block text-sm text-stone max-w-xs text-right">
            Tag <span className="text-ink">@velmora</span> to be featured.
          </p>
        </div>
      </div>

      <div className="no-scrollbar overflow-x-auto pb-4">
        <div className="flex gap-4 md:gap-6 px-6 md:px-10">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="relative shrink-0 w-[240px] md:w-[280px] aspect-[9/16] bg-ink overflow-hidden group"
            >
              <img
                alt={reel.caption}
                data-strk-img-id={reel.imgId}
                data-strk-img={`[${reel.titleId}] gold jewelry worn`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <p
                id={reel.titleId}
                className="absolute bottom-5 left-5 right-5 font-serif text-cream text-lg leading-snug"
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
