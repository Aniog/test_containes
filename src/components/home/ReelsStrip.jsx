import React from 'react'
import { StrkImage } from '@/components/ui/StrkImage'
import { reels } from '@/data/products'

export function ReelsStrip() {
  return (
    <section className="bg-espresso py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold">As Seen On You</p>
            <h2 className="mt-3 font-serif text-4xl text-ivory md:text-5xl">#VelmoraMoments</h2>
          </div>
          <p className="hidden max-w-xs text-sm text-ivory/60 md:block">
            Real styling, real wear. Tag us to be featured.
          </p>
        </div>
      </div>

      {/* horizontal scroll */}
      <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:px-8">
        {reels.map((reel) => (
          <article
            key={reel.id}
            className="relative aspect-[9/16] w-[230px] shrink-0 snap-start overflow-hidden bg-ink md:w-[260px]"
          >
            <StrkImage
              imgId={reel.imgId}
              query={`[${reel.titleId}]`}
              ratio="9x16"
              width={520}
              alt={reel.caption}
              titleId={reel.titleId}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            <p
              id={reel.titleId}
              className="absolute bottom-0 left-0 right-0 p-5 font-serif text-lg italic leading-snug text-ivory"
            >
              {reel.caption}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ReelsStrip
