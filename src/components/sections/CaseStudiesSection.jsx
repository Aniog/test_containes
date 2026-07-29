import SectionHeader from '../SectionHeader'
import { caseStudies } from '../../data/siteContent'

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="bg-sourcing-cloud py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Case studies"
          id="case-studies-section-title"
          title="Practical sourcing support for different buyer situations"
          description="Examples below are representative project scenarios showing how structured sourcing support can help overseas buyers make better decisions."
          centered
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article key={study.title} className="overflow-hidden rounded-3xl border border-sourcing-mist bg-white shadow-soft">
              <img
                alt={study.title}
                className="h-52 w-full object-cover"
                data-strk-img-id={study.imageId}
                data-strk-img={`[${study.descId}] [${study.titleId}] [case-studies-section-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="p-6">
                <h3 id={study.titleId} className="text-xl font-bold text-sourcing-navy">{study.title}</h3>
                <p className="mt-4 text-sm font-semibold text-sourcing-blue">Challenge</p>
                <p className="mt-2 text-sm leading-6 text-sourcing-muted">{study.challenge}</p>
                <p className="mt-4 text-sm font-semibold text-sourcing-blue">Support provided</p>
                <p id={study.descId} className="mt-2 text-sm leading-6 text-sourcing-muted">{study.result}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
