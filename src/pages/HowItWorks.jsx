import PageHero from '@/components/shared/PageHero.jsx'
import ProcessSection from '@/components/home/ProcessSection.jsx'
import InquiryFormSection from '@/components/home/InquiryFormSection.jsx'
import { processSteps } from '@/data/siteData.js'

export default function HowItWorks() {
  return (
    <main>
      <PageHero
        eyebrow="How it works"
        title="From sourcing brief to supplier follow-up and shipment handover"
        description="Our workflow keeps decisions practical. You share the product brief, we screen suppliers, compare options, support sampling, follow production, and coordinate shipment details with your China-side suppliers."
      />
      <ProcessSection />
      <section className="bg-sourcing-soft py-16 text-sourcing-ink md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-5">
            {processSteps.map((step) => (
              <article key={step.step} className="grid gap-5 rounded-2xl border border-sourcing-line bg-white p-6 shadow-sm md:grid-cols-[7rem_1fr] md:p-8">
                <div className="text-4xl font-bold text-sourcing-blue">{step.step}</div>
                <div>
                  <h2 className="text-2xl font-bold text-sourcing-navy">{step.title}</h2>
                  <p className="mt-3 text-base leading-7 text-sourcing-muted">{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <InquiryFormSection />
    </main>
  )
}
