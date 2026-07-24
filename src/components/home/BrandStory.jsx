import React from 'react'
import { ArrowRight } from 'lucide-react'
import { StrkImage } from '@/components/StrkImage'
import Reveal from '@/components/Reveal'

export default function BrandStory() {
  return (
    <section id="story" className="border-y border-line/60 bg-coal">
      <div className="mx-auto grid max-w-7xl gap-0 md:grid-cols-2">
        <Reveal className="relative min-h-[320px] overflow-hidden md:min-h-[560px]">
          <StrkImage
            id="story-image"
            query="[story-title] artisan jeweler hands crafting gold jewelry atelier warm candlelight close-up"
            ratio="4x3"
            width={1000}
            alt="Jeweler crafting gold pieces in the Velmora atelier"
            className="absolute inset-0"
          />
        </Reveal>

        <div className="flex flex-col justify-center px-5 py-16 md:px-14 md:py-28 lg:px-20">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-widest3 text-gold">
              Our Story
            </p>
            <h2
              id="story-title"
              className="mt-5 font-serif text-4xl font-light leading-tight text-ivory md:text-5xl"
            >
              Fine feeling,
              <span className="block italic text-goldlight">without the fine markup</span>
            </h2>
            <p className="mt-6 text-base font-light leading-relaxed text-sand">
              Velmora began at a small workbench with a simple frustration:
              jewelry that felt precious was priced out of reach, and jewelry
              that was affordable felt disposable. We make the third thing —
              demi-fine pieces in thick 18K gold plating, produced in small
              batches and finished by hand.
            </p>
            <p className="mt-4 text-base font-light leading-relaxed text-sand">
              Every piece is designed to be lived in: hypoallergenic,
              tarnish-resistant, and guaranteed to become the one you reach
              for first.
            </p>
            <a
              href="#story"
              className="group mt-9 inline-flex w-fit items-center gap-2 border-b border-gold/50 pb-1 text-[11px] font-semibold uppercase tracking-widest2 text-gold transition-colors duration-300 hover:border-gold hover:text-goldlight"
            >
              Read Our Story
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
