import { ArrowUpRight } from 'lucide-react'
import SectionHeading from '@/components/common/SectionHeading'

const HomeJournal = ({ notes }) => {
  return (
    <section id="journal" className="bg-velmora-mist py-16 md:py-24">
      <div className="page-shell space-y-10">
        <SectionHeading
          eyebrow="Journal"
          title="Styling notes, care rituals, and gifting ideas"
          description="A quiet editorial corner for wearing your jewelry well and making every gift feel considered."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {notes.map((note) => (
            <article
              key={note.id}
              className="group rounded-[2rem] border border-velmora-sand/70 bg-velmora-pearl p-7 shadow-soft"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-velmora-gold">
                {note.category}
              </p>
              <h3 className="mt-5 font-heading text-3xl leading-tight text-velmora-ink">
                {note.title}
              </h3>
              <a
                href="#"
                className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-velmora-ink/60 transition-colors group-hover:text-velmora-gold"
              >
                Read story
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeJournal
