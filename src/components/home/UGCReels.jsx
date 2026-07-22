import React, { useEffect, useRef } from 'react'
import { ugcReels } from '@/data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const UGCReels = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-velmora-charcoal">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            id="ugc-title"
            className="font-serif text-3xl md:text-4xl text-stone-100 tracking-wide"
          >
            As Seen On You
          </h2>
          <p
            id="ugc-subtitle"
            className="font-sans text-sm text-stone-400 mt-3 tracking-wider uppercase"
          >
            Real style, real moments
          </p>
        </div>

        {/* Horizontal scroll of vertical cards */}
        <div className="ugc-scroll overflow-x-auto pb-4 -mx-4 px-4 md:-mx-8 md:px-8">
          <div className="flex gap-4 md:gap-6 w-max">
            {ugcReels.map((reel) => (
              <article key={reel.id} className="relative w-[200px] md:w-[240px] aspect-[9x16] overflow-hidden group">
                {/* Image */}
                <img
                  data-strk-img-id={reel.imgId}
                  data-strk-img={`[ugc-caption-${reel.id}] [ugc-author-${reel.id}] [ugc-subtitle] [ugc-title]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="480"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={reel.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p
                    id={`ugc-caption-${reel.id}`}
                    className="font-serif italic text-sm text-stone-100 leading-snug"
                  >
                    {reel.caption}
                  </p>
                  <p
                    id={`ugc-author-${reel.id}`}
                    className="font-sans text-xs text-stone-300/80 mt-1"
                  >
                    — {reel.author}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default UGCReels
