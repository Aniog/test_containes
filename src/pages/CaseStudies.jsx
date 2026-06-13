import CTASection from '../components/common/CTASection.jsx'
import PageHero from '../components/common/PageHero.jsx'
import SectionIntro from '../components/common/SectionIntro.jsx'
import { caseStudies } from '../siteContent.js'
import { usePageMeta } from '../lib/usePageMeta.js'

const CaseStudies = () => {
  usePageMeta(
    'Case Studies | SSourcing China',
    'Read case study examples showing how SSourcing China supports overseas buyers with supplier verification, production visibility, and quality inspection.',
  )

  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Representative sourcing support scenarios"
        description="Examples of how overseas buyers use local sourcing help in China to improve supplier selection, production visibility, and shipment readiness."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Examples"
            title="Practical use cases rather than exaggerated success stories"
            description="These examples are written to illustrate the type of sourcing support buyers typically need, with a professional and realistic B2B tone."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <article key={study.title} className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <span className="inline-flex rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
                  {study.industry}
                </span>
                <h2 className="mt-5 text-2xl font-semibold text-slate-900">{study.title}</h2>
                <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
                  <p><span className="font-semibold text-slate-900">Challenge:</span> {study.challenge}</p>
                  <p><span className="font-semibold text-slate-900">Solution:</span> {study.solution}</p>
                  <p><span className="font-semibold text-slate-900">Outcome:</span> {study.outcome}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

export default CaseStudies
