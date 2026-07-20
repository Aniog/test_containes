import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const reels = [
  { id: 'morning-stack', caption: 'The morning stack', desc: 'gold huggie earrings worn on ear', imgId: 'ugc-morning-stack-img-a7c2d1' },
  { id: 'soft-neckline', caption: 'Soft neckline glow', desc: 'gold pendant necklace worn on neck', imgId: 'ugc-soft-neckline-img-b3f8e6' },
  { id: 'gifted-gold', caption: 'Gifted in gold', desc: 'woman opening jewelry gift box gold', imgId: 'ugc-gifted-gold-img-c9a1b4' },
  { id: 'weekend-cuff', caption: 'Weekend cuff ritual', desc: 'gold ear cuff crystal accent worn close up', imgId: 'ugc-weekend-cuff-img-d5e7a2' },
  { id: 'evening-layers', caption: 'Evening layers', desc: 'layered gold necklaces warm light', imgId: 'ugc-evening-layers-img-e2b6c8' },
]

export default function UgcReels() {
  const containerRef = useRef(null)

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') cleanup()
    }
  }, [])

  return (
    <section ref={containerRef} id="journal" className="border-y border-velmora-stone bg-velmora-champagne py-16 text-velmora-espresso md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-cocoa">Worn by Velmora</p>
            <h2 className="mt-3 font-serif text-5xl font-semibold">Golden Moments</h2>
          </div>
          <p className="hidden max-w-sm text-sm leading-7 text-velmora-taupe md:block">
            A reel-style strip of luminous, everyday styling inspiration.
          </p>
        </div>
        <div className="no-scrollbar flex gap-4 overflow-x-auto pb-3">
          {reels.map((reel) => (
            <article key={reel.id} className="group relative h-[390px] w-[220px] flex-none overflow-hidden rounded-[2rem] bg-velmora-espresso shadow-soft md:h-[470px] md:w-[265px]">
              <img
                alt={reel.caption}
                className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                data-strk-img-id={reel.imgId}
                data-strk-img={`[ugc-${reel.id}-desc] [ugc-${reel.id}-caption]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-velmora-espresso/85 to-transparent p-5 text-velmora-pearl">
                <p id={`ugc-${reel.id}-caption`} className="font-serif text-2xl font-semibold leading-tight">{reel.caption}</p>
                <p id={`ugc-${reel.id}-desc`} className="mt-2 text-xs uppercase tracking-[0.2em] text-velmora-champagne">{reel.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
