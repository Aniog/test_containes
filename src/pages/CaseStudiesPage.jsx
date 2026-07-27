import PageHero from '@/components/shared/PageHero.jsx'
import SectionHeading from '@/components/shared/SectionHeading.jsx'
import { caseStudies } from '@/content/siteContent.js'

function CaseStudiesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Case Studies"
        title="Examples of sourcing support for international buyers"
        titleId="case-hero-title"
        description="These examples show how SSourcing China can support supplier qualification, production follow-up, inspection, and shipment coordination in practical B2B sourcing scenarios."
        descriptionId="case-hero-desc"
        primaryAction={{ label: 'Get a Free Sourcing Quote', to: '/contact#inquiry-form' }}
        secondaryAction={{ label: 'See Services', to: '/services' }}
        imageId="case-hero-bg-a8d3f1"
      />

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Selected Examples"
          title="Practical buyer situations rather than exaggerated claims"
          description="We focus on the type of sourcing coordination that helps buyers reduce uncertainty and make clearer decisions."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article key={study.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
                {study.market}
              </span>
              <h2 className="mt-4 text-xl font-semibold text-slate-950">{study.title}</h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-slate-700">
                <p><span className="font-semibold text-slate-900">Challenge:</span> {study.challenge}</p>
                <p><span className="font-semibold text-slate-900">Support:</span> {study.solution}</p>
                <p><span className="font-semibold text-slate-900">Outcome:</span> {study.outcome}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default CaseStudiesPage
