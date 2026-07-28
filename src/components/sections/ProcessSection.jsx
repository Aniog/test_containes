import { processSteps } from '@/data/siteData'
import SectionHeader from '@/components/shared/SectionHeader'

const ProcessSection = () => (
  <section className="bg-brand-mist py-16 text-brand-navy md:py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="How it works"
        title="A practical sourcing process with clear checkpoints"
        description="The process is built to reduce uncertainty before you pay deposits, start production, or release shipment."
      />
      <div className="mt-10 grid gap-5 lg:grid-cols-5">
        {processSteps.map((step) => (
          <article key={step.step} className="relative rounded-3xl border border-brand-line bg-white p-6 text-brand-navy shadow-soft">
            <span className="inline-flex rounded-full bg-brand-gold/15 px-3 py-1 text-sm font-bold text-brand-navy">
              {step.step}
            </span>
            <h3 className="mt-5 text-lg font-bold text-brand-navy">{step.title}</h3>
            <p className="mt-3 text-sm leading-6 text-brand-slate">{step.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default ProcessSection
