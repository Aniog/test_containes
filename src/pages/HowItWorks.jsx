import PageHero from '@/components/site/PageHero'
import SectionHeader from '@/components/site/SectionHeader'
import { processSteps } from '@/siteData'

function HowItWorks() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="A sourcing process built for overseas buyer visibility"
        description="Our workflow is designed to keep supplier screening, factory review, quality checkpoints, and shipment preparation structured and practical."
        titleId="how-hero-title"
        descriptionId="how-hero-desc"
        imageId="how-hero-workflow-73bf41"
        imageContext="China factory workflow planning with production schedule, quality inspection checkpoints, and export shipment preparation for overseas buyers."
        imageAlt="Factory workflow planning and inspection coordination"
      />

      <section className="py-16 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Process"
            title="Step-by-step support from inquiry to shipping handover"
            description="The goal is simple: keep decision points clear, communication flowing, and quality or timeline risks visible before they become bigger problems."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-5">
            {processSteps.map((step) => (
              <article key={step.step} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-sky-700">Step {step.step}</p>
                <p className="mt-4 text-xl font-semibold text-slate-900">{step.title}</p>
                <p className="mt-4 text-base leading-7 text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default HowItWorks
