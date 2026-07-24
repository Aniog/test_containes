import React, { useRef } from 'react'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { ugcCards } from '@/data/products'
import { StrkImage } from '@/components/StrkImage'
import Reveal from '@/components/Reveal'

export default function ReelsRow() {
  const scrollerRef = useRef(null)

  const scrollBy = (dir) => {
    scrollerRef.current?.scrollBy({ left: dir * 260, behavior: 'smooth' })
  }

  return (
    <section className="border-y border-line/60 bg-coal py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest3 text-gold">
              @velmora.jewelry
            </p>
            <h2
              id="reels-title"
              className="mt-4 font-serif text-4xl font-light text-ivory md:text-5xl"
            >
              Worn by <span className="italic text-goldlight">You</span>
            </h2>
          </div>
          <div className="hidden gap-2 md:flex">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Scroll left"
              className="flex h-11 w-11 items-center justify-center border border-line text-sand transition-all duration-300 hover:border-gold hover:text-gold"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Scroll right"
              className="flex h-11 w-11 items-center justify-center border border-line text-sand transition-all duration-300 hover:border-gold hover:text-gold"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </Reveal>
      </div>

      <Reveal delay={120}>
        <div
          ref={scrollerRef}
          className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 md:px-10 lg:px-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))]"
        >
          {ugcCards.map((card) => (
            <figure
              key={card.id}
              className="group relative w-44 shrink-0 snap-start overflow-hidden border border-line/50 bg-mocha md:w-52"
            >
              <div className="aspect-[9/16]">
                <StrkImage
                  id={`reel-${card.id}`}
                  query={`[reel-${card.id}-caption] [reels-title] close-up of gold jewelry worn on ear and neck warm light vertical editorial reel`}
                  ratio="9x16"
                  width={500}
                  alt={card.caption}
                  className="transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
              <span className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-ink/50 text-ivory backdrop-blur-sm">
                <Play className="ml-0.5 h-3 w-3" fill="currentColor" />
              </span>
              <figcaption
                id={`reel-${card.id}-caption`}
                className="absolute inset-x-4 bottom-4 font-serif text-base font-light italic leading-snug text-ivory"
              >
                “{card.caption}”
              </figcaption>
            </figure>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
