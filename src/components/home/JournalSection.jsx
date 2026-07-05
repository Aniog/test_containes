import { journalStories } from '@/data/store'
import SectionHeading from '@/components/ui/SectionHeading'

function JournalSection() {
  return (
    <section id="journal" className="bg-velvet py-16 text-ivory md:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Journal"
          title="Thoughtful notes on styling, gifting, and the art of finishing a look"
          description="A quiet editorial layer for the Velmora world."
          inverse
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {journalStories.map((story) => (
            <article
              key={story.id}
              className="rounded-[28px] border border-line-inverse bg-velvet-soft/70 p-6 shadow-card backdrop-blur-sm md:p-7"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-ivory/55">Velmora Journal</p>
              <h3 className="mt-4 font-serif text-3xl leading-none text-ivory">{story.title}</h3>
              <p className="mt-4 text-sm leading-7 text-ivory/76">{story.blurb}</p>
              <a href="#" className="mt-6 inline-flex text-xs uppercase tracking-[0.18em] text-champagne transition duration-300 hover:text-ivory">
                Read article
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default JournalSection
