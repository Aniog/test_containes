import { useRef } from 'react'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import StrkImg from '@/components/ui/StrkImg'
import Reveal from '@/components/ui/Reveal'
import { REELS } from '@/data/products'

export default function ReelsStrip() {
  const scrollerRef = useRef(null)

  const scrollBy = (dir) => {
    scrollerRef.current?.scrollBy({ left: dir * 280, behavior: 'smooth' })
  }

  return (
    <section className="border-y border-line bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-gold">@velmora.jewelry</p>
            <h2 className="mt-3 font-display text-3xl font-light text-espresso md:text-4xl">
              Worn by You
            </h2>
          </div>
          <div className="hidden gap-2 md:flex">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Scroll left"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-espresso/20 text-espresso transition-all duration-300 hover:border-espresso hover:bg-espresso hover:text-ivory"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Scroll right"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-espresso/20 text-espresso transition-all duration-300 hover:border-espresso hover:bg-espresso hover:text-ivory"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div
          ref={scrollerRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 md:gap-6 md:px-10 lg:px-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))]"
        >
          {REELS.map((reel) => (
            <div
              key={reel.id}
              className="group relative aspect-[9/16] w-40 shrink-0 snap-start overflow-hidden bg-sand sm:w-48 md:w-56"
            >
              <StrkImg
                imgId={reel.imgId}
                query={`[${reel.captionId}] [reels-section-title] gold jewelry worn close up`}
                ratio="9x16"
                width={500}
                alt={reel.caption}
                className="transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
              <div className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-ivory/20 backdrop-blur-sm transition-all duration-300 group-hover:bg-gold">
                <Play className="h-3 w-3 fill-ivory text-ivory" />
              </div>
              <p
                id={reel.captionId}
                className="absolute inset-x-0 bottom-0 p-4 font-display text-lg italic leading-snug text-ivory md:text-xl"
              >
                {reel.caption}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      <span id="reels-section-title" className="sr-only">
        Velmora gold jewelry worn on ear and neck, styled by our community
      </span>
    </section>
  )
}
