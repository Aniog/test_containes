import { journalEntries } from '@/data/storeData'

const JournalPage = () => {
  return (
    <div className="bg-[#f7f2ea]">
      <section className="border-b border-[rgba(215,195,171,0.7)] bg-white/40">
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-6 lg:px-10 lg:pb-20">
          <p className="text-xs uppercase tracking-[0.32em] text-[#c19a6b]">Journal</p>
          <h1 className="mt-4 max-w-4xl font-['Cormorant_Garamond'] text-5xl leading-none text-[#241a13] sm:text-6xl lg:text-7xl">
            Styling notes, gifting ideas, and the editorial side of everyday jewelry.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-10 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {journalEntries.map((entry) => (
            <article
              key={entry.slug}
              className="rounded-[2rem] border border-[rgba(215,195,171,0.7)] bg-white/90 p-8 shadow-[0_18px_45px_rgba(36,26,19,0.08)]"
            >
              <p className="text-xs uppercase tracking-[0.32em] text-[#c19a6b]">{entry.tag}</p>
              <h2 className="mt-4 font-['Cormorant_Garamond'] text-4xl leading-none text-[#241a13]">
                {entry.title}
              </h2>
              <p className="mt-5 text-base leading-8 text-[#6f5946]">{entry.excerpt}</p>
              <button
                type="button"
                className="mt-8 text-xs uppercase tracking-[0.32em] text-[#241a13] transition hover:text-[#c19a6b]"
              >
                Read article
              </button>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default JournalPage
