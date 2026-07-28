import SectionHeader from '@/components/common/SectionHeader'
import { processSteps } from '@/data/siteContent'

export default function ProcessSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Sourcing process"
          title="A clear workflow from requirements to shipment"
          description="Every sourcing project is different, but the process should always be structured, documented, and easy for overseas buyers to follow."
          id="process-section-title"
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-5">
          {processSteps.map((step) => (
            <article key={step.id} className="relative rounded-3xl border border-brand-line bg-white p-6 text-slate-900 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-blue">{step.eyebrow}</p>
              <h3 className="mt-4 text-lg font-semibold leading-6 text-brand-navy">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
