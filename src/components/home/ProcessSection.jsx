import SectionHeader from '@/components/shared/SectionHeader'
import { processSteps } from '@/data/siteContent'

export default function ProcessSection() {
  return (
    <section className="bg-white py-16 text-brand-ink md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="How it works"
          title="A clear sourcing process for overseas buyers"
          description="Each project is handled with practical checkpoints, documented communication, and buyer approval at important stages."
          align="center"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <article key={step.title} className="relative rounded-2xl border border-brand-line bg-white p-6 text-brand-ink shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-navy text-sm font-semibold text-white">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-brand-navy">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-brand-muted">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
