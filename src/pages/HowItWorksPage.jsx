import PageHero from '@/components/PageHero.jsx'
import SectionHeading from '@/components/SectionHeading.jsx'
import { processSteps } from '@/data/siteContent.js'

function HowItWorksPage() {
  return (
    <main>
      <PageHero
        eyebrow="How it works"
        title="A sourcing process that keeps requirements, supplier selection, and order follow-up aligned"
        description="The goal is to make the sourcing process more visible and manageable from the first brief to shipment readiness."
      >
        <div className="space-y-4 text-sm leading-7 text-ink">
          <p>
            Buyers often lose time when requirements are incomplete, supplier comparisons are weak, or production issues are discovered too late.
          </p>
          <p className="text-muted">
            A structured workflow helps reduce those gaps and creates clearer checkpoints for decision-making.
          </p>
        </div>
      </PageHero>

      <section className="bg-canvas py-16 md:py-24">
        <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Workflow"
            title="Six practical stages from brief to shipment"
            description="This process can be adapted to different product categories, order sizes, and supplier situations."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {processSteps.map((step) => (
              <article key={step.step} className="rounded-3xl border border-border-soft bg-surface p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent-strong">Step {step.step}</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink">{step.title}</h2>
                <p className="mt-4 text-sm leading-7 text-muted">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default HowItWorksPage
