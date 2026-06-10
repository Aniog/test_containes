import { Link } from 'react-router-dom'
import {
  MessageSquare, Search, Package, ClipboardCheck, Truck,
  ArrowRight, CheckCircle2
} from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Submit Your Requirements',
    desc: 'Fill out our inquiry form with your product details, target price, quantity, quality standards, and delivery timeline. The more detail you provide, the faster we can help.',
    details: ['Product specifications & drawings', 'Target FOB/CIF price', 'Order quantity & MOQ flexibility', 'Required certifications', 'Delivery timeline'],
  },
  {
    icon: Search,
    step: '02',
    title: 'Supplier Research & Shortlisting',
    desc: 'Our team searches our verified supplier database and the broader market to identify 3-5 qualified factories. We compare pricing, capacity, and quality systems.',
    details: ['Database search + market research', 'Initial supplier screening', 'Price & capability comparison', 'Shortlist presentation with recommendations'],
  },
  {
    icon: Package,
    step: '03',
    title: 'Sampling & Approval',
    desc: 'We coordinate sample production, review samples on your behalf, and ship them to you for final approval. We handle revisions until you\'re satisfied.',
    details: ['Sample request & coordination', 'Quality review before shipping', 'Revision management', 'Final approval confirmation'],
  },
  {
    icon: ClipboardCheck,
    step: '04',
    title: 'Production & Quality Control',
    desc: 'Once you approve, we place the order and monitor production milestones. Our inspectors visit the factory to check quality at critical stages.',
    details: ['Order placement & deposit handling', 'Production timeline tracking', 'In-line & pre-shipment inspections', 'Detailed QC reports with photos'],
  },
  {
    icon: Truck,
    step: '05',
    title: 'Shipping & Delivery',
    desc: 'We arrange freight (sea, air, or express), handle export documentation, coordinate customs clearance, and track your shipment until it arrives.',
    details: ['Freight booking & optimization', 'Export documentation', 'Customs clearance support', 'Delivery confirmation & follow-up'],
  },
]

export default function HowItWorks() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              How It Works
            </h1>
            <p className="mt-6 text-lg text-slate-200 leading-relaxed">
              Our structured 5-step process ensures transparency, quality, and on-time delivery for every sourcing project.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, idx) => (
              <div key={step.step} className="relative">
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute left-7 top-20 bottom-0 w-px bg-slate-200" />
                )}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-accent bg-accent/10 px-2 py-0.5 rounded">Step {step.step}</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-800">{step.title}</h2>
                    <p className="mt-3 text-slate-600 leading-relaxed">{step.desc}</p>
                    <ul className="mt-4 space-y-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                          {detail}
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

      {/* Timeline */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-8">
            Typical Timeline
          </h2>
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left px-6 py-3 font-semibold text-slate-700">Phase</th>
                  <th className="text-left px-6 py-3 font-semibold text-slate-700">Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr><td className="px-6 py-3 text-slate-700">Supplier Research</td><td className="px-6 py-3 text-slate-600">5–10 business days</td></tr>
                <tr><td className="px-6 py-3 text-slate-700">Sampling</td><td className="px-6 py-3 text-slate-600">7–15 days</td></tr>
                <tr><td className="px-6 py-3 text-slate-700">Production</td><td className="px-6 py-3 text-slate-600">15–45 days (varies)</td></tr>
                <tr><td className="px-6 py-3 text-slate-700">Quality Inspection</td><td className="px-6 py-3 text-slate-600">1–3 days</td></tr>
                <tr><td className="px-6 py-3 text-slate-700">Shipping (Sea)</td><td className="px-6 py-3 text-slate-600">20–35 days</td></tr>
                <tr><td className="px-6 py-3 text-slate-700">Shipping (Air)</td><td className="px-6 py-3 text-slate-600">5–10 days</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-slate-500 text-center">
            Timelines vary based on product complexity, order size, and shipping method.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Start Your Sourcing Project Today
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Submit your requirements and receive a sourcing plan within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center mt-8 bg-white text-accent hover:bg-slate-50 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
