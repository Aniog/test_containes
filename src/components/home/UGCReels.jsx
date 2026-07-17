import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { UGC_REELS } from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'

export default function UGCReels() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section
      id="ugc-reels"
      ref={containerRef}
      className="py-20 md:py-28 bg-beige/40"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-12 md:mb-16">
          <p id="ugc-eyebrow" className="eyebrow">
            Worn by you · @velmora
          </p>
          <h2
            id="ugc-title"
            className="mt-4 font-serif text-4xl md:text-5xl text-espresso font-light tracking-tight"
          >
            <em className="italic">In&nbsp;the&nbsp;wild</em>
          </h2>
        </div>
      </div>

      {/* Horizontal scroll row of vertical 9:16 cards */}
      <div className="overflow-x-auto no-scrollbar">
        <ul className="flex gap-4 md:gap-5 px-6 md:px-10 lg:px-16 pb-4 snap-x snap-mandatory">
          {UGC_REELS.map((reel, idx) => (
            <li
              key={reel.id}
              className="shrink-0 w-[58vw] sm:w-[260px] md:w-[260px] snap-start"
            >
              <div className="relative aspect-[9/16] overflow-hidden bg-espresso/90 group">
                <img
                  alt={reel.caption}
                  data-strk-img-id={`reel-${reel.id}`}
                  data-strk-img={`${reel.image} [${reel.caption.replace(/\s+/g, '-').toLowerCase()}] [ugc-title] [ugc-eyebrow]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Bottom gradient + caption */}
                <div
                  id={reel.caption.replace(/\s+/g, '-').toLowerCase()}
                  className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-espresso/85 via-espresso/30 to-transparent"
                />
                <p className="absolute inset-x-4 bottom-4 font-serif italic text-cream text-lg md:text-xl font-light leading-snug">
                  {reel.caption}
                </p>
                {/* Reel indicator */}
                <div className="absolute top-4 right-4 flex flex-col items-center gap-1 text-cream/80">
                  <span className="block w-px h-6 bg-cream/40" />
                </div>
              </div>
            </li>
          ))}
          {/* Tail spacer so last card isn't flush against the edge */}
          <li className="shrink-0 w-2" aria-hidden="true" />
        </ul>
      </div>
    </section>
  )
}
