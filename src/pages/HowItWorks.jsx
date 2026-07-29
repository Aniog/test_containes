import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, MessageSquare, Search, Factory, ClipboardCheck, ShieldCheck, Truck, Package } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Submit Your Sourcing Inquiry',
    desc: 'Fill out our inquiry form with your product requirements — type, quantity, target price, quality standards, and any certifications needed. The more detail you provide, the better we can match you with the right supplier.',
    details: [
      'Product name and specifications',
      'Target unit price and MOQ',
      'Required certifications (CE, RoHS, etc.)',
      'Packaging and labeling requirements',
      'Delivery timeline',
    ],
  },
  {
    num: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    desc: 'Our sourcing team searches our verified supplier database and conducts fresh market research to identify 3–5 manufacturers that match your requirements. We evaluate pricing, capacity, and track record.',
    details: [
      'Database and market research',
      'Initial supplier screening',
      'Price and MOQ comparison',
      'Supplier profile preparation',
      'Shortlist delivered within 5–10 days',
    ],
  },
  {
    num: '03',
    icon: Factory,
    title: 'Factory Audit & Verification',
    desc: 'Before recommending any supplier, we conduct an on-site factory audit. We verify business licenses, inspect production facilities, review certifications, and assess workforce and equipment.',
    details: [
      'Business license and export record check',
      'On-site facility inspection',
      'Production capacity assessment',
      'Certification and compliance review',
      'Detailed audit report with photos',
    ],
  },
  {
    num: '04',
    icon: Package,
    title: 'Sample Procurement & Approval',
    desc: 'We arrange samples from your shortlisted suppliers and ship them to you for evaluation. You compare quality, materials, and workmanship before committing to a production order.',
    details: [
      'Sample request and negotiation',
      'Quality pre-check before shipping',
      'International sample delivery',
      'Feedback relay to factories',
      'Revised samples if needed',
    ],
  },
  {
    num: '05',
    icon: ShieldCheck,
    title: 'Production Monitoring',
    desc: 'Once you approve a sample and place your order, we monitor production progress. We communicate with the factory in Chinese, track milestones, and alert you to any issues before they cause delays.',
    details: [
      'Production kick-off confirmation',
      'Regular progress updates',
      'Chinese-language factory liaison',
      'Issue identification and resolution',
      'Photo and video documentation',
    ],
  },
  {
    num: '06',
    icon: ClipboardCheck,
    title: 'Pre-Shipment Quality Inspection',
    desc: 'Before goods are loaded, our QC inspectors visit the factory to conduct a thorough pre-shipment inspection. We check quantity, appearance, function, and packaging against your specifications.',
    details: [
      'AQL sampling inspection',
      'Appearance and function checks',
      'Quantity and packaging verification',
      'Inspection report within 24 hours',
      'Pass/fail recommendation',
    ],
  },
  {
    num: '07',
    icon: Truck,
    title: 'Shipping & Delivery',
    desc: 'Once goods pass inspection, we coordinate with freight forwarders to arrange shipment. We handle export documentation and keep you updated on shipment status until delivery.',
    details: [
      'Sea freight or air freight options',
      'Export documentation preparation',
      'Customs clearance support',
      'Shipment tracking updates',
      'Delivery confirmation',
    ],
  },
]

export default function HowItWorks() {
  return (
    <div>
      {/* Header */}
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-brand-gold uppercase tracking-widest mb-3">Our Process</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How We Source for You
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              A clear, structured process from your first inquiry to final delivery — with full transparency at every step.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={step.num} className="flex gap-6 md:gap-10">
                  {/* Step indicator */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-0.5 flex-1 bg-gray-200 mt-2" />
                    )}
                  </div>
                  {/* Content */}
                  <div className="pb-12">
                    <div className="text-xs font-bold text-brand-red uppercase tracking-widest mb-1">Step {step.num}</div>
                    <h2 className="text-xl md:text-2xl font-bold text-navy mb-3">{step.title}</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">{step.desc}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-brand-red flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline summary */}
      <section className="bg-site-bg py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-3">Typical Project Timeline</h2>
            <p className="text-gray-600">Timelines vary by product complexity and order size.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { phase: 'Supplier Research', time: '5–10 days' },
              { phase: 'Factory Audit', time: '3–7 days' },
              { phase: 'Sample & Approval', time: '2–4 weeks' },
              { phase: 'Production & QC', time: '30–60 days' },
            ].map((t) => (
              <div key={t.phase} className="bg-white rounded-xl border border-gray-200 p-5 text-center">
                <div className="text-2xl font-bold text-navy mb-1">{t.time}</div>
                <div className="text-sm text-gray-500">{t.phase}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-red py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Sourcing Project Today</h2>
          <p className="text-red-100 mb-8">
            Submit your inquiry and we'll get back to you within 24 hours with a tailored sourcing plan.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-brand-red hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
