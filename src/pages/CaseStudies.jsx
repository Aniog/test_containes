import PageHeader from '@/components/layout/PageHeader'
import CaseStudiesSection from '@/components/sections/CaseStudiesSection'
import CTASection from '@/components/sections/CTASection'
import { Section, SectionHeader } from '@/components/ui/Section'
import { CASE_STUDIES } from '@/data/content'

export default function CaseStudies() {
  return (
    <>
      <PageHeader
        eyebrow="Case Studies"
        title="Case studies from global buyers"
        description="Real examples of how we helped importers solve supplier, quality, and logistics challenges when sourcing from China."
      />
      <CaseStudiesSection showCta={false} />

      <Section className="bg-white">
        <SectionHeader
          eyebrow="All Projects"
          title="Browse every case study"
          description="Filter by the challenge that matches your situation."
        />
        <div className="mt-12 space-y-8">
          {CASE_STUDIES.map((cs) => (
            <article
              key={cs.id}
              className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 md:grid-cols-3 md:p-8"
            >
              <div className="md:col-span-1">
                <div className="relative aspect-[3/2] overflow-hidden rounded-xl">
                  <img
                    alt={cs.client}
                    data-strk-img-id={`${cs.imgId}-full`}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <span className="text-sm font-semibold uppercase tracking-wider text-brand-700">
                  {cs.industry}
                </span>
                <h3 id={cs.titleId} className="mt-2 text-xl font-bold text-slate-900">
                  {cs.client}
                </h3>
                <p id={cs.descId} className="sr-only">
                  {cs.industry} sourcing case study.
                </p>
                <div className="mt-4 space-y-3 text-sm text-slate-600">
                  <p>
                    <span className="font-semibold text-slate-900">
                      Challenge:{' '}
                    </span>
                    {cs.challenge}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-900">
                      Approach:{' '}
                    </span>
                    {cs.approach}
                  </p>
                  <div className="rounded-lg bg-green-50 p-3 text-green-800">
                    <span className="font-semibold">Result: </span>
                    {cs.result}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  )
}
