import { Link } from 'react-router-dom'
import {
  MessageSquare,
  FileSearch,
  Building,
  CheckCircle,
  Boxes,
  Ship,
  ArrowRight,
  Clock,
  ShieldCheck,
} from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Tell Us Your Needs',
    duration: 'Day 1',
    description:
      'Fill out our inquiry form or schedule a call. Share your product specifications, target price, quantity, quality standards, and any supplier preferences. The more detail you provide, the better our shortlist will be.',
    details: [
      'Product specs, materials, dimensions',
      'Target FOB price and MOQ',
      'Quality certifications required',
      'Packaging and labeling needs',
      'Delivery destination and timeline',
    ],
  },
  {
    number: '02',
    icon: FileSearch,
    title: 'Supplier Search',
    duration: 'Days 2–7',
    description:
      'We research across our supplier network, B2B platforms, and trade show contacts to build a shortlist of 3–5 qualified factories. Each candidate is screened for product match, capacity, export experience, and existing certifications.',
    details: [
      'Database search + external research',
      'Initial contact and interest confirmation',
      'Capability questionnaire',
      'Preliminary quotation collection',
      'Shortlist with comparison report',
    ],
  },
  {
    number: '03',
    icon: Building,
    title: 'Factory Verification',
    duration: 'Days 8–12',
    description:
      'Our team visits or audits each shortlisted factory. We verify business licenses, inspect production lines, check equipment, review quality control processes, and assess workplace conditions. You receive a detailed report with photos and our recommendation.',
    details: [
      'Business license & registration check',
      'On-site production line inspection',
      'QC system and testing equipment review',
      'Social compliance assessment',
      'Verdict: Recommended / Conditional / Not Recommended',
    ],
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Sample & Negotiation',
    duration: 'Days 13–25',
    description:
      'Once you select a factory, we coordinate sample production. We review samples against your spec checklist, manage revision rounds, and negotiate pricing, payment terms, and delivery schedules on your behalf.',
    details: [
      'Sample request and timeline coordination',
      'Sample evaluation with photo/video report',
      'Price and term negotiation',
      'Contract review (PI and payment terms)',
      'Deposit payment facilitation',
    ],
  },
  {
    number: '05',
    icon: Boxes,
    title: 'Production Monitoring',
    duration: 'Throughout Production',
    description:
      'A dedicated project manager tracks your order from raw materials to finished goods. We visit the factory at key milestones, identify issues early, and keep you updated with weekly reports.',
    details: [
      'Production schedule confirmation',
      'Weekly photo/video progress reports',
      'In-process quality checks (DUPRO)',
      'Issue escalation and resolution',
      'Pre-shipment inspection (PSI) per AQL',
    ],
  },
  {
    number: '06',
    icon: Ship,
    title: 'Shipping & Delivery',
    duration: 'Final 1–2 Weeks',
    description:
      'After final approval, we coordinate packing, labeling, and booking freight. We prepare all export documents and track the shipment until it reaches your warehouse or port of destination.',
    details: [
      'Container loading supervision',
      'Export documentation preparation',
      'Freight booking (sea/air/express)',
      'Customs paperwork support',
      'Delivery tracking to destination',
    ],
  },
]

export default function HowItWorks() {
  return (
    <div>
      {/* Header */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2 block">
            Process
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            How It Works
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Our proven 6-step sourcing process is designed to minimize risk, save time, and deliver consistent results.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-14 w-px h-16 bg-slate-200 hidden sm:block" />
                )}

                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Step number / icon */}
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center shadow-md">
                      <step.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-4">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                        Step {step.number}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-100 text-slate-600 text-xs font-medium rounded">
                        <Clock className="w-3 h-3" />
                        {step.duration}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h2>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <ul className="space-y-1.5">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm text-slate-600">
                          <ShieldCheck className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary + CTA */}
      <section className="py-16 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Typical Timeline: 2–4 Weeks to First Sample
          </h2>
          <p className="text-slate-500 mb-8">
            Depending on product complexity and factory responsiveness, most clients receive their first supplier shortlist within one week and approved samples within 3–4 weeks.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-700 text-white font-semibold rounded-md hover:bg-blue-800 transition-colors"
          >
            Start Your Project <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
