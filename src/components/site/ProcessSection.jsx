import { processSteps } from '@/data/siteContent'
import SectionHeading from '@/components/site/SectionHeading'

const ProcessSection = () => {
  return (
    <section className="bg-slate-950 py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="A clear sourcing process from first brief to shipment readiness"
          description="We keep the process structured so overseas buyers can understand what happens next, what needs checking, and where risks should be addressed."
          tone="dark"
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-5">
          {processSteps.map((step) => (
            <article
              className="rounded-[2rem] border border-slate-800 bg-slate-900 p-6 text-white shadow-sm"
              key={step.number}>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
                {step.number}
              </p>
              <h3 className="mt-5 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
