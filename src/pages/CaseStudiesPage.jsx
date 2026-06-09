import CTASection from '@/components/site/CTASection'
import PageIntro from '@/components/site/PageIntro'
import { caseStudies } from '@/data/siteContent'
import { usePageMeta } from '@/lib/usePageMeta'

const CaseStudiesPage = () => {
  usePageMeta(
    'Case Studies | SSourcing China',
    'Read sourcing case studies from SSourcing China covering supplier replacement, verification, quality control, and shipping coordination scenarios.'
  )

  return (
    <main>
      <PageIntro
        description="These case-style examples are designed to show the kind of sourcing support buyers often request when supplier reliability, quality control, or execution visibility needs improvement."
        eyebrow="Case studies"
        idPrefix="case-studies-page"
        points={[
          'Examples based on realistic sourcing situations',
          'Focused on verification, QC, and coordination',
          'Written for importers, brands, and distributors',
        ]}
        title="Sourcing examples that reflect practical buyer challenges"
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 sm:px-6 lg:px-8">
          {caseStudies.map((study) => (
            <article
              className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 text-slate-900 shadow-sm md:p-8"
              key={study.slug}>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
                {study.sector}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                {study.title}
              </h2>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-3xl border border-slate-200 bg-white p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Challenge
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{study.challenge}</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Approach
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{study.solution}</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Result
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{study.result}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </main>
  )
}

export default CaseStudiesPage
