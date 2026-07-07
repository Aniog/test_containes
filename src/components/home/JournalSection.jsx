import { Link } from 'react-router-dom'
import { journalEntries } from '@/data/products'
import SectionHeading from '@/components/ui/SectionHeading'
import { getStrkImageSrc } from '@/lib/strkImage'

function JournalSection() {
  return (
    <section id="journal" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Journal"
            title="Editorial notes on layering, gifting, and everyday polish."
            description="A refined space for styling ideas and considered gifting inspiration from the Velmora world."
          />
          <Link
            to="/shop"
            className="text-xs uppercase tracking-[0.3em] text-stone-700 transition duration-300 hover:text-amber-600"
          >
            Explore the collection
          </Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {journalEntries.map((entry) => {
            const titleId = `${entry.id}-title`
            const descId = `${entry.id}-desc`

            return (
              <article
                key={entry.id}
                className="overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-50 shadow-sm shadow-stone-950/5"
              >
                <img
                  src={getStrkImageSrc(entry.imageId)}
                  alt={entry.title}
                  className="h-72 w-full object-cover"
                  data-strk-img-id={entry.imageId}
                  data-strk-img={`[${descId}] [${titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="1200"
                />
                <div className="px-6 py-6">
                  <p id={titleId} className="font-serif-display text-3xl text-stone-950">
                    {entry.title}
                  </p>
                  <p id={descId} className="mt-3 max-w-xl text-sm leading-7 text-stone-600">
                    {entry.description}
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

export default JournalSection
