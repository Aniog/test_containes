import React from 'react'
import { reels } from '@/data/products'
import SectionHeading from '@/components/layout/SectionHeading'

const ReelRow = () => (
  <section className="border-y border-velmora-line bg-white/40 py-20 lg:py-24">
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <SectionHeading
        eyebrow="Seen on Velmora"
        title="A soft-focus reel of how the collection lives"
        description="Warm gold tones styled close to the skin, captured like quiet moments on film."
      />

      <div className="mt-10 flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {reels.map((item) => (
          <article
            key={item.id}
            className="group relative min-w-[220px] overflow-hidden rounded-[2rem] border border-velmora-line bg-velmora-ink shadow-soft sm:min-w-[260px]"
          >
            <div className="aspect-[9/16] overflow-hidden">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="h-full w-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-[1.03]"
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.titleId}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p id={item.titleId} className="max-w-[12rem] font-serif text-2xl text-white">
                {item.caption}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default ReelRow
