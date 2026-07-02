import { ArrowUpRight } from 'lucide-react'
import { IMAGE_PLACEHOLDER } from '@/lib/placeholders'

const journalEntries = [
  {
    id: 'journal-01',
    title: 'The modern gold edit',
    description: 'How to layer warm tones without overstyling the look.',
  },
  {
    id: 'journal-02',
    title: 'Gift-worthy, beautifully boxed',
    description: 'A refined guide to selecting jewelry that still feels personal.',
  },
]

const JournalSection = () => {
  return (
    <section id="journal" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-amber-700">
              Journal
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-none text-stone-900 md:text-5xl">
              Styling notes, gifting ideas, and jewelry that lives beautifully in everyday wardrobes
            </h2>
          </div>
          <a
            href="#newsletter"
            className="text-xs font-medium uppercase tracking-[0.28em] text-stone-700 transition duration-300 hover:text-amber-800"
          >
            Read the edit
          </a>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {journalEntries.map((entry) => {
            const titleId = `${entry.id}-title`
            const descriptionId = `${entry.id}-description`

            return (
              <article
                key={entry.id}
                className="group overflow-hidden rounded-[32px] border border-stone-200 bg-stone-50 shadow-[0_18px_50px_rgba(28,25,23,0.06)]"
              >
                <img
                  alt={entry.title}
                  className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  data-strk-img-id={`${entry.id}-image-a94c`}
                  data-strk-img={`[${descriptionId}] [${titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="1200"
                  src={IMAGE_PLACEHOLDER}
                />
                <div className="flex items-center justify-between gap-5 p-6">
                  <div>
                    <h3 id={titleId} className="font-serif text-3xl text-stone-900">
                      {entry.title}
                    </h3>
                    <p id={descriptionId} className="mt-3 text-sm leading-6 text-stone-600">
                      {entry.description}
                    </p>
                  </div>
                  <span className="inline-flex rounded-full border border-stone-300 p-3 text-stone-700 transition duration-300 group-hover:border-amber-700 group-hover:text-amber-700">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
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
