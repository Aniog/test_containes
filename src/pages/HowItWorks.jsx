import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Search,
  ClipboardCheck,
  Factory,
  Eye,
  Truck,
  CheckCircle2,
  MessageSquare,
  FileText,
  Clock,
} from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Initial Consultation',
    desc: 'You share your product requirements including specifications, target price, quantity, and delivery timeline. We review everything and ask clarifying questions to fully understand your needs.',
    timeline: '24 hours',
    deliverables: ['Requirements assessment', 'Feasibility evaluation', 'Cost estimate overview'],
  },
  {
    num: '02',
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'Our team researches and identifies qualified suppliers from our verified network. We evaluate each candidate against your requirements and create detailed comparison profiles.',
    timeline: '5-7 business days',
    deliverables: ['3-5 supplier profiles', 'Price comparison sheet', 'Supplier capability report'],
  },
  {
    num: '03',
    icon: FileText,
    title: 'Factory Verification',
    desc: 'We visit shortlisted factories in person to verify their legitimacy, production capacity, quality systems, and compliance. You receive a detailed report for each factory.',
    timeline: '5-10 business days',
    deliverables: ['Factory audit reports', 'Photo documentation', 'Risk assessment'],
  },
  {
    num: '04',
    icon: ClipboardCheck,
    title: 'Samples & Negotiation',
    desc: 'We arrange product samples, evaluate them against your specifications, and help you select the best supplier. Our team negotiates pricing, payment terms, and delivery schedules on your behalf.',
    timeline: '7-15 business days',
    deliverables: ['Sample evaluation report', 'Final pricing', 'Draft purchase agreement'],
  },
  {
    num: '05',
    icon: Factory,
    title: 'Production & Monitoring',
    desc: 'Once you approve the order, we monitor production progress through regular factory visits and weekly reports. We flag any issues early and work with the factory to resolve them.',
    timeline: 'Varies by product',
    deliverables: ['Weekly progress reports', 'Production photos', 'Timeline updates'],
  },
  {
    num: '06',
    icon: Eye,
    title: 'Quality Inspection',
    desc: 'Our QC team conducts pre-shipment inspections using AQL sampling standards. We check product quality, quantity, packaging, and labeling before authorizing shipment.',
    timeline: '1-3 business days',
    deliverables: ['Inspection report', 'Pass/fail determination', 'Photo evidence'],
  },
  {
    num: '07',
    icon: Truck,
    title: 'Shipping & Delivery',
    desc: 'We handle all logistics including packing, documentation, customs clearance, and freight booking. You receive tracking information and delivery confirmation.',
    timeline: 'Varies by method',
    deliverables: ['Shipping documents', 'Tracking number', 'Customs paperwork'],
  },
]

export default function HowItWorks() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-dark py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 block">Our Process</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">How Our Sourcing Process Works</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            A transparent, step-by-step process designed to minimize risk and deliver results. Here is exactly what to expect when working with us.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical connector line */}
            <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

            <div className="space-y-12">
              {steps.map((step, i) => {
                const Icon = step.icon
                return (
                  <div key={step.num} className="relative flex gap-6 lg:gap-10">
                    {/* Step number circle */}
                    <div className="relative z-10 w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div className="flex-1 pb-2">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="text-xs font-bold text-accent uppercase tracking-wider">Step {step.num}</span>
                        <span className="flex items-center gap-1 text-xs text-text-muted">
                          <Clock className="w-3 h-3" />
                          {step.timeline}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-text-primary mb-3">{step.title}</h3>
                      <p className="text-text-secondary leading-relaxed mb-4">{step.desc}</p>
                      <div className="bg-surface rounded-lg p-4">
                        <p className="text-xs font-semibold text-text-primary uppercase tracking-wider mb-2">Deliverables</p>
                        <ul className="space-y-1.5">
                          {step.deliverables.map((d) => (
                            <li key={d} className="flex items-center gap-2 text-sm text-text-secondary">
                              <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="bg-surface-alt py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-text-primary mb-8 text-center">Typical Timeline Overview</h2>
          <div className="bg-white rounded-xl border border-border overflow-hidden">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
              {[
                { phase: 'Supplier Shortlist', time: '1 Week' },
                { phase: 'Verification & Samples', time: '2-3 Weeks' },
                { phase: 'Production', time: '4-8 Weeks' },
                { phase: 'QC & Shipping', time: '2-4 Weeks' },
              ].map((item) => (
                <div key={item.phase} className="p-5 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">{item.time}</div>
                  <div className="text-sm text-text-secondary">{item.phase}</div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm text-text-muted text-center mt-4">Timelines vary based on product complexity and order size. We provide specific timelines with every quote.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Ready to Get Started?</h2>
          <p className="text-text-secondary mb-8">Share your sourcing requirements and we will respond within 24 hours.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
