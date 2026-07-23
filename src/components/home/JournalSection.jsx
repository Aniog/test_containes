import { journalNotes } from '../../data/store.js'
import SectionHeading from '../shared/SectionHeading.jsx'

const JournalSection = () => {
  return (
    <section id="journal" className="px-6 pb-16 md:px-8 md:pb-24">
      <div className="mx-auto max-w-7xl border-t border-sand/50 pt-14">
        <SectionHeading
          eyebrow="Journal"
          title="A softer approach to styling and gifting"
          description="A glimpse at the editorial stories that shape our collections."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {journalNotes.map((note) => (
            <article
              key={note.title}
              className="rounded-[1.75rem] border border-sand/50 bg-pearl p-6 shadow-card"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-taupe">Editorial Note</p>
              <h3 className="mt-4 font-display text-4xl leading-none text-obsidian">
                {note.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-truffle">{note.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default JournalSection
