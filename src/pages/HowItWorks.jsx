import CTASection from '@/components/common/CTASection.jsx'
import PageHero from '@/components/common/PageHero.jsx'
import SectionHeading from '@/components/common/SectionHeading.jsx'
import { usePageSEO } from '@/hooks/usePageSEO.js'
import { useStrkImages } from '@/hooks/useStrkImages.js'
import { processSteps } from '@/data/site-content.js'

const HowItWorks = () => {
  usePageSEO(
    'How It Works | China Sourcing Process for Overseas Buyers | SSourcing China',
    'See how SSourcing China handles sourcing briefs, supplier screening, verification, production follow-up, quality inspection, and shipping coordination.',
  )

  const containerRef = useStrkImages()

  return (
    <main ref={containerRef}>
      <PageHero
        eyebrow="How it works"
        title="A practical sourcing workflow for overseas buyers working with China"
        description="Our process is built to give buyers clearer information at each stage: initial brief, supplier screening, verification, production follow-up, inspection, and shipping readiness."
        titleId="how-hero-title"
        descriptionId="how-hero-desc"
        backgroundId="how-hero-bg-7b3d81"
      />

      <section className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Process"
            title="Five steps from sourcing brief to shipment handoff"
            description="The goal is not to make sourcing sound simple. It is to create a clearer process for supplier selection, quality control, and execution."
            titleId="how-steps-title"
            descriptionId="how-steps-desc"
          />
          <div className="mt-12 space-y-6">
            {processSteps.map((step) => (
              <article key={step.step} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <div className="grid gap-6 md:grid-cols-[120px_1fr] md:items-start">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Step {step.step}</p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{step.title}</h2>
                    <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">{step.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}

export default HowItWorks
