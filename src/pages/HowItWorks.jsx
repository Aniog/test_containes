import PageHeader from '@/components/common/PageHeader'
import CtaBand from '@/components/common/CtaBand'
import SectionHeading from '@/components/ui/SectionHeading'
import { processSteps } from '@/data/site'
import { CheckCircle2 } from 'lucide-react'

const timeline = [
  'You send product specs, target price, quantity, and timeline.',
  'We confirm scope and feasibility within 1 business day.',
  'We shortlist 2–4 qualified factories and return a transparent quotation.',
  'You select a supplier; we run license checks and an on-site audit.',
  'Deposit is placed; production begins with weekly progress updates.',
  'Pre-shipment inspection confirms quality before goods leave the factory.',
  'We consolidate, book freight, and handle export documentation.',
  'Goods are shipped and delivered to your destination.',
]

export default function HowItWorks() {
  return (
    <>
      <PageHeader
        eyebrow="How It Works"
        title="A transparent sourcing process, step by step"
        description="No black box. From your first message to final delivery, you know exactly what is happening and what comes next."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <SectionHeading
            eyebrow="The 6 Stages"
            title="From inquiry to delivery in six defined stages"
            description="Each stage has clear deliverables, so you can track progress and make decisions with confidence."
            align="center"
          />

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => {
              const Icon = step.icon
              return (
                <div
                  key={step.id}
                  className="relative rounded-xl border border-slate-200 bg-white p-6 md:p-7 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-navy text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-3xl font-bold text-slate-200">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-brand-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                    {step.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-brand-slate">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <SectionHeading
            eyebrow="Detailed Timeline"
            title="What happens, in order"
            description="A practical walkthrough of a typical project, from your first message to goods arriving at your door."
            align="center"
          />
          <ol className="mt-12 space-y-5">
            {timeline.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
                    Step {String(i + 1).padStart(2, '0')}
                  </p>
                  <p className="mt-1 text-sm font-medium text-brand-ink">
                    {item}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
