import PageHero from '@/components/common/PageHero'
import { processSteps } from '@/content/siteContent'

export default function HowItWorks() {
  return (
    <main>
      <PageHero
        eyebrow="How It Works"
        title="A sourcing process built for clarity, follow-up, and risk control"
        description="The workflow is designed so overseas buyers know what happens next, what gets checked, and where local coordination adds value."
      />

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-5">
            {processSteps.map((step) => (
              <article key={step.step} className="rounded-3xl border border-slate-950/10 bg-white p-6 shadow-sm md:flex md:gap-8 md:p-8">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">{step.step}</div>
                <div className="mt-4 md:mt-0">
                  <h2 className="text-xl font-semibold text-slate-950">{step.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-700/75">{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
