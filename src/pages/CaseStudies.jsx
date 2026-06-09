import SectionHeader from '../components/SectionHeader.jsx'
import VisualPanel from '../components/VisualPanel.jsx'
import { caseStudies } from '../content.js'

const CaseStudies = () => (
  <>
    <section className="bg-brand-cloud py-16 text-brand-ink lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Case studies"
          title="Practical examples of sourcing support"
          description="These examples show common buyer situations where local supplier screening, verification, inspection planning, and production follow-up can improve clarity."
          align="center"
        />
      </div>
    </section>

    <section className="bg-white py-16 text-brand-ink lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:px-8">
        {caseStudies.map((study, index) => (
          <article key={study.id} className="grid overflow-hidden rounded-3xl border border-brand-steel bg-white shadow-sm lg:grid-cols-[0.8fr_1.2fr]">
            <div className="bg-brand-cloud">
              <VisualPanel
                id={`case-study-${study.id}-visual-${index}`}
                query={`[case-${study.id}-challenge] [case-${study.id}-title]`}
                ratio="4x3"
                width="800"
                alt={study.title}
                className="aspect-[4/3]"
              />
            </div>
            <div className="p-7 lg:p-9">
              <p className="text-sm font-semibold text-brand-blue">{study.industry}</p>
              <h2 id={`case-${study.id}-title`} className="mt-3 text-2xl font-bold text-brand-navy">{study.title}</h2>
              <div className="mt-6 grid gap-4">
                <p id={`case-${study.id}-challenge`} className="text-sm leading-7 text-brand-slate"><strong className="text-brand-ink">Challenge:</strong> {study.challenge}</p>
                <p className="text-sm leading-7 text-brand-slate"><strong className="text-brand-ink">Action:</strong> {study.action}</p>
                <p className="rounded-2xl bg-brand-cloud p-4 text-sm leading-7 text-brand-slate"><strong className="text-brand-ink">Result:</strong> {study.result}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  </>
)

export default CaseStudies
