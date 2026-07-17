import { useRef } from 'react'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import StrkImage from '@/components/ui/StrkImage'
import { Reveal } from '@/hooks/useReveal'

const REELS = [
  {
    id: 'reel-ear-stack',
    caption: 'The everyday ear stack',
    handle: '@maison.lea',
    imgId: 'ugc-ear-stack-2b71ac',
    query: 'curated ear stack gold huggies and ear cuff worn close-up editorial',
  },
  {
    id: 'reel-layered-neck',
    caption: 'Layered, never loud',
    handle: '@sofia.wears',
    imgId: 'ugc-neck-layers-5d93e2',
    query: 'layered gold necklaces on neck warm skin tones editorial',
  },
  {
    id: 'reel-golden-hour',
    caption: 'Golden hour, literally',
    handle: '@amara.g',
    imgId: 'ugc-golden-hour-8f42bd',
    query: 'gold drop earrings glowing in warm sunlight portrait crop',
  },
  {
    id: 'reel-gift-morning',
    caption: 'A gift, to myself',
    handle: '@thequietedit',
    imgId: 'ugc-gift-self-3a58d0',
    query: 'woman fastening gold necklace mirror morning light intimate',
  },
  {
    id: 'reel-dome-daily',
    caption: 'Domes on repeat',
    handle: '@julia.roh',
    imgId: 'ugc-dome-daily-91c7e4',
    query: 'chunky gold dome huggie earrings side profile natural light',
  },
]

export default function UgcReels() {
  const scrollerRef = useRef(null)

  const scrollBy = (dir) => {
    scrollerRef.current?.scrollBy({ left: dir * 280, behavior: 'smooth' })
  }

  return (
    <section className="overflow-hidden bg-espresso py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-soft">#MyVelmora</p>
            <h2 className="mt-4 font-serif text-3xl font-medium tracking-wide text-cream md:text-5xl">
              Worn by You
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-stone-warm/75">
              Real moments from our community — tag @velmora to be featured.
            </p>
          </div>
          <div className="hidden gap-2 md:flex">
            <button
              type="button"
              aria-label="Scroll reels left"
              onClick={() => scrollBy(-1)}
              className="flex h-11 w-11 items-center justify-center border border-line-dark text-stone-warm transition-colors hover:border-gold hover:text-gold-soft"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label="Scroll reels right"
              onClick={() => scrollBy(1)}
              className="flex h-11 w-11 items-center justify-center border border-line-dark text-stone-warm transition-colors hover:border-gold hover:text-gold-soft"
            >
              <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>
        </Reveal>
      </div>

      <Reveal delay={150}>
        <div
          ref={scrollerRef}
          className="scrollbar-none mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:gap-6 md:px-8"
        >
          {REELS.map((reel) => (
            <figure
              key={reel.id}
              className="group relative w-[210px] shrink-0 snap-start overflow-hidden md:w-[260px]"
            >
              <div className="relative aspect-[9/16] overflow-hidden bg-espresso-deep">
                <StrkImage
                  imgId={reel.imgId}
                  query={`${reel.query} 18k gold jewelry worn vertical editorial`}
                  ratio="9x16"
                  width={600}
                  alt={reel.caption}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-deep/85 via-transparent to-espresso-deep/20" />
                <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-espresso-deep/50 backdrop-blur transition-colors group-hover:bg-gold/80">
                  <Play className="ml-0.5 h-3.5 w-3.5 fill-cream text-cream" strokeWidth={1.5} />
                </span>
                <figcaption className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-serif text-lg italic leading-snug text-cream">{reel.caption}</p>
                  <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.22em] text-gold-soft">
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
