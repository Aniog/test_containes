import PageHero from '@/components/shared/PageHero'
import { primaryCta, processSteps } from '@/content/siteContent'

const checkpoints = [
  'Clarify product specifications and target quantity early.',
  'Compare suppliers on fit and reliability, not just headline price.',
  'Verify supplier capability before larger commitments.',
  'Track production milestones before delays become critical.',
  'Inspect quality before shipment release.',
  'Coordinate documents and logistics handoff clearly.',
]

const HowItWorks = () => {
  return (
    <div>
      <PageHero
        eyebrow="How It Works"
        title="A straightforward sourcing process from initial brief to shipment handoff"
        description="We keep the sourcing workflow structured so overseas buyers have better visibility over supplier evaluation, quality checkpoints, and production progress."
        primaryAction={{ label: primaryCta, to: '/contact#inquiry-form' }}
        secondaryAction={{ label: 'View services', to: '/services' }}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="grid gap-5">
            {processSteps.map((step) => (
              <article key={step.step} className="rounded-[2rem] border border-site-border bg-white p-6 shadow-sm md:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Step {step.step}</p>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-site-ink">{step.title}</h2>
                <p className="mt-4 text-base leading-7 text-site-muted">{step.description}</p>
              </article>
            ))}
          </div>

          <div className="space-y-5">
            <div className="overflow-hidden rounded-[2rem] border border-site-border bg-white shadow-sm">
              <img
                alt="Production follow-up and factory coordination"
                className="h-80 w-full object-cover"
                data-strk-img-id="process-image-01"
                data-strk-img="[process-title] [process-desc]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="rounded-[2rem] border border-site-border bg-white p-6 shadow-sm md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Key checkpoints</p>
              <h2 id="process-title" className="mt-4 text-2xl font-semibold tracking-tight text-site-ink">What keeps a sourcing project under better control</h2>
              <p id="process-desc" className="mt-3 text-base leading-7 text-site-muted">
                Buyers usually gain the most value when decisions, sampling, production follow-up, and inspection are treated as connected steps rather than isolated tasks.
              </p>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-site-muted">
                {checkpoints.map((item) => (
                  <li key={item} className="rounded-2xl bg-site-bg px-4 py-3">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks
