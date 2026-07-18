import { journalEntries } from '@/data/storefront'

function Journal() {
  return (
    <section className="bg-velmora-porcelain py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.32em] text-velmora-truffle">Journal</p>
          <h1 className="mt-4 font-display text-5xl text-velmora-espresso sm:text-6xl">
            Styling notes, gifting edits, and jewelry care.
          </h1>
          <p className="mt-6 text-base leading-8 text-velmora-truffle">
            A soft editorial space for ideas around layering, gifting, and keeping your favorite pieces beautiful for longer.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {journalEntries.map((entry) => (
            <article key={entry.id} className="rounded-[2rem] border border-velmora-line bg-white/70 p-8 shadow-soft">
              <p className="text-xs uppercase tracking-[0.3em] text-velmora-truffle">Editorial note</p>
              <h2 className="mt-4 font-display text-4xl text-velmora-espresso">{entry.title}</h2>
              <p className="mt-4 text-base leading-8 text-velmora-truffle">{entry.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Journal
