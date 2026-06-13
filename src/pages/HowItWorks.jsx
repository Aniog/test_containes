import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Search, FileSearch, Handshake, Cog, Truck, ClipboardCheck, MessageSquare } from 'lucide-react'

const phases = [
  {
    icon: Search,
    phase: 'Phase 1',
    title: 'Discovery & Requirements',
    duration: '1-3 days',
    steps: [
      'You submit product details, specifications, target price, and quality requirements',
      'We clarify any open questions about materials, certifications, or packaging',
      'We define the scope of work and provide a service agreement and timeline',
    ],
  },
  {
    icon: FileSearch,
    phase: 'Phase 2',
    title: 'Supplier Research & Vetting',
    duration: '3-7 days',
    steps: [
      'We search our database and networks for suitable suppliers',
      'Initial screening of business licenses, export history, and online presence',
      'We present a shortlist of 3-5 qualified suppliers with detailed profiles',
    ],
  },
  {
    icon: ClipboardCheck,
    phase: 'Phase 3',
    title: 'Factory Audits (if needed)',
    duration: '3-5 days',
    steps: [
      'On-site visit to shortlisted factories by our audit team',
      'Evaluation of production capacity, quality systems, and working conditions',
      'Detailed audit report with photos, findings, and recommendations',
    ],
  },
  {
    icon: Handshake,
    phase: 'Phase 4',
    title: 'Negotiation & Sampling',
    duration: '1-3 weeks',
    steps: [
      'We negotiate pricing, payment terms, and delivery schedules',
      'Sample requests are coordinated with the factory',
      'Samples are shipped to you for evaluation and approval',
    ],
  },
  {
    icon: Cog,
    phase: 'Phase 5',
    title: 'Production & QC Monitoring',
    duration: '2-8 weeks',
    steps: [
      'Production schedule is established and tracked weekly',
      'During-production inspections at key milestones',
      'Regular photo/video updates and progress reports sent to you',
    ],
  },
  {
    icon: ClipboardCheck,
    phase: 'Phase 6',
    title: 'Pre-Shipment Inspection',
    duration: '2-4 days before shipment',
    steps: [
      'Final quality check using AQL sampling standards',
      'Packaging and labeling verification',
      'Inspection report with pass/fail recommendation',
    ],
  },
  {
    icon: Truck,
    phase: 'Phase 7',
    title: 'Shipping & Delivery',
    duration: '1-6 weeks',
    steps: [
      'We arrange freight (sea, air, or express) based on your preference',
      'Export customs clearance and documentation handled',
      'Real-time tracking until delivery at your door',
    ],
  },
  {
    icon: MessageSquare,
    phase: 'Phase 8',
    title: 'Post-Delivery Support',
    duration: 'Ongoing',
    steps: [
      'Follow-up on product feedback and any issues',
      'Support with warranty or after-sales concerns',
      'Continuous improvement for repeat orders',
    ],
  },
]

export default function HowItWorks() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-neutral-900 py-16 md:py-20">
        <div className="container-section">
          <div className="max-w-3xl">
            <p className="text-brand-400 font-semibold text-sm mb-4 uppercase tracking-wide">How It Works</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              How Sourcing with Us Works
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              A transparent, step-by-step process designed to minimize risk and maximize results.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-section max-w-4xl mx-auto">
          <div className="space-y-12">
            {phases.map((phase, i) => (
              <div key={i} className="relative pl-16 md:pl-20">
                {/* Timeline line */}
                {i < phases.length - 1 && (
                  <div className="absolute left-7 md:left-9 top-14 bottom-0 w-0.5 bg-brand-100" />
                )}
                {/* Step number */}
                <div className="absolute left-0 top-0 w-14 h-14 md:w-16 md:h-16 bg-brand-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{String(i + 1).padStart(2, '0')}</span>
                </div>
                {/* Content */}
                <div className="p-6 md:p-8 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center">
                      <phase.icon className="w-4 h-4 text-brand-600" />
                    </div>
                    <span className="text-xs font-semibold text-brand-600 bg-brand-50 px-2.5 py-0.5 rounded-full">{phase.phase}</span>
                    <span className="text-xs text-neutral-500">{phase.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">{phase.title}</h3>
                  <ul className="space-y-2">
                    {phase.steps.map((step, si) => (
                      <li key={si} className="flex items-start gap-3 text-sm text-neutral-600">
                        <div className="w-1.5 h-1.5 bg-brand-500 rounded-full flex-shrink-0 mt-2" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-section text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto mb-8">
            Tell us about your product and we will guide you through every step.
          </p>
          <Link to="/contact" className="btn-primary text-lg px-8 py-4">
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}