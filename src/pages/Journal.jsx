import React from 'react'
import { IMAGE_PLACEHOLDER, journalEntries } from '@/data/products'
import { useStrkImages } from '@/lib/useStrkImages'

export default function Journal() {
  const containerRef = React.useRef(null)
  useStrkImages(containerRef, [])

  return (
    <div ref={containerRef} className="bg-stone-100 text-stone-900">
      <section className="border-b border-stone-200 bg-stone-950 px-4 pb-12 pt-28 text-stone-50 sm:px-6 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-200">Journal</p>
          <h1 className="mt-4 font-display text-5xl text-stone-50 sm:text-6xl">
            Styling notes, care rituals, and gift inspiration
          </h1>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-5 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8 lg:py-16">
        {journalEntries.map((entry) => {
          const titleId = `journal-page-${entry.id}-title`
          const categoryId = `journal-page-${entry.id}-category`

          return (
            <article
              key={entry.id}
              className="overflow-hidden rounded-[1.75rem] border border-stone-200 bg-stone-50 shadow-[0_18px_60px_-40px_rgba(28,25,23,0.4)]"
            >
              <img
                alt={entry.title}
                className="aspect-[4/3] h-full w-full object-cover"
                data-strk-img-id={`journal-page-${entry.id}`}
                data-strk-img={`[${categoryId}] [${titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="760"
                src={IMAGE_PLACEHOLDER}
              />
              <div className="space-y-4 p-6 text-stone-900">
                <p id={categoryId} className="text-xs uppercase tracking-[0.28em] text-stone-500">
                  {entry.category}
                </p>
                <h2 id={titleId} className="font-display text-2xl text-stone-950">
                  {entry.title}
                </h2>
                <p className="text-sm leading-7 text-stone-600">
                  A short editorial read for modern jewelry lovers who care about quality, mood, and everyday wearability.
                </p>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
