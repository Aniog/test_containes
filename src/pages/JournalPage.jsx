import { journalEntries } from '../data/products'

export default function JournalPage() {
  return (
    <section className="section-shell py-32 md:py-36">
      <div className="section-frame space-y-8">
        <div className="max-w-3xl space-y-5">
          <p className="text-xs uppercase tracking-luxe text-velmora-truffle">Journal</p>
          <h1 className="font-display text-5xl leading-[0.92] text-velmora-ink md:text-6xl">
            Stories on styling, gifting, and caring for jewelry that lasts beautifully
          </h1>
          <p className="text-base leading-8 text-velmora-cocoa">
            Editorial notes for building a refined jewelry wardrobe, choosing thoughtful gifts, and extending the life of your favorite finishes.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {journalEntries.map((entry) => (
            <article
              key={entry.slug}
              className="rounded-[28px] border border-velmora-ink/10 bg-white/70 p-7 shadow-card"
            >
              <p className="text-xs uppercase tracking-luxe text-velmora-truffle">Editorial</p>
              <h2 className="mt-4 font-display text-3xl leading-none text-velmora-ink">
                {entry.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-velmora-cocoa">{entry.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
