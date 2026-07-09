import { useRef } from 'react'
import { ugcMoments } from '@/data/products'
import { useStrkImages } from '@/hooks/useStrkImages'

export default function UGCStrip() {
  const stripRef = useRef(null)
  useStrkImages(stripRef, [])

  return (
    <section id="journal" className="bg-velmora-espresso px-4 py-16 text-velmora-cream sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.36em] text-velmora-gold">
            Worn by Velmora
          </p>
          <h2 className="mt-3 font-serif text-5xl font-semibold leading-tight md:text-6xl">
            Golden moments in motion
          </h2>
          <p className="mt-4 text-sm leading-7 text-velmora-stone">
            A reel-style edit of luminous details: cuffs, huggies, floral stones, and gifts in warm light.
          </p>
        </div>
        <div ref={stripRef} className="velmora-scrollbar flex snap-x gap-4 overflow-x-auto pb-5">
          {ugcMoments.map((moment) => {
            const titleId = `ugc-${moment.id}-title`
            const captionId = `ugc-${moment.id}-caption`
            return (
              <article key={moment.id} className="group relative aspect-[9/16] w-[72vw] max-w-[280px] shrink-0 snap-center overflow-hidden bg-velmora-ink sm:w-[260px]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                  data-strk-bg-id={`ugc-bg-${moment.id}-c1d2e3`}
                  data-strk-bg={`[${captionId}] [${titleId}]`}
                  data-strk-bg-ratio="9x16"
                  data-strk-bg-width="560"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/85 via-velmora-espresso/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 id={titleId} className="font-serif text-3xl font-semibold text-velmora-cream">
                    {moment.title}
                  </h3>
                  <p id={captionId} className="mt-2 text-xs leading-5 text-velmora-stone">
                    {moment.caption}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
