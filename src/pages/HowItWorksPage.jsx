import React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Send,
  Search,
  FileCheck,
  ClipboardList,
  Monitor,
  Ship,
  CheckCircle2,
} from 'lucide-react'

const steps = [
  {
    step: 1,
    icon: Send,
    title: 'Submit Your Sourcing Request',
    description: 'Tell us what you need. Provide product details, specifications, target quantity, budget range, and your timeline. The more information you share, the more accurate our sourcing will be.',
    details: [
      'Product description and specifications',
      'Target quantity and order frequency',
      'Budget range and target price',
      'Quality standards and certifications required',
      'Preferred timeline and delivery date',
    ],
  },
  {
    step: 2,
    icon: Search,
    title: 'Supplier Identification & Matching',
    description: 'Our team searches through our verified supplier database, industry networks, and trade resources to identify manufacturers that match your requirements. We evaluate each supplier on capability, quality, pricing, and reliability.',
    details: [
      'Database and network-based supplier search',
      'Initial capability and capacity assessment',
      'Quotation collection and comparison',
      'Background check and reference verification',
      'Shortlist presentation with detailed analysis',
    ],
  },
  {
    step: 3,
    icon: FileCheck,
    title: 'Factory Verification & Sampling',
    description: 'Before you commit, we verify the supplier through on-site audits and coordinate sample production. This ensures you are working with a legitimate manufacturer and that the product meets your expectations.',
    details: [
      'On-site factory audit and verification',
      'Business license and certification check',
      'Sample request and quality evaluation',
      'Sample shipping to your location',
      'Feedback collection and revision management',
    ],
  },
  {
    step: 4,
    icon: ClipboardList,
    title: 'Order Confirmation & Production',
    description: 'Once you approve the supplier and samples, we help finalize the order details, negotiate terms, and monitor the production process. We keep you informed at every stage.',
    details: [
      'Contract review and negotiation support',
      'Order confirmation and deposit arrangement',
      'Production schedule monitoring',
      'Regular progress reports and updates',
      'Issue identification and resolution',
    ],
  },
  {
    step: 5,
    icon: Monitor,
    title: 'Quality Control & Inspection',
    description: 'Our quality control team conducts inspections at key production stages. We check products against your specifications and provide detailed reports with photos and measurements.',
    details: [
      'Pre-production material inspection',
      'During-production quality checks',
      'Pre-shipment final inspection',
      'Detailed inspection reports',
      'Non-conformance handling and resolution',
    ],
  },
  {
    step: 6,
    icon: Ship,
    title: 'Shipping & Delivery',
    description: 'We coordinate the entire logistics process — from factory pickup to delivery at your destination. This includes freight forwarding, customs documentation, and real-time tracking.',
    details: [
      'Freight forwarding arrangement (sea/air)',
      'Customs documentation preparation',
      'Cargo insurance coordination',
      'Container loading supervision',
      'Real-time shipment tracking',
    ],
  },
]

export default function HowItWorksPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">How It Works</h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              A transparent, step-by-step process from your initial inquiry to final delivery. We keep you informed at every stage so there are no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quick overview */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16 lg:mb-20">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-3">
                  {s.step}
                </div>
                <p className="text-xs font-medium text-slate-700">{s.title.split(' & ')[0]}</p>
              </div>
            ))}
          </div>

          {/* Detailed steps */}
          <div className="space-y-16 lg:space-y-20">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start`}
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-blue-700" />
                    </div>
                    <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">Step {step.step}</span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">{step.title}</h2>
                  <p className="text-slate-600 leading-relaxed mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, di) => (
                      <li key={di} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="aspect-video bg-slate-100 rounded-xl border border-slate-200 flex items-center justify-center">
                    <step.icon className="w-16 h-16 text-slate-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-8 text-center">Typical Timeline</h2>
          <div className="bg-white rounded-xl border border-slate-200 p-6 lg:p-8">
            <div className="space-y-4">
              {[
                { phase: 'Supplier Identification', duration: '1-2 weeks' },
                { phase: 'Factory Verification', duration: '1-2 weeks' },
                { phase: 'Sample Production & Evaluation', duration: '2-4 weeks' },
                { phase: 'Production', duration: '4-8 weeks' },
                { phase: 'Quality Inspection', duration: '1 week' },
                { phase: 'Shipping & Delivery', duration: '2-6 weeks' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
                  <span className="text-slate-700 font-medium">{item.phase}</span>
                  <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full">{item.duration}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-500 mt-4">
              * Timelines vary depending on product complexity, order size, and shipping method. We provide a detailed timeline for each project.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Submit your sourcing request and we will begin identifying qualified suppliers for your project.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-700 text-white text-base font-semibold rounded-lg hover:bg-blue-800 transition-colors"
          >
            Submit Your Request
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
