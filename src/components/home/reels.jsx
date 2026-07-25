import { useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const REELS = [
  {
    id: 'reel-layered-neck',
    caption: 'Layered golden hour',
    handle: '@maison.mila',
    query: 'close-up of a woman\'s neck wearing layered dainty gold necklaces, vertical crop, warm sunlight, editorial jewelry reel',
  },
  {
    id: 'reel-huggie-stack',
    caption: 'The everyday stack',
    handle: '@softgolden',
    query: 'close-up of an ear with stacked gold huggie hoop earrings, vertical crop, warm editorial light',
  },
  {
    id: 'reel-evening-drop',
    caption: 'Evening, gilded',
    handle: '@atelier.noa',
    query: 'woman in evening light wearing gold drop earrings looking over shoulder, vertical crop, moody warm tones',
  },
  {
    id: 'reel-ear-cuff',
    caption: 'One cuff, no rules',
    handle: '@goldenhour.studio',
    query: 'profile close-up of woman wearing a gold ear cuff, minimal styling, vertical crop, warm neutral background',
  },
  {
    id: 'reel-unboxing',
    caption: 'Unboxing the Heirloom Set',
    handle: '@thegiftedit',
    query: 'hands opening a cream jewelry gift box with gold necklace inside, vertical crop, warm lifestyle photography',
  },
]

export default function Reels() {
  const containerRef = useRef(null)
  const scrollerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const scrollBy = (direction) => {
    const node = scrollerRef.current
    if (!node) return
    node.scrollBy({ left: direction * node.clientWidth * 0.7, behavior: 'smooth' })
  }

  return (
    <section ref={containerRef} className="border-y border-line bg-sand py-16 sm:py-24" aria-label="Styled by you">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-luxe text-gold-deep">
              #VelmoraOnYou
            </p>
            <h2 className="font-serif text-3xl font-medium leading-tight text-ink sm:text-4xl">
              Worn &amp; Loved
            </h2>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Scroll reels left"
              className="flex h-11 w-11 items-center justify-center border border-ink/20 text-ink transition-all duration-300 hover:border-gold hover:text-gold-deep"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Scroll reels right"
              className="flex h-11 w-11 items-center justify-center border border-ink/20 text-ink transition-all duration-300 hover:border-gold hover:text-gold-deep"
            >
              <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 sm:gap-6 sm:px-8 lg:px-[max(3rem,calc((100vw-80rem)/2+3rem))]"
      >
        {REELS.map((reel) => (
          <figure
            key={reel.id}
            className="group relative w-[62vw] shrink-0 snap-start overflow-hidden bg-ink sm:w-[240px] lg:w-[260px]"
          >
            <div className="aspect-[9/16]">
              <img
                data-strk-img-id={`${reel.id}-img`}
                data-strk-img={reel.query}
                data-strk-img-ratio="9x16"
                data-strk-img-width="520"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={reel.caption}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover opacity-95 transition-transform duration-700 ease-luxe group-hover:scale-105"
              />
            </div>
            <div
              className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent"
              aria-hidden="true"
            />
            <figcaption className="absolute inset-x-0 bottom-0 p-4">
              <p className="font-serif text-lg italic leading-snug text-cream">
                {reel.caption}
              </p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-luxe text-cream/60">
                {reel.handle}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
