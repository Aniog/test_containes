import { processSteps } from '@/data/siteData'
import SectionIntro from './SectionIntro'

export default function ProcessSection() {
  return (
    <section className="bg-white py-16 text-brand-navy md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Sourcing process"
          title="A clear workflow for overseas buyers"
          description="Every sourcing project is different, but the working process should remain organized, documented, and easy to follow."
          align="center"
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-5">
          {processSteps.map((step) => (
            <article key={step.step} className="relative rounded-2xl border border-brand-line bg-brand-ice p-6 text-brand-navy">
              <p className="text-sm font-bold text-brand-blue">{step.step}</p>
              <h3 className="mt-4 text-lg font-bold tracking-tight">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-brand-slate">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
