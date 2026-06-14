import React from 'react'
import { Link } from 'react-router-dom'
import { Search, ShieldCheck, ClipboardCheck, Ship, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const steps = [
  {
    number: '01',
    title: 'Tell us what you need',
    description: 'Share your product requirements, target price, quantity, and timeline. The more detail you provide, the faster we can match you with the right suppliers.',
    icon: Search,
  },
  {
    number: '02',
    title: 'We find and verify suppliers',
    description: 'We search our vetted factory network, check credentials, and shortlist the best matches. You review profiles and we arrange video calls or factory visits if needed.',
    icon: ShieldCheck,
  },
  {
    number: '03',
    title: 'We manage production and QC',
    description: 'We monitor production timelines, conduct inspections at key stages, and provide detailed reports with photos and measurements.',
    icon: ClipboardCheck,
  },
  {
    number: '04',
    title: 'We coordinate shipping',
    description: 'We handle consolidation, customs documentation, and freight forwarding. You receive tracking updates until goods arrive at your warehouse.',
    icon: Ship,
  },
]

const timeline = [
  { phase: 'Consultation', duration: '1-2 days', description: 'Requirements review and sourcing plan' },
  { phase: 'Supplier Matching', duration: '5-10 days', description: 'Factory search, verification, and shortlisting' },
  { phase: 'Sampling', duration: '2-4 weeks', description: 'Sample production, shipping, and approval' },
  { phase: 'Production', duration: '2-8 weeks', description: 'Mass production with inline monitoring' },
  { phase: 'Inspection', duration: '3-5 days', description: 'Final inspection and report delivery' },
  { phase: 'Shipping', duration: '1-4 weeks', description: 'Logistics, customs, and delivery' },
]

export default function HowItWorks() {
  return (
    <div className="flex flex-col">
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 id="how-it-works-title" className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              How It Works
            </h1>
            <p id="how-it-works-subtitle" className="mt-4 text-lg text-slate-600">
              A clear, step-by-step process that takes you from inquiry to delivery with full visibility and control.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {steps.map((step) => (
              <div
                key={step.number}
                id={`step-${step.number}-section`}
                className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-slate-300">{step.number}</span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-900">
                    <step.icon className="h-5 w-5" />
                  </div>
                </div>
                <h2 id={`step-${step.number}-title`} className="mt-4 text-xl font-bold text-slate-900">
                  {step.title}
                </h2>
                <p id={`step-${step.number}-desc`} className="mt-3 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 id="timeline-title" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Typical timeline
            </h2>
            <p id="timeline-subtitle" className="mt-4 text-lg text-slate-600">
              Every project is different, but most sourcing engagements follow this general schedule.
            </p>
          </div>
          <div className="mt-12">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {timeline.map((item) => (
                <div key={item.phase} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <h3 id={`timeline-${item.phase.toLowerCase().replace(/ /g, '-')}-phase`} className="text-base font-semibold text-slate-900">
                      {item.phase}
                    </h3>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700">
                      {item.duration}
                    </span>
                  </div>
                  <p id={`timeline-${item.phase.toLowerCase().replace(/ /g, '-')}-desc`} className="mt-2 text-sm text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 id="process-benefits-title" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Why buyers choose our process
              </h2>
              <p id="process-benefits-subtitle" className="mt-4 text-lg text-slate-600">
                We combine local expertise with transparent communication so you always know where your order stands.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  'Dedicated English-speaking project manager',
                  'Weekly progress updates with photos and reports',
                  'Clear fee breakdown before work begins',
                  'No long-term contracts or minimum commitments',
                  'Flexible engagement: full project or individual services',
                ].map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link to="/contact">Start your sourcing project</Link>
                </Button>
              </div>
            </div>
            <div>
              <img
                data-strk-img-id="how-it-works-visual"
                data-strk-img="[process-benefits-subtitle] [process-benefits-title] [how-it-works-subtitle] [how-it-works-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Sourcing process"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
