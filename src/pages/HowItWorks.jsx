import { processSteps, sourcingFitPoints } from '@/content/siteContent'
import PageHero from '@/components/shared/PageHero'
import SectionHeading from '@/components/shared/SectionHeading'

const HowItWorks = () => {
  return (
    <div className="bg-slate-50 text-slate-900">
      <PageHero
        eyebrow="How it works"
        title="A sourcing process built for practical decision-making"
        description="Our workflow helps overseas buyers move through supplier search, verification, sampling, production follow-up, inspection, and shipment coordination with clearer visibility."
        titleId="how-hero-title"
        descriptionId="how-hero-description"
        visualId="how-hero-bg-63cf4f"
        visualBadge="Supplier selection, production follow-up, inspection, and shipment handover"
        visualNote="A process that keeps key buying checkpoints visible, instead of waiting until late-stage surprises appear."
        chips={processSteps.map((item) => item.title)}
        primaryCta={{ label: 'Get a Free Sourcing Quote', to: '/contact' }}
        secondaryCta={{ label: 'View Services', to: '/services' }}
      />

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <SectionHeading
          eyebrow="Step-by-step"
          title="From first brief to shipment handover"
          description="Each step below is designed to reduce uncertainty, keep decisions structured, and make supplier execution easier to follow from overseas."
          align="center"
        />
        <div className="mt-12 space-y-5">
          {processSteps.map((step) => (
            <article
              key={step.step}
              className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-[180px_1fr] md:p-8"
            >
              <div className="rounded-2xl bg-blue-50 p-5 text-slate-900">
                <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
                  Step {step.step}
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
                  {step.title}
                </h2>
              </div>
              <div className="space-y-5">
                <p className="text-base leading-7 text-slate-600">{step.description}</p>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                    Typical outputs
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {step.deliverables.map((deliverable) => (
                      <span
                        key={deliverable}
                        className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700"
                      >
                        {deliverable}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <SectionHeading
            eyebrow="Good fit"
            title="When buyers usually need this workflow"
            description="Our process is especially useful when the cost of unclear supplier information, missing quality control, or weak local follow-up is high."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {sourcingFitPoints.map((point) => (
              <div
                key={point}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-base leading-7 text-slate-700 shadow-sm"
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks
