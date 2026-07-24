import PageIntro from '../components/common/PageIntro'
import { journalEntries } from '../data/store'
import useStrkImages from '../lib/useStrkImages'

const Journal = () => {
  const containerRef = useStrkImages([])

  return (
    <div ref={containerRef} className="bg-stone-950 text-stone-50">
      <PageIntro
        eyebrow="Journal"
        title="Styling notes worth saving"
        description="Refined guidance on layering, gifting, and caring for demi-fine pieces so your collection keeps its glow and stays easy to wear."
      />

      <section className="px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {journalEntries.map((entry) => (
            <article key={entry.slug} className="overflow-hidden rounded-[2rem] border border-stone-200/10 bg-stone-900/60">
              <span id={entry.titleId} className="sr-only">{entry.title}</span>
              <span id={entry.descId} className="sr-only">{entry.excerpt}</span>
              <span id={entry.cueId} className="sr-only">{entry.cueText}</span>
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={entry.title}
                className="aspect-[4/3] h-full w-full object-cover"
                data-strk-img-id={`journal-page-${entry.slug}-d72a`}
                data-strk-img={`[${entry.cueId}] [${entry.descId}] [${entry.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
              />
              <div className="space-y-4 p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-amber-200">{entry.category}</p>
                <h2 className="font-display text-3xl leading-tight text-stone-50">{entry.title}</h2>
                <p className="text-sm leading-7 text-stone-300">{entry.excerpt}</p>
                <p className="text-xs uppercase tracking-[0.24em] text-stone-500">Article preview</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Journal
