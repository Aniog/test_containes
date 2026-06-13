import { processSteps } from '../../data/siteContent'
import SectionHeading from '../common/SectionHeading'

export default function ProcessSection() {
  return (
    <section className="bg-white px-4 py-20 text-brand-ink sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="How it works"
          title="A clear sourcing process for better buying decisions"
          text="We organize supplier information, quality checkpoints, and production updates so your team can make informed decisions without a China office."
          align="center"
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-5">
          {processSteps.map((step) => (
            <article className="relative rounded-3xl border border-slate-200 bg-brand-surface p-6 text-brand-ink" key={step.step}>
              <span className="text-sm font-bold text-brand-blue">{step.step}</span>
              <h3 className="mt-4 text-lg font-bold text-brand-navy">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-brand-subtle">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
