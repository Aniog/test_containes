import React, { useEffect, useRef } from 'react'
import { ugcCards } from '@/data/products.js'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function UgcStrip() {
  const stripRef = useRef(null)

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, stripRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') cleanup()
    }
  }, [])

  return (
    <section ref={stripRef} className="bg-velmora-espresso py-20 text-velmora-ivory lg:py-24">
      <div className="px-5 md:px-8 lg:px-12">
        <div className="mx-auto mb-9 flex max-w-7xl items-end justify-between gap-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-velmora-champagne">Seen in gold</p>
            <h2 className="mt-3 font-serif text-5xl leading-none text-velmora-ivory md:text-6xl">Worn softly, shared often.</h2>
          </div>
          <p className="hidden max-w-xs text-sm leading-7 text-velmora-ivory/72 md:block">A reel-style glimpse at how Velmora fits into real wardrobes.</p>
        </div>
        <div className="mx-auto flex max-w-7xl snap-x gap-5 overflow-x-auto pb-2">
          {ugcCards.map((card) => (
            <article key={card.id} className="group relative min-w-[72vw] snap-start overflow-hidden border border-velmora-champagne/25 bg-velmora-cocoa sm:min-w-[300px] lg:min-w-[270px]">
              <div
                className="aspect-[9/16] w-full bg-cover bg-center opacity-90 transition duration-500 group-hover:scale-105"
                role="img"
                aria-label={card.caption}
                data-strk-bg-id={card.imgId}
                data-strk-bg={`[${card.captionId}]`}
                data-strk-bg-ratio="9x16"
                data-strk-bg-width="520"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-velmora-espresso/90 to-transparent p-5">
                <p id={card.captionId} className="font-serif text-2xl leading-tight text-velmora-ivory">{card.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
