import { useStrkImages } from '@/lib/useStrkImages'
import { processSteps } from '@/data/siteData'
import InquiryForm from '@/components/forms/InquiryForm'
import PageHero from '@/components/sections/PageHero'
import ProcessSection from '@/components/sections/ProcessSection'

export default function HowItWorks() {
  const containerRef = useStrkImages()

  return (
    <main ref={containerRef}>
      <PageHero
        eyebrow="How it works"
        title="A documented sourcing process from brief to shipment handover"
        description="SSourcing China keeps the workflow organized so overseas buyers can compare suppliers, confirm details, track progress, and review quality checkpoints with better visibility."
      />
      <ProcessSection />
      <section className="bg-brand-mist py-16 text-brand-navy md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-3xl border border-brand-line bg-white p-4 shadow-b2b">
            <img
              alt="Supplier meeting and production planning in China"
              className="h-72 w-full rounded-2xl object-cover md:h-96"
              data-strk-img-id="workflow-supplier-meeting-a621bf"
              data-strk-img="[workflow-image-desc] [workflow-image-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-cyan">Working rhythm</p>
            <h2 id="workflow-image-title" className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Clear communication at each decision point</h2>
            <p id="workflow-image-desc" className="mt-4 text-lg leading-8 text-brand-slate">
              The process includes supplier comparison notes, sample and quotation clarifications, inspection planning, production updates, and shipment handover coordination.
            </p>
            <div className="mt-7 grid gap-3">
              {processSteps.map((step) => (
                <div key={step.step} className="rounded-xl border border-brand-line bg-white p-4">
                  <p className="text-sm font-bold text-brand-blue">{step.step} · {step.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InquiryForm />
        </div>
      </section>
    </main>
  )
}
