import React, { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { reels } from '@/data/products'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function ReelStrip() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-10">
        <div className="text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">As Seen On You</p>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso">#VelmoraMoments</h2>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="no-scrollbar overflow-x-auto pb-4">
        <div className="flex gap-4 md:gap-6 px-6 md:px-10 w-max">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="relative w-[220px] md:w-[260px] aspect-[9/16] shrink-0 overflow-hidden bg-sand group"
            >
              <img
                src={PLACEHOLDER}
                alt={reel.caption}
                data-strk-img-id={reel.imgId}
                data-strk-img={`[${reel.titleId}] gold jewelry worn on ear neck editorial vertical`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-bg/70 via-transparent to-transparent" />
              <p
                id={reel.titleId}
                className="absolute bottom-5 left-5 right-5 font-serif italic text-cream text-lg leading-snug"
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
