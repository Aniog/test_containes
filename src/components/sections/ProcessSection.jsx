import SectionHeader from '../SectionHeader'
import { processSteps } from '../../data/siteContent'

export default function ProcessSection() {
  return (
    <section id="how-it-works" className="bg-sourcing-cloud py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="How it works"
          title="A practical sourcing process for overseas buyers"
          description="Each project is organized around clear requirements, supplier comparison, verification, quality control, and shipment readiness."
          centered
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-5">
          {processSteps.map((step) => (
            <article key={step.step} className="rounded-3xl border border-sourcing-mist bg-white p-6 shadow-soft">
              <span className="text-sm font-bold text-sourcing-gold">{step.step}</span>
              <h3 id={step.titleId} className="mt-4 text-lg font-bold text-sourcing-navy">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-sourcing-muted">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
