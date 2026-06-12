import CtaSection from '@/components/sections/CtaSection'
import PageHero from '@/components/sections/PageHero'
import ProcessSection from '@/components/sections/ProcessSection'
import { processSteps } from '@/data/siteData'

export default function HowItWorks() {
  return (
    <main>
      <PageHero
        eyebrow="How it works"
        title="A structured sourcing process from brief to shipment"
        text="SSourcing China keeps each step visible: requirements, supplier options, samples, production updates, inspection, and shipping coordination."
      />
      <ProcessSection />
      <section className="bg-white py-16 text-slate-900 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-5">
            {processSteps.map((step, index) => (
              <article key={step.title} className="grid gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-[120px_1fr]">
                <div className="text-4xl font-bold text-blue-700">{String(index + 1).padStart(2, '0')}</div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-950">{step.title}</h2>
                  <p className="mt-2 leading-7 text-slate-700">{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaSection />
    </main>
  )
}
