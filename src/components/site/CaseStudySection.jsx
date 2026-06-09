import SectionHeading from '@/components/site/SectionHeading'

export default function CaseStudySection({ items, limit }) {
  const displayItems = typeof limit === 'number' ? items.slice(0, limit) : items

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Case studies"
          title="Examples of sourcing support in practice"
          description="These examples reflect typical buyer needs: better supplier qualification, stronger production follow-up, and improved visibility before shipment."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {displayItems.map((item) => (
            <article key={item.slug} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                {item.sector}
              </p>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-950">
                {item.title}
              </h3>
              <div className="mt-5 space-y-4 text-sm leading-7 md:text-base">
                <div>
                  <p className="font-semibold text-slate-950">Challenge</p>
                  <p className="text-slate-600">{item.challenge}</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-950">What we supported</p>
                  <p className="text-slate-600">{item.solution}</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-950">Outcome</p>
                  <p className="text-slate-600">{item.outcome}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
