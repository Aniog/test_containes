import React from 'react'
import { reels } from '@/data/products'
import { useStrkImages } from '@/hooks/useStrkImages'

export default function ReelStrip() {
  const containerRef = useStrkImages([])

  return (
    <section ref={containerRef} className="bg-ink py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-5 md:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
              As Worn
            </p>
            <h2 className="mt-3 font-serif text-4xl text-ivory md:text-5xl">
              On Real People
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm text-ivory/60 md:block">
            Tag <span className="text-gold">@velmora</span> to be featured.
          </p>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="no-scrollbar flex gap-4 overflow-x-auto px-5 md:px-8 pb-2 snap-x snap-mandatory">
        {reels.map((reel) => (
          <article
            key={reel.id}
            className="group relative h-[440px] w-[248px] flex-shrink-0 snap-start overflow-hidden bg-ink-soft md:h-[520px] md:w-[296px]"
          >
            <img
              alt={reel.caption}
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.titleId}] gold jewelry worn`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            <p
              id={reel.titleId}
              className="absolute bottom-6 left-5 right-5 font-serif text-xl italic text-ivory md:text-2xl"
            >
              {reel.caption}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
