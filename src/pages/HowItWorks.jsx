import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { Link } from 'react-router-dom'
import {
  MessageSquareText,
  Search,
  ShieldCheck,
  PackageCheck,
  Ship,
  ArrowRight,
  FileText,
  Percent,
  ClipboardCheck,
} from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'
import SectionHeading from '@/components/shared/SectionHeading'
import CtaBand from '@/components/shared/CtaBand'

const steps = [
  {
    icon: MessageSquareText,
    number: '01',
    title: 'Inquiry & briefing',
    duration: 'Day 1–2',
    description:
      'You send us your product specifications, target quantity, target price, quality requirements, and destination. We review feasibility, ask clarifying questions, and send you a written service quotation.',
    outputs: ['Confirmed requirement brief', 'Transparent service quote'],
  },
  {
    icon: Search,
    number: '02',
    title: 'Sourcing & sampling',
    duration: 'Week 1–3',
    description:
      'We screen 20–40 candidate factories, verify the strongest ones, and build a shortlist with compared quotes. Samples are arranged from your top choices so you can evaluate real quality before committing.',
    outputs: ['Supplier shortlist report', 'Samples delivered to you', 'Audit reports for finalists'],
  },
  {
    icon: ShieldCheck,
    number: '03',
    title: 'Order placement & deposit protection',
    duration: 'Week 3–4',
    description:
      'We help you finalize specifications, contract terms, and payment structure with the chosen factory. Every detail — materials, tolerances, packaging, labeling, delivery date — is confirmed in writing before the deposit is paid.',
    outputs: ['Signed specification sheet', 'Negotiated contract terms', 'Production schedule'],
  },
  {
    icon: PackageCheck,
    number: '04',
    title: 'Production follow-up & quality control',
    duration: 'Week 4–10',
    description:
      'We track production milestones, visit the factory at critical stages, and inspect the goods against your approved sample using AQL standards. The balance payment is only released after a passed pre-shipment inspection that you approve.',
    outputs: ['Weekly status reports', 'Inspection reports within 24h', 'Your written shipment approval'],
  },
  {
    icon: Ship,
    number: '05',
    title: 'Shipping & delivery',
    duration: 'Week 10+',
    description:
      'We book freight, consolidate cargo if needed, prepare the export document package, and track the shipment to your destination port. Your local customs broker receives everything needed for smooth clearance.',
    outputs: ['Complete export documents', 'Live shipment tracking', 'Delivery confirmation'],
  },
]

const feeModels = [
  {
    icon: ClipboardCheck,
    title: 'Fixed-fee services',
    description:
      'Factory audits, inspections, and loading supervision are charged per visit at a fixed rate. Ideal if you manage suppliers yourself and only need eyes on the ground.',
    example: 'Typical range: USD 200–400 per man-day',
  },
  {
    icon: Percent,
    title: 'Sourcing commission',
    description:
      'For end-to-end sourcing, a transparent percentage of the order value, agreed before we start. Covers sourcing, negotiation, follow-up, QC coordination, and shipping support.',
    example: 'Typical range: 5–10% depending on order value and complexity',
  },
  {
    icon: FileText,
    title: 'Fixed project fee',
    description:
      'For larger or recurring programs, a monthly or per-project fee. Predictable cost for brands with continuous purchasing from China.',
    example: 'Quoted individually after a scoping call',
  },
]

const HowItWorks = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="relative overflow-hidden bg-ink">
        <div
          className="absolute inset-0"
          data-strk-bg-id="hiw-bg-2f48d7"
          data-strk-bg="[hiw-subtitle] [hiw-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-ink/75" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-300">
              How It Works
            </p>
            <h1 id="hiw-title" className="mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
              From product brief to your warehouse, in five managed steps
            </h1>
            <p id="hiw-subtitle" className="mt-5 text-lg leading-relaxed text-slate-300">
              A typical first order takes 8–12 weeks including production and sea
              freight. You receive written outputs at every stage — and nothing moves
              forward without your approval.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent-500 px-6 py-3 text-base font-semibold text-ink transition-colors hover:bg-accent-400"
            >
              Start Step 1 — It Is Free <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute bottom-8 left-6 top-8 hidden w-px bg-line md:block" />
            <div className="space-y-10">
              {steps.map((step) => (
                <div key={step.number} className="relative flex flex-col gap-6 md:flex-row">
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white shadow-sm">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1 rounded-xl border border-line bg-white p-6 shadow-sm md:p-8">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h2 className="text-xl font-bold text-ink md:text-2xl">
                        <span className="mr-2 text-brand-600">{step.number}.</span>
                        {step.title}
                      </h2>
                      <span className="rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700">
                        {step.duration}
                      </span>
                    </div>
                    <p className="mt-4 text-base leading-relaxed text-slate-body">
                      {step.description}
                    </p>
                    <div className="mt-5 border-t border-line pt-4">
                      <p className="text-sm font-semibold uppercase tracking-wider text-ink">
                        What you receive
                      </p>
                      <ul className="mt-2 flex flex-wrap gap-2">
                        {step.outputs.map((output) => (
                          <li
                            key={output}
                            className="rounded-full bg-paper px-3 py-1.5 text-sm text-slate-body"
                          >
                            {output}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Pricing"
            title="Transparent fees, agreed before we start"
            description="No hidden margins inside product prices, no commissions from factories. You always know what you pay us and what you pay the supplier."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
            {feeModels.map((model) => (
              <div
                key={model.title}
                className="rounded-xl border border-line bg-white p-6 shadow-sm md:p-8"
              >
                <div className="inline-flex rounded-lg bg-brand-50 p-3">
                  <model.icon className="h-6 w-6 text-brand-600" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink md:text-xl">{model.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-slate-body">{model.description}</p>
                <p className="mt-4 rounded-lg bg-paper px-4 py-3 text-sm font-medium text-ink">
                  {model.example}
                </p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-slate-500">
            The exact fee depends on product complexity, order value, and the number
            of factories involved. Your quotation itemizes everything before any
            commitment.
          </p>
        </div>
      </section>

      <CtaBand
        title="Start with a free, no-obligation quote"
        description="Step 1 costs nothing. Send us your product brief and we will reply within one business day with a concrete plan."
      />
    </div>
  )
}

export default HowItWorks
