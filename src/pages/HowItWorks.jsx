import PageHero from '@/components/common/PageHero'
import SectionHeader from '@/components/common/SectionHeader'
import { processSteps, problemsWeSolve } from '@/data/siteContent'
import { usePageMeta } from '@/hooks/usePageMeta'

const HowItWorks = () => {
  usePageMeta({
    title: 'How It Works | SSourcing China',
    description:
      'See how SSourcing China supports supplier screening, factory verification, production follow-up, quality inspection, and shipment coordination.',
  })

  return (
    <div>
      <PageHero
        eyebrow="How it works"
        title="A structured sourcing process for overseas buyers"
        description="We help bring more order and visibility to sourcing from China, from the first request through production and shipment readiness."
        titleId="how-it-works-page-title"
        descriptionId="how-it-works-page-description"
        visual={
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 p-4 shadow-sm">
            <div
              className="absolute inset-0 opacity-0"
              data-strk-bg-id="how-it-works-page-bg-c83d4f"
              data-strk-bg="[how-it-works-page-description] [how-it-works-page-title]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="1200"
            />
            <div className="relative min-h-[360px] rounded-[1.5rem] bg-slate-900/35 p-8">
              <div className="flex h-full items-end">
                <p className="max-w-md text-sm leading-7 text-white/90">
                  Better sourcing control comes from step-by-step supplier checks, timely inspection points, and clear production follow-up.
                </p>
              </div>
            </div>
          </div>
        }
      />

      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Process"
            title="Five working stages"
            description="Each stage is designed to improve clarity, reduce surprises, and help you make better sourcing decisions with local support in China."
          />
          <div className="mt-12 space-y-6">
            {processSteps.map((step) => (
              <article key={step.step} className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:grid-cols-[120px_1fr] lg:items-start lg:gap-8 lg:p-8">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                  Step {step.step}
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-slate-950">{step.title}</h2>
                  <p className="mt-3 text-base leading-7 text-slate-600">{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <SectionHeader
              eyebrow="Where buyers benefit"
              title="The process helps address the usual risk points"
              description="Most sourcing problems come from limited visibility, inconsistent supplier follow-up, or quality issues discovered too late."
            />
          </div>
          <div className="grid gap-4">
            {problemsWeSolve.map((problem) => (
              <div key={problem} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-700">
                {problem}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks
