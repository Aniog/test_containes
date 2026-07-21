import {useRef, useEffect} from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const reels = [
  { id: 'reel-ear', caption: 'Everyday gold, every day.', query: 'gold ear cuff jewelry worn close up' },
  { id: 'reel-neck', caption: 'Layered & luminous.', query: 'gold layered necklace worn close up' },
  { id: 'reel-huggie', caption: 'The huggie that stays.', query: 'gold huggie earring worn close up' },
  { id: 'reel-drop', caption: 'Filigree in motion.', query: 'gold drop earring worn close up' },
  { id: 'reel-set', caption: 'Gifted & treasured.', query: 'gold jewelry gift set worn close up' },
  { id: 'reel-stack', caption: 'Stack your story.', query: 'stacked gold jewelry worn close up' },
]

export default function ReelsStrip() {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, node)
    })
    return () => window.cancelAnimationFrame(frameId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section ref={ref} className="bg-cream py-20 md:py-28 overflow-hidden">
      <div className="max-w-8xl mx-auto px-6 md:px-10 mb-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-widest3 text-gold mb-3">
              As Worn
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">
              On Our Community
            </h2>
          </div>
          <p className="hidden md:block text-sm text-sand max-w-xs text-right">
            Real moments, real wear. Tag @velmora to be featured.
          </p>
        </div>
      </div>

      <div
        ref={ref}
        className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar px-6 md:px-10 pb-2 snap-x snap-mandatory"
      >
        {reels.map((r) => (
          <article
            key={r.id}
            className="relative shrink-0 w-[68vw] sm:w-[300px] aspect-[9/16] snap-start overflow-hidden bg-espresso group"
          >
            <img
              alt={r.caption}
              data-strk-img-id={`${r.id}-img`}
              data-strk-img={`[${r.id}-caption] ${r.query}`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
            <p
              id={`${r.id}-caption`}
              className="absolute bottom-5 left-5 right-5 font-serif text-ivory text-xl italic leading-snug"
            >
              {r.caption}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
