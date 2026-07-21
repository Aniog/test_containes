import { useRef } from 'react'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import StockImage from '@/components/ui/StockImage'
import Reveal from '@/components/ui/Reveal'

const REELS = [
  {
    id: 'reel-01',
    caption: 'Golden hour, literally.',
    desc: 'close-up of gold huggie earrings worn on a woman ear warm sunset light',
    handle: '@amelie.wears',
  },
  {
    id: 'reel-02',
    caption: 'Layered and loved.',
    desc: 'delicate gold necklaces layered on a woman neck soft studio light',
    handle: '@thegoldedit',
  },
  {
    id: 'reel-03',
    caption: 'The cuff that started it all.',
    desc: 'gold ear cuff with crystal worn close-up editorial photography',
    handle: '@velmora.muse',
  },
  {
    id: 'reel-04',
    caption: 'Heirloom energy.',
    desc: 'woman wearing gold filigree drop earrings elegant evening look',
    handle: '@sofia.in.gold',
  },
  {
    id: 'reel-05',
    caption: 'Everyday armor.',
    desc: 'chunky gold dome huggie earrings minimal everyday style close-up',
    handle: '@minimal.gilt',
  },
  {
    id: 'reel-06',
    caption: 'A garden at the collarbone.',
    desc: 'floral crystal gold necklace worn on collarbone warm light macro',
    handle: '@flora.and.facet',
  },
]

export default function UgcReels() {
  const scrollerRef = useRef(null)

  const scrollBy = (dir) => {
    scrollerRef.current?.scrollBy({ left: dir * 300, behavior: 'smooth' })
  }

  return (
    <section className="border-y border-velmora-line bg-velmora-surface/40 py-20 md:py-28">
      <div className="velmora-container">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">@velmora on you</p>
              <h2 className="mt-4 font-display text-4xl font-medium text-velmora-ink md:text-5xl">
                Worn &amp; Treasured
              </h2>
            </div>
            <div className="hidden gap-2 md:flex">
              <button
                type="button"
                onClick={() => scrollBy(-1)}
                className="flex h-11 w-11 items-center justify-center border border-velmora-line text-velmora-muted transition-all hover:border-velmora-gold hover:text-velmora-gold"
                aria-label="Scroll reels left"
              >
                <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
              </button>
              <button
                type="button"
                onClick={() => scrollBy(1)}
                className="flex h-11 w-11 items-center justify-center border border-velmora-line text-velmora-muted transition-all hover:border-velmora-gold hover:text-velmora-gold"
                aria-label="Scroll reels right"
              >
                <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={120}>
        <div
          ref={scrollerRef}
          className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 md:gap-5 md:px-8 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]"
        >
          {REELS.map((reel) => (
            <figure
              key={reel.id}
              className="group relative w-[62vw] shrink-0 snap-start overflow-hidden bg-velmora-bg sm:w-[240px]"
            >
              <div className="relative aspect-[9/16] overflow-hidden">
                <StockImage
                  imgId={`ugc-${reel.id}`}
                  query={`${reel.desc} vertical reel style`}
                  ratio="9x16"
                  width={480}
                  alt={reel.caption}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-bg/90 via-transparent to-velmora-bg/20" />
                <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-velmora-bg/50 backdrop-blur-sm">
                  <Play className="h-3 w-3 fill-velmora-ink text-velmora-ink" strokeWidth={1} />
                </span>
                <figcaption className="absolute inset-x-0 bottom-0 p-4">
                  <p
                    id={`ugc-caption-${reel.id}`}
                    className="font-display text-lg italic leading-snug text-velmora-ink"
                  >
                    “{reel.caption}”
                  </p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-velmora-gold-light">
                    {reel.handle}
                  </p>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
