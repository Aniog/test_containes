import PageHero from '@/components/common/PageHero'
import { caseStudies } from '@/content/siteContent'

export default function CaseStudies() {
  return (
    <main>
      <PageHero
        eyebrow="Case Studies"
        title="Business situations where buyers need stronger sourcing support"
        description="These examples illustrate typical sourcing scenarios involving supplier checks, communication gaps, production control, and shipment readiness."
      />

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <article key={study.title} className="rounded-3xl border border-slate-950/10 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-xl font-semibold text-slate-950">{study.title}</h2>
                <p className="mt-4 text-sm font-medium text-blue-600">Situation</p>
                <p className="mt-2 text-sm leading-7 text-slate-700/75">{study.summary}</p>
                <p className="mt-5 text-sm font-medium text-blue-600">Support approach</p>
                <p className="mt-2 text-sm leading-7 text-slate-700/75">{study.outcome}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
