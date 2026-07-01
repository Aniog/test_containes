import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const reels = [
  { id: 1, caption: 'Everyday gold', user: '@mara.style' },
  { id: 2, caption: 'Stacked huggies', user: '@elena.jewels' },
  { id: 3, caption: 'Date night shine', user: '@sophie.luxe' },
  { id: 4, caption: 'Minimal magic', user: '@anna.daily' },
  { id: 5, caption: 'Gift-worthy', user: '@velmora' },
  { id: 6, caption: 'Layered necklaces', user: '@kate.gold' },
]

export default function UGCReel() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-velmora-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-2 font-sans text-xs font-medium uppercase tracking-widest text-velmora-gold">
          @velmora
        </p>
        <h2 className="mb-8 font-serif text-3xl text-velmora-espresso md:mb-12 md:text-4xl">
          Styled by You
        </h2>
      </div>
      <div className="hide-scrollbar flex gap-4 overflow-x-auto px-4 pb-4 sm:px-6 lg:px-8">
        {reels.map((reel) => {
          const titleId = `ugc-title-${reel.id}`
          const userId = `ugc-user-${reel.id}`
          return (
            <div
              key={reel.id}
              className="relative aspect-[9/16] w-[170px] flex-shrink-0 overflow-hidden rounded-sm md:w-[220px]"
            >
              <img
                data-strk-img-id={`ugc-img-${reel.id}`}
                data-strk-img={`[${titleId}] [${userId}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={reel.caption}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <p id={titleId} className="font-serif text-base italic">
                  {reel.caption}
                </p>
                <p id={userId} className="mt-1 text-xs text-white/80">
                  {reel.user}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
