import { Link } from 'react-router-dom'
import { journalHighlight } from '@/data/products'

export default function JournalTeaser() {
  return (
    <section id="journal" className="bg-velmora-mist px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.5rem] border border-velmora-line bg-velmora-pearl p-6 shadow-velmora-sm md:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-12 lg:p-10">
        <div className="max-w-lg">
          <p className="text-xs uppercase tracking-[0.35em] text-velmora-bronze">
            Journal
          </p>
          <h2 id="journal-title" className="mt-4 font-serif text-5xl leading-none text-velmora-espresso">
            {journalHighlight.title}
          </h2>
          <p id="journal-desc" className="mt-6 text-sm leading-8 text-velmora-ink/72 md:text-base">
            {journalHighlight.description}
          </p>
          <Link
            to="/shop"
            className="mt-8 inline-flex items-center rounded-full bg-velmora-espresso px-6 py-3 text-sm font-medium text-velmora-ivory transition hover:bg-velmora-ink"
          >
            Read the latest
          </Link>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-velmora-line bg-velmora-sand shadow-velmora-sm">
          <img
            alt="Velmora journal"
            className="h-[420px] w-full object-cover"
            data-strk-img-id={journalHighlight.slotId}
            data-strk-img="[journal-desc] [journal-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>
      </div>
    </section>
  )
}
