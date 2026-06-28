import PageHero from '@/components/shared/PageHero'
import { caseStudies, primaryCta } from '@/content/siteContent'

const CaseStudies = () => {
  return (
    <div>
      <PageHero
        eyebrow="Case Studies"
        title="Practical sourcing examples from buyer-side support work"
        description="These examples show how structured supplier screening, quality control, and production follow-up can help buyers make clearer sourcing decisions."
        primaryAction={{ label: primaryCta, to: '/contact#inquiry-form' }}
        secondaryAction={{ label: 'See services', to: '/services' }}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-6 lg:grid-cols-3 lg:px-8">
          {caseStudies.map((study) => (
            <article key={study.title} className="rounded-[2rem] border border-site-border bg-white p-6 shadow-sm md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">{study.sector}</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-site-ink">{study.title}</h2>
              <div className="mt-6 space-y-4 text-sm leading-7 text-site-muted">
                <p><span className="font-semibold text-site-ink">Challenge:</span> {study.challenge}</p>
                <p><span className="font-semibold text-site-ink">Approach:</span> {study.approach}</p>
                <p><span className="font-semibold text-site-ink">Outcome:</span> {study.outcome}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-site-border bg-site-surface py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-site-border bg-white shadow-sm">
            <img
              alt="Factory walkthrough and buyer-side verification"
              className="h-full w-full object-cover"
              data-strk-img-id="case-studies-image-01"
              data-strk-img="[case-title] [case-desc]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          <div className="rounded-[2rem] border border-site-border bg-white p-6 shadow-sm md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">What these examples show</p>
            <h2 id="case-title" className="mt-4 text-3xl font-semibold tracking-tight text-site-ink">Sourcing results usually improve when visibility improves.</h2>
            <p id="case-desc" className="mt-4 text-base leading-7 text-site-muted">
              Better decisions often come from clearer verification, more useful supplier comparison, and earlier issue visibility during production and inspection.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies
