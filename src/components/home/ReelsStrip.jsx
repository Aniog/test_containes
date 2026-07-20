import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const REELS = [
  {
    id: 'reel-ear',
    caption: 'The everyday ear, curated.',
    titleId: 'reel-ear-title',
    imgId: 'reel-ear-img-3a1b',
    query: 'gold huggie earrings worn on ear close up',
  },
  {
    id: 'reel-neck',
    caption: 'A pendant that catches the light.',
    titleId: 'reel-neck-title',
    imgId: 'reel-neck-img-7c2d',
    query: 'gold pendant necklace worn on neck editorial',
  },
  {
    id: 'reel-cuff',
    caption: 'No-pierce gold ear cuff, stacked.',
    titleId: 'reel-cuff-title',
    imgId: 'reel-cuff-img-9e4f',
    query: 'gold ear cuff stacked on cartilage close up',
  },
  {
    id: 'reel-drop',
    caption: 'Filigree that moves with you.',
    titleId: 'reel-drop-title',
    imgId: 'reel-drop-img-1b6a',
    query: 'gold filigree drop earrings worn editorial',
  },
  {
    id: 'reel-set',
    caption: 'The gift, already wrapped.',
    titleId: 'reel-set-title',
    imgId: 'reel-set-img-5d8c',
    query: 'gold jewelry gift set in keepsake box warm',
  },
  {
    id: 'reel-layer',
    caption: 'Layered gold, no effort.',
    titleId: 'reel-layer-title',
    imgId: 'reel-layer-img-2f9e',
    query: 'layered gold necklaces worn on collarbone',
  },
]

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function ReelsStrip() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) {
        ImageHelper.loadImages(strkImgConfig, ref.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section ref={ref} className="py-20 md:py-28 bg-sand">
      <div className="container-velmora mb-10">
        <p className="eyebrow mb-3">As Worn By You</p>
        <h2 className="font-serif font-light text-4xl md:text-5xl text-ink">
          The Velmora Edit
        </h2>
      </div>

      <div className="relative">
        <div className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar px-5 md:px-8 pb-4 snap-x snap-mandatory">
          {REELS.map((reel) => (
            <article
              key={reel.id}
              className="relative shrink-0 w-[68vw] sm:w-[280px] md:w-[300px] aspect-[9/16] snap-start overflow-hidden bg-ink group"
            >
              <img
                alt={reel.caption}
                data-strk-img-id={reel.imgId}
                data-strk-img={`[${reel.titleId}] ${reel.query}`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                src={PLACEHOLDER}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-5">
                <p
                  id={reel.titleId}
                  className="font-serif italic text-cream text-xl md:text-2xl leading-snug"
                >
                  {reel.caption}
                </p>
              </div>
              {/* Reel-style top accent */}
              <div className="absolute top-4 left-4 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
                <span className="text-[10px] uppercase tracking-widest2 text-cream/80">
                  @velmora
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
