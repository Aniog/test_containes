import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const reels = [
  { id: 'reel-1', caption: 'Everyday gold', user: '@elena.m' },
  { id: 'reel-2', caption: 'Quiet luxury', user: '@sophie' },
  { id: 'reel-3', caption: 'Gift to self', user: '@amina' },
  { id: 'reel-4', caption: 'Layered moments', user: '@jess' },
  { id: 'reel-5', caption: 'Golden hour', user: '@nora' },
  { id: 'reel-6', caption: 'Treasured', user: '@lina' },
]

export default function UGCReel() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-parchment py-14 md:py-20">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="mb-8 text-center">
          <p className="mb-2 font-sans text-xs uppercase tracking-[0.2em] text-gold">
            @velmorajewelry
          </p>
          <h2 className="font-serif text-3xl text-espresso md:text-4xl">
            Styled by You
          </h2>
        </div>
      </div>

      <div
        className="hide-scrollbar flex gap-4 overflow-x-auto px-5 pb-4 md:px-8 lg:px-12"
      >
        {reels.map((reel, index) => (
          <div
            key={reel.id}
            className="relative aspect-[9/16] w-[180px] flex-shrink-0 overflow-hidden md:w-[220px]"
          >
            <img
              alt={`UGC ${index + 1}`}
              data-strk-img-id={`ugc-reel-${reel.id}`}
              data-strk-img={`[reel-caption-${reel.id}] gold jewelry worn ear neck editorial`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-cream">
              <p
                id={`reel-caption-${reel.id}`}
                className="font-serif text-lg italic leading-tight"
              >
                {reel.caption}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-cream/70">
                {reel.user}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
