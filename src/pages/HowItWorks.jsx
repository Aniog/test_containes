import { Link } from 'react-router-dom'
import { ArrowRight, Send, Search, FileCheck, ClipboardCheck, Factory, Ship } from 'lucide-react'

const steps = [
  {
    icon: Send,
    step: '01',
    title: 'Submit Your Sourcing Request',
    description: 'Tell us what you need — product details, specifications, quantities, target price, and timeline. The more information you provide, the more accurate our sourcing will be.',
    details: [
      'Product description and specifications',
      'Target quantity and budget range',
      'Quality standards and certifications required',
      'Preferred timeline and delivery destination',
    ],
  },
  {
    icon: Search,
    step: '02',
    title: 'Supplier Identification & Screening',
    description: 'We search our network and the broader Chinese market to identify manufacturers that match your requirements. Each supplier is screened for legitimacy and capability.',
    details: [
      'Market research and supplier database search',
      'Initial capability and credibility assessment',
      'Shortlist of 3-5 qualified suppliers',
      'Request for quotation (RFQ) sent to shortlisted suppliers',
    ],
  },
  {
    icon: FileCheck,
    step: '03',
    title: 'Quotation Comparison & Sampling',
    description: 'We collect and compare quotations, then help you request samples to evaluate quality before making a decision.',
    details: [
      'Detailed quotation comparison (price, MOQ, lead time)',
      'Supplier recommendation with pros and cons',
      'Sample request and coordination',
      'Sample evaluation and feedback to supplier',
    ],
  },
  {
    icon: Factory,
    step: '04',
    title: 'Factory Audit & Order Placement',
    description: 'Before you commit, we conduct an on-site factory audit to verify everything. Once you are satisfied, we help negotiate terms and place the order.',
    details: [
      'On-site factory audit (if not already done)',
      'Audit report with photos and findings',
      'Contract negotiation and terms finalization',
      'Order placement and deposit payment coordination',
    ],
  },
  {
    icon: ClipboardCheck,
    step: '05',
    title: 'Production Monitoring & Quality Control',
    description: 'We monitor production progress and conduct inspections at critical stages to ensure quality and timeline compliance.',
    details: [
      'Production schedule tracking',
      'During-production inspection',
      'Pre-shipment inspection (AQL sampling)',
      'Regular progress reports and photos',
    ],
  },
  {
    icon: Ship,
    step: '06',
    title: 'Shipping & Delivery',
    description: 'We coordinate the entire logistics process, from factory pickup to delivery at your destination, handling all documentation along the way.',
    details: [
      'Freight forwarding arrangement (sea or air)',
      'Customs documentation and clearance',
      'Cargo insurance (if required)',
      'Delivery tracking and confirmation',
    ],
  },
]

export default function HowItWorks() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-blue-300 font-semibold text-sm uppercase tracking-wider">Our Process</span>
            <h1 className="heading-xl text-white mt-3 mb-6">How We Source for You</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              A transparent, step-by-step process that keeps you informed and in control from start to finish.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6 md:gap-10 mb-12 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-blue-700" />
                  </div>
                  <div className="hidden md:block w-0.5 h-full bg-blue-100 mx-auto mt-4" />
                </div>
                <div className="flex-1 pb-12 border-b border-gray-100 last:border-0 last:pb-0">
                  <div className="text-sm font-bold text-blue-700 mb-2">Step {step.step}</div>
                  <h2 className="heading-sm text-blue-900 mb-3">{step.title}</h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, dIndex) => (
                      <li key={dIndex} className="flex items-start gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-2 flex-shrink-0" />
                        <span>{detail}</span>
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
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg text-blue-900 mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 text-lg mb-8">
              Submit your sourcing request and we will begin identifying suppliers within 24 hours.
            </p>
            <Link to="/contact" className="btn-primary">
              Submit Your Sourcing Request
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
