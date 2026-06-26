import PageHeader from '@/components/PageHeader.jsx'
import ProcessSteps from '@/components/sections/ProcessSteps.jsx'
import InquiryForm from '@/components/sections/InquiryForm.jsx'

const TIMELINE = [
  { day: 'Day 0', what: 'Brief & NDA', detail: 'You share product specs, target price and quantity. We sign an NDA if needed.' },
  { day: 'Day 1–2', what: 'Scope & quote', detail: 'We confirm scope and send a fixed-fee proposal and project plan.' },
  { day: 'Day 3–7', what: 'Supplier shortlist', detail: 'You receive a shortlist of 3–5 vetted suppliers with quotes and notes.' },
  { day: 'Week 2–3', what: 'Samples & verification', detail: 'We collect samples and run factory verification on selected suppliers.' },
  { day: 'Week 3–4', what: 'Negotiation & contract', detail: 'We negotiate price, MOQ and payment terms and lock the chosen supplier.' },
  { day: 'Week 4–8', what: 'Production', detail: 'Weekly production updates and in-line QC at agreed milestones.' },
  { day: 'Final week', what: 'Pre-shipment QC', detail: 'AQL inspection with photo and video evidence; pass / hold / fail.' },
  { day: 'Shipment', what: 'Freight & delivery', detail: 'Freight booking, customs documents, tracking, delivery to your warehouse.' },
]

export default function HowItWorks() {
  return (
    <>
      <PageHeader
        eyebrow="How it works"
        title="A clear timeline from brief to delivery"
        description="Most projects move from inquiry to first shipment in 6–10 weeks. Each step has a clear deliverable that you approve before we move on."
      />

      <ProcessSteps />

      <section className="border-b border-slate-200 bg-white py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-wider text-blue-700">
            Typical timeline
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            What a first order usually looks like
          </h2>

          <ol className="mt-12 space-y-6 border-l border-slate-200 pl-6 md:pl-10">
            {TIMELINE.map((t, i) => (
              <li key={t.day} className="relative">
                <span className="absolute -left-[33px] flex h-6 w-6 items-center justify-center rounded-full bg-blue-700 text-xs font-semibold text-white md:-left-[49px] md:h-8 md:w-8 md:text-sm">
                  {i + 1}
                </span>
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <p className="text-xs font-medium uppercase tracking-wider text-blue-700">
                      {t.day}
                    </p>
                    <h3 className="text-base font-semibold text-slate-900 md:text-lg">
                      {t.what}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 md:text-base">
                    {t.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <InquiryForm />
    </>
  )
}
