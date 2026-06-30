import { journalTeaser, placeholderSrc } from '@/data/storefront'
import Button from '@/components/ui/Button'

const JournalSection = () => (
  <section id="journal" className="section-space bg-white">
    <div className="page-shell">
      <div className="grid gap-8 rounded-[2.5rem] border border-stone-200 bg-stone-100/70 p-6 shadow-sm shadow-stone-200/30 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:p-8">
        <div className="overflow-hidden rounded-[2rem] border border-stone-200 bg-neutral-950">
          <img
            src={placeholderSrc}
            alt={journalTeaser.title}
            data-strk-img-id="velmora-journal-image-f2c18b"
            data-strk-img="[journal-body] [journal-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1000"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
        <div>
          <p className="luxury-kicker">Journal</p>
          <h2 id="journal-title" className="mt-4 font-serif text-4xl leading-none text-stone-900 sm:text-5xl">
            {journalTeaser.title}
          </h2>
          <p id="journal-body" className="mt-5 text-base leading-8 text-stone-600">
            {journalTeaser.body}
          </p>
          <Button variant="outline" size="lg" className="mt-8">
            Read Editorial Notes
          </Button>
        </div>
      </div>
    </div>
  </section>
)

export default JournalSection
