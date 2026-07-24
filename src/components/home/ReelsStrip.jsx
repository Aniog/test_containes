import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { REELS } from '@/data/products'
import { PLACEHOLDER } from '@/components/ui/StrkImage'
import { getStrkImageUrl } from '@/lib/utils'

export default function ReelsStrip() {
  const ref = useRef(null)
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])
  return (
    <section ref={ref} className="bg-ink py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-gold">As Worn</p>
          <h2 className="mt-3 font-serif text-4xl text-cream md:text-5xl">#VelmoraOnYou</h2>
        </div>
      </div>

      <div
        ref={ref}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 md:justify-center md:overflow-visible"
      >
        {REELS.map((reel) => (
          <div
            key={reel.id}
            className="relative aspect-[9/16] w-[220px] shrink-0 snap-start overflow-hidden bg-ink/40 sm:w-[260px]"
          >
            <img
              alt={reel.caption}
              className="absolute inset-0 h-full w-full object-cover"
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.titleId}] gold jewelry worn on ear neck editorial close up`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src={getStrkImageUrl(reel.imgId)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <p
              id={reel.titleId}
              className="absolute bottom-4 left-4 right-4 font-serif text-lg italic leading-snug text-cream"
            >
              {reel.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
