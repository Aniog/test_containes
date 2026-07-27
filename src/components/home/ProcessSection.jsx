import SectionHeader from '../site/SectionHeader'
import { processSteps } from '../../content'

function ProcessSection() {
  return (
    <section className="bg-white py-16 text-brand-ink lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Sourcing process"
          title="A clear workflow for overseas buyers"
          description="Each project is managed around the decisions buyers need to make: supplier fit, price, quality, schedule, and shipment readiness."
          align="center"
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-5">
          {processSteps.map((item) => (
            <article key={item.step} className="relative rounded-2xl border border-brand-line bg-brand-bg p-6 text-brand-ink">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-navy text-sm font-semibold text-white">
                {item.step}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-brand-navy">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-brand-ink/70">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
