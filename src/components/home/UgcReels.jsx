import React from 'react'
import SectionHeader from '@/components/common/SectionHeader.jsx'
import { ugcCards } from '@/data/products.js'
import { getStrkImage } from '@/lib/strkImages.js'

export default function UgcReels() {
  return (
    <section className="bg-velmora-pearl py-16 text-velmora-espresso md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Worn beautifully" title="A glimpse into her jewelry box" copy="A reel-style edit of warm gold details, effortless layers, and pieces styled by the Velmora community." />
      </div>
      <div className="mt-12 overflow-x-auto px-4 no-scrollbar sm:px-6 lg:px-8">
        <div className="mx-auto flex w-max max-w-none gap-4 lg:max-w-7xl">
          {ugcCards.map((card) => (
            <article key={card.id} className="group relative h-[420px] w-[236px] shrink-0 overflow-hidden bg-velmora-blush shadow-soft sm:h-[520px] sm:w-[292px]">
              <img
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                alt={card.caption}
                data-strk-img-id={card.imgId}
                data-strk-img={`[${card.titleId}] [ugc-section-title]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="520"
                src={getStrkImage(card.imgId)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-deep/70 via-transparent to-transparent" />
              <p id={card.titleId} className="absolute bottom-5 left-5 right-5 font-serif text-3xl italic leading-none text-velmora-pearl">{card.caption}</p>
            </article>
          ))}
        </div>
      </div>
      <span id="ugc-section-title" className="sr-only">Velmora jewelry worn by women in warm editorial light</span>
    </section>
  )
}
