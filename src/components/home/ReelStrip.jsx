import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { reels } from '@/data/products'
import { StrkImage } from '@/components/StrkImage'
import { useStrkImages } from '@/components/StrkImage'

export default function ReelStrip() {
  const ref = useStrkImages([])
  const scrollerRef = useRef(null)

  const scrollBy = (dir) => {
    const el = scrollerRef.current
    if (!el) return
    el.scrollBy({ left: dir * 320, behavior: 'smooth' })
  }

  return (
    <section ref={ref} className="bg-espresso py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold">As Seen On You</p>
            <h2 className="mt-3 font-serif text-4xl text-ivory md:text-5xl">Worn & Loved</h2>
          </div>
          <div className="hidden gap-2 md:flex">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Scroll left"
              className="flex h-10 w-10 items-center justify-center border border-ivory/30 text-ivory transition-colors hover:bg-ivory hover:text-espresso"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Scroll right"
              className="flex h-10 w-10 items-center justify-center border border-ivory/30 text-ivory transition-colors hover:bg-ivory hover:text-espresso"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 md:px-8 pb-2"
      >
        {reels.map((reel) => {
          const capId = `reel-cap-${reel.id}`
          return (
            <article key={reel.id} className="relative w-[260px] shrink-0 snap-start sm:w-[300px]">
              <StrkImage
                imgId={reel.imgId}
                query={`[${capId}] gold jewelry worn on model`}
                ratio="9x16"
                width={600}
                alt={reel.caption}
                className="aspect-[9/16] w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
              <p
                id={capId}
                className="absolute bottom-0 left-0 right-0 p-5 font-serif text-lg italic leading-snug text-ivory"
              >
                {reel.caption}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
