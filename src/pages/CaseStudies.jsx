import PageHeader from '@/components/common/PageHeader'
import SectionHeading from '@/components/common/SectionHeading'
import { caseStudies } from '@/data/siteContent'

const CaseStudies = () => {
  return (
    <>
      <PageHeader
        baseId="case-studies-page"
        eyebrow="Case studies"
        title="Illustrative examples of sourcing, verification, and quality support"
        description="Representative scenarios showing the kinds of buyer needs SSourcing China can support through local sourcing execution and clearer reporting."
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Project examples"
            title="Practical sourcing situations with buyer-focused outcomes"
            description="These examples show the type of coordination, screening, and inspection support buyers typically request when working with China suppliers."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <article
                key={study.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7"
              >
                <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">
                  Case study
                </p>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900">
                  {study.title}
                </h2>
                <div className="mt-6 space-y-4 text-sm leading-6 text-slate-600">
                  <p>
                    <span className="font-semibold text-slate-900">Challenge:</span> {study.challenge}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-900">Solution:</span> {study.solution}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-900">Result:</span> {study.result}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default CaseStudies
