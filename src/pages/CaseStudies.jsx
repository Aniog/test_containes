import PageHero from '@/components/common/PageHero'
import SectionHeader from '@/components/common/SectionHeader'
import { caseStudies } from '@/data/siteContent'
import { usePageMeta } from '@/hooks/usePageMeta'

const CaseStudies = () => {
  usePageMeta({
    title: 'Case Studies | SSourcing China',
    description:
      'Read practical sourcing case examples covering supplier verification, inspection support, production follow-up, and shipment coordination.',
  })

  return (
    <div>
      <PageHero
        eyebrow="Case studies"
        title="Illustrative sourcing scenarios from overseas buyers"
        description="These practical examples show how buyers use sourcing support to improve supplier confidence, production visibility, and shipment preparation."
        titleId="case-studies-page-title"
        descriptionId="case-studies-page-description"
        visual={
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 p-4 shadow-sm">
            <div
              className="absolute inset-0 opacity-0"
              data-strk-bg-id="case-studies-page-bg-f17c22"
              data-strk-bg="[case-studies-page-description] [case-studies-page-title]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="1200"
            />
            <div className="relative min-h-[360px] rounded-[1.5rem] bg-slate-900/35 p-8">
              <div className="flex h-full items-end">
                <p className="max-w-md text-sm leading-7 text-white/90">
                  Examples of supplier comparison, packaging correction, inspection control, and shipment preparation support.
                </p>
              </div>
            </div>
          </div>
        }
      />

      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Examples"
            title="Practical sourcing support in context"
            description="Representative examples based on the kinds of sourcing problems overseas buyers commonly ask us to help manage."
          />
          <div className="mt-12 space-y-6">
            {caseStudies.map((study, index) => (
              <article key={study.slug} className="grid gap-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-[0.9fr_1.1fr]">
                <img
                  alt={study.client}
                  className="h-full min-h-[280px] w-full object-cover"
                  data-strk-img-id={`case-studies-page-${index}-j5${index}`}
                  data-strk-img={`[case-studies-page-${index}-outcome] [case-studies-page-${index}-client]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="1000"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="p-8">
                  <p className="text-sm font-semibold text-blue-700" id={`case-studies-page-${index}-client`}>
                    {study.client}
                  </p>
                  <h2 className="mt-4 text-2xl font-semibold text-slate-950">Challenge</h2>
                  <p className="mt-3 text-base leading-7 text-slate-600">{study.challenge}</p>
                  <h3 className="mt-6 text-lg font-semibold text-slate-950">Support provided</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">{study.solution}</p>
                  <h3 className="mt-6 text-lg font-semibold text-slate-950">Result</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600" id={`case-studies-page-${index}-outcome`}>
                    {study.outcome}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies
