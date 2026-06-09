import SectionHeading from '@/components/site/SectionHeading'

export default function ProcessSection({ steps }) {
  return (
    <section className="bg-slate-950 py-16 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="A clearer sourcing process from supplier search to shipment readiness"
          description="The process is structured to reduce uncertainty, improve communication, and keep overseas buyers better informed at each stage."
          tone="inverse"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          {steps.map((step) => (
            <article key={step.step} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
                Step {step.step}
              </p>
              <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{step.summary}</p>
              <div className="mt-5 rounded-3xl bg-white/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Typical output
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-200">{step.deliverable}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
