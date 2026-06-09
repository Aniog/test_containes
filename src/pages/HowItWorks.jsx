import { Link } from 'react-router-dom'
import { ArrowRight, Phone, ClipboardCheck, Search, FileCheck, Factory, Truck, Ship, CheckCircle2 } from 'lucide-react'

const phases = [
  {
    step: 'Phase 1',
    title: 'Requirement Definition',
    time: 'Day 1–3',
    icon: ClipboardCheck,
    details: [
      'Share your product specifications, target price, order volume, and timeline',
      'We analyze your requirements and ask clarifying questions',
      'Define quality standards, certifications needed, and compliance requirements',
      'Agree on communication plan and project milestones',
    ],
  },
  {
    step: 'Phase 2',
    title: 'Supplier Search & Screening',
    time: 'Week 1–2',
    icon: Search,
    details: [
      'Search our existing network of verified manufacturers',
      'Identify and reach out to new potential suppliers',
      'Screen responses against your requirements',
      'Present a shortlist with comparative analysis and our recommendation',
    ],
  },
  {
    step: 'Phase 3',
    title: 'Factory Audit & Verification',
    time: 'Week 2–3',
    icon: FileCheck,
    details: [
      'Schedule and conduct on-site factory audits',
      'Verify business licenses, certifications, and references',
      'Assess production capacity, equipment, and quality systems',
      'Deliver detailed audit report with photos and scores',
    ],
  },
  {
    step: 'Phase 4',
    title: 'Sampling & Negotiation',
    time: 'Week 3–4',
    icon: Factory,
    details: [
      'Request and coordinate samples from shortlisted suppliers',
      'Review samples for quality and specification compliance',
      'Negotiate pricing, payment terms, and production schedule',
      'Help you select the best supplier and finalize the contract',
    ],
  },
  {
    step: 'Phase 5',
    title: 'Production & Quality Control',
    time: 'Week 4–Production End',
    icon: Truck,
    details: [
      'Confirm production schedule and milestone timeline',
      'Conduct pre-production inspection of raw materials',
      'Perform during-production random inspections',
      'Carry out pre-shipment AQL inspection before shipping',
    ],
  },
  {
    step: 'Phase 6',
    title: 'Shipping & Delivery',
    time: 'Production End–Delivery',
    icon: Ship,
    details: [
      'Compare freight options and book shipping (sea/air/rail/express)',
      'Prepare and verify all export documentation',
      'Supervise container loading at factory',
      'Track shipment and coordinate customs clearance until delivery',
    ],
  },
]

const addOns = [
  { title: 'Product Photography', desc: 'Professional product photos for your e-commerce listings and marketing materials.' },
  { title: 'Compliance Testing', desc: 'Coordinate CE, FDA, FCC, RoHS, REACH testing with accredited labs in China.' },
  { title: 'Packaging Design', desc: 'Custom packaging design and production coordination with packaging suppliers.' },
  { title: 'Ongoing Sourcing', desc: 'Monthly retainer model for buyers with continuous sourcing needs across categories.' },
]

export default function HowItWorks() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold-400 font-semibold text-sm tracking-wide uppercase mb-4">How It Works</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Your Step-by-Step Sourcing Process
            </h1>
            <p className="text-xl text-brand-200 leading-relaxed">
              A structured, transparent process that gives you full visibility from requirements to delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-0">
            {phases.map((phase, i) => (
              <div key={i} className="relative flex gap-6 pb-12 last:pb-0">
                {/* Timeline line */}
                {i < phases.length - 1 && (
                  <div className="absolute left-[27px] top-14 bottom-0 w-0.5 bg-brand-100" />
                )}
                {/* Step circle */}
                <div className="relative z-10 flex items-center justify-center w-14 h-14 bg-brand-600 text-white rounded-full shrink-0 font-bold text-sm shadow-md">
                  {i + 1}
                </div>
                {/* Content */}
                <div className="flex-1 pt-2">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-sm font-semibold text-gold-600 bg-gold-50 px-3 py-1 rounded-full">{phase.step}</span>
                    <span className="text-sm text-slate-400">{phase.time}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">{phase.title}</h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {phase.details.map((d, j) => (
                      <div key={j} className="flex items-start gap-2.5 bg-slate-50 rounded-lg p-4">
                        <CheckCircle2 className="w-5 h-5 text-gold-500 mt-0.5 shrink-0" />
                        <span className="text-sm text-slate-700 leading-relaxed">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Additional Services</h2>
            <p className="text-lg text-slate-600">Extra support to help your products succeed in your market.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((a, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-2">{a.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Let's Start Your Sourcing Project</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            The first step is a free consultation. Tell us what you need, and we'll outline a plan with clear timelines and costs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg">
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:+8613800000000" className="inline-flex items-center justify-center gap-2 border-2 border-slate-300 hover:border-brand-600 text-slate-700 hover:text-brand-600 font-semibold px-8 py-4 rounded-lg transition-colors">
              <Phone className="w-5 h-5" />
              Schedule a Call
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
