import React, { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { StrkImage } from '@/components/product/StrkImage'

const REELS = [
  {
    id: 'reel-ear-stack',
    handle: '@maya.in.gold',
    caption: 'The everyday ear stack',
    query: 'gold huggie earrings worn on ear editorial portrait',
    alt: 'Wearing the Golden Sphere Huggies',
  },
  {
    id: 'reel-pendant',
    handle: '@avery.studios',
    caption: 'Layered like poetry',
    query: 'gold pendant necklace worn on neck editorial portrait',
    alt: 'Wearing the Majestic Flora pendant',
  },
  {
    id: 'reel-cuff',
    handle: '@noor.sundays',
    caption: 'A whisper of crystal',
    query: 'gold crystal ear cuff on ear close up editorial',
    alt: 'Wearing the Vivid Aura ear cuff',
  },
  {
    id: 'reel-lace',
    handle: '@isla.daily',
    caption: 'Heirloom energy',
    query: 'gold filigree drop earrings editorial portrait',
    alt: 'Wearing the Amber Lace drop earrings',
  },
  {
    id: 'reel-set',
    handle: '@rae.house',
    caption: 'The gift edit',
    query: 'gold earring and necklace set editorial portrait',
    alt: 'Wearing the Royal Heirloom Set',
  },
  {
    id: 'reel-stack-2',
    handle: '@halsey.co',
    caption: 'Stacked three ways',
    query: 'mixed gold earrings and necklace styling editorial',
    alt: 'A stack of Velmora pieces',
  },
]

export function ReelUGC() {
  const trackRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateScrollState = () => {
    const el = trackRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 4)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
  }

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    updateScrollState()
    el.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('resize', updateScrollState)
    return () => {
      el.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
    }
  }, [])

  const scrollBy = (delta) => {
    trackRef.current?.scrollBy({ left: delta, behavior: 'smooth' })
  }

  return (
    <section className="py-20 md:py-28 bg-sand/40">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-12">
          <div>
            <p className="eyebrow text-mocha">Worn By You · #velmora</p>
            <h2 className="display-2 mt-3 text-deep">In the wild</h2>
            <p className="body-base mt-3 max-w-md">
              Real customers, real light. Tag <span className="font-serif italic">@velmora</span> to be
              featured.
            </p>
          </div>
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              type="button"
              aria-label="Scroll left"
              onClick={() => scrollBy(-360)}
              disabled={!canScrollLeft}
              className="w-10 h-10 border border-taupe flex items-center justify-center text-deep hover:border-deep disabled:opacity-30 disabled:hover:border-taupe transition-colors"
            >
              <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label="Scroll right"
              onClick={() => scrollBy(360)}
              disabled={!canScrollRight}
              className="w-10 h-10 border border-taupe flex items-center justify-center text-deep hover:border-deep disabled:opacity-30 disabled:hover:border-taupe transition-colors"
            >
              <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        className="overflow-x-auto scrollbar-hide scroll-smooth"
      >
        <ul className="flex gap-5 md:gap-6 px-6 md:px-10 lg:px-12 pb-2">
          {REELS.map((reel, i) => (
            <li
              key={reel.id}
              className="shrink-0 w-[68vw] sm:w-[280px] md:w-[300px] lg:w-[320px]"
            >
              <div className="relative aspect-[9/16] bg-deep overflow-hidden group">
                <StrkImage
                  id={reel.id}
                  query={`[reel-context] ${reel.query}`}
                  ratio="9x16"
                  width={640}
                  alt={reel.alt}
                  eager={i < 2}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out-soft group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-deep/85" />
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-cream/90 backdrop-blur-sm flex items-center justify-center text-deep">
                  <Play className="w-3.5 h-3.5 fill-deep" strokeWidth={1.5} />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 text-cream">
                  <p className="font-serif italic text-xl leading-tight">{reel.caption}</p>
                  <p className="text-[11px] tracking-eyebrow uppercase font-sans text-cream/80 mt-2">
                    {reel.handle}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <span id="reel-context" className="sr-only">editorial portrait photography</span>
    </section>
  )
}
