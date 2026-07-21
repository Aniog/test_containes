import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../../strk-img-config.json'
import { getStrkImageSrc } from '../../lib/strk-image'

const reels = [
  { id: 'morning-glow', caption: 'A golden cuff for coffee runs and client calls.' },
  { id: 'date-night', caption: 'Huggies that catch candlelight without trying.' },
  { id: 'gift-open', caption: 'The box she keeps on her vanity.' },
  { id: 'neck-stack', caption: 'A floral pendant layered over silk.' },
  { id: 'weekend-ear', caption: 'Soft shine, worn close to the skin.' },
]

export default function UgcReels() {
  const reelsRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, reelsRef.current)
  }, [])

  return (
    <section ref={reelsRef} id="journal" className="bg-velmora-espresso py-20 text-velmora-cream lg:py-28">
      <div className="mx-auto max-w-7xl px-4 text-velmora-cream sm:px-6 lg:px-8">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-velmora-champagne">
          Seen on you
        </p>
        <h2 id="ugc-title" className="font-serif text-4xl font-medium leading-tight text-velmora-cream sm:text-5xl lg:text-6xl">
          Quiet Shine in Motion
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-velmora-mist">
          A reel-style glimpse of demi-fine jewelry worn in real rituals.
        </p>
      </div>
      <div className="mt-10 overflow-x-auto px-4 pb-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl gap-4 sm:gap-5">
          {reels.map((reel) => (
            <article key={reel.id} className="group relative h-[420px] min-w-[236px] overflow-hidden bg-velmora-mist shadow-editorial sm:h-[500px] sm:min-w-[286px]">
              <img
                alt={reel.caption}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                data-strk-img-id={`ugc-${reel.id}-velmora`}
                data-strk-img={`[ugc-${reel.id}-caption] [ugc-title]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                src={getStrkImageSrc(`ugc-${reel.id}-velmora`)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/85 via-velmora-espresso/15 to-transparent" />
              <p id={`ugc-${reel.id}-caption`} className="absolute inset-x-5 bottom-5 font-serif text-2xl leading-tight text-velmora-cream">
                {reel.caption}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
