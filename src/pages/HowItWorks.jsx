import PageIntro from '../components/common/PageIntro'
import ProcessSection from '../components/sections/ProcessSection'
import CTASection from '../components/sections/CTASection'

export default function HowItWorks() {
  return (
    <>
      <PageIntro eyebrow="How it works" title="A structured sourcing workflow with clear checkpoints" text="SSourcing China starts with requirements and moves step by step through supplier screening, verification, samples, production follow-up, inspection, and logistics coordination." />
      <ProcessSection />
      <section className="bg-white py-16 text-slate-900 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            ['Before deposit', 'Clarify supplier identity, production scope, sample details, quotation assumptions, payment terms, and key risks.'],
            ['During production', 'Track milestones, packaging information, supplier updates, and any changes that could affect quality or delivery.'],
            ['Before shipment', 'Coordinate inspection, resolve findings, check labels/cartons, and align factory handoff with the forwarder.'],
          ].map(([title, text]) => (
            <article key={title} className="rounded-3xl border border-slate-200 bg-slate-100 p-8 text-slate-900">
              <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  )
}
