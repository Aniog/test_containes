import { Link } from 'react-router-dom'
import {
  MessageSquare, Search, Package, ClipboardCheck, Truck,
  ArrowRight, CheckCircle2, Phone, FileText, Users
} from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: MessageSquare,
    title: 'Initial Consultation',
    desc: 'Share your product requirements, specifications, target price, quantity, and timeline. This can be done through our inquiry form, email, or a quick call.',
    details: [
      'Product specifications and technical drawings',
      'Target unit price and total budget',
      'Order quantity and delivery timeline',
      'Quality standards and certifications required',
      'Preferred shipping method and destination',
    ],
  },
  {
    step: '02',
    icon: Search,
    title: 'Supplier Identification & Verification',
    desc: 'We search our vetted supplier network and the broader market to find manufacturers that match your exact requirements.',
    details: [
      'Market research and supplier shortlisting',
      'Business license and registration checks',
      'Production capability evaluation',
      'Initial price and lead time quotation',
      'Supplier comparison report for your review',
    ],
  },
  {
    step: '03',
    icon: Package,
    title: 'Sampling & Negotiation',
    desc: 'We arrange product samples for your approval and negotiate pricing and terms on your behalf.',
    details: [
      'Sample production and quality check',
      'Sample shipping to your location',
      'Price negotiation with multiple suppliers',
      'Contract terms and payment schedule finalization',
      'Production timeline agreement',
    ],
  },
  {
    step: '04',
    icon: ClipboardCheck,
    title: 'Production & Quality Control',
    desc: 'We monitor the entire production process and conduct quality inspections at critical stages.',
    details: [
      'Pre-production material verification',
      'Weekly production progress reports',
      'In-line quality inspections (DUPRO)',
      'Pre-shipment final inspection (AQL)',
      'Issue resolution and corrective actions',
    ],
  },
  {
    step: '05',
    icon: Truck,
    title: 'Shipping & Delivery',
    desc: 'We handle all logistics including customs clearance and coordinate delivery to your specified location.',
    details: [
      'Container loading supervision',
      'Customs documentation preparation',
      'Freight forwarding arrangement',
      'Insurance and tracking setup',
      'Delivery coordination and confirmation',
    ],
  },
]

export default function HowItWorks() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary-800 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/10 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Our Process
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            How Our Sourcing Process Works
          </h1>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto">
            A clear, five-step process that takes you from product inquiry to delivered goods.
            Full transparency at every stage.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, idx) => (
              <div key={step.step} className="relative">
                {/* Connector line */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute left-8 top-20 w-0.5 h-[calc(100%+4rem)] bg-primary-200" />
                )}

                <div className="flex items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white text-xl font-bold relative z-10">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1 bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                    <div className="flex items-center gap-3 mb-4">
                      <step.icon className="w-6 h-6 text-primary-500" />
                      <h3 className="text-2xl font-bold text-primary-800">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">{step.desc}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {step.details.map((detail, didx) => (
                        <div key={didx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-1" />
                          <span className="text-sm text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-800 mb-8 text-center">Typical Timeline</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-4">
                <div className="text-3xl font-extrabold text-primary-500 mb-2">5-10 Days</div>
                <div className="font-semibold text-gray-800 mb-1">Supplier Search</div>
                <p className="text-sm text-gray-600">Identification and initial verification of qualified suppliers</p>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-extrabold text-primary-500 mb-2">7-15 Days</div>
                <div className="font-semibold text-gray-800 mb-1">Sampling</div>
                <p className="text-sm text-gray-600">Sample production, review, and shipping to your location</p>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-extrabold text-primary-500 mb-2">30-60 Days</div>
                <div className="font-semibold text-gray-800 mb-1">Production & Shipping</div>
                <p className="text-sm text-gray-600">Mass production, QC, and delivery to destination</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-6">
            Start Your Sourcing Project Today
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Tell us what you need, and we will get back to you with a sourcing plan within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors no-underline"
          >
            Get a Free Quote <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
