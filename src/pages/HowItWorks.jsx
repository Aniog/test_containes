import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, CheckCircle } from 'lucide-react'
import SourcingInquiryForm from '@/components/SourcingInquiryForm'

const steps = [
  {
    step: '01',
    title: 'Submit Your Sourcing Inquiry',
    description: 'Tell us what you need. Share product specifications, target quantities, quality requirements, and any other relevant details. The more information you provide, the more accurate our sourcing will be.',
    details: [
      'Product specifications and requirements',
      'Target order quantity and budget',
      'Quality standards and certifications needed',
      'Preferred timeline and delivery terms',
    ],
  },
  {
    step: '02',
    title: 'Supplier Identification & Verification',
    description: 'We search our network and the broader market to find suppliers that match your requirements. Each potential supplier goes through our verification process before we recommend them to you.',
    details: [
      'Market research and supplier identification',
      'Business license and registration checks',
      'Initial capability assessment',
      'Request for quotation from multiple suppliers',
    ],
  },
  {
    step: '03',
    title: 'Quotation Comparison & Recommendation',
    description: 'We compile quotations from verified suppliers and present them to you with our analysis. We help you understand the trade-offs between price, quality, and lead time.',
    details: [
      'Side-by-side quotation comparison',
      'Supplier capability summary',
      'Our recommendation based on your priorities',
      'Negotiation support for best terms',
    ],
  },
  {
    step: '04',
    title: 'Sample Evaluation',
    description: 'Before committing to a full order, we arrange samples from your chosen supplier. We can inspect samples on your behalf and provide feedback before you make a decision.',
    details: [
      'Sample request and coordination',
      'Sample inspection and testing',
      'Detailed sample evaluation report',
      'Feedback to supplier for adjustments',
    ],
  },
  {
    step: '05',
    title: 'Production Monitoring',
    description: 'Once you place your order, we monitor production progress and conduct quality inspections at key stages. You receive regular updates so there are no surprises.',
    details: [
      'Production schedule confirmation',
      'Regular progress updates',
      'During-production inspection',
      'Issue identification and resolution',
    ],
  },
  {
    step: '06',
    title: 'Pre-Shipment Inspection',
    description: 'Before goods leave the factory, we conduct a thorough pre-shipment inspection to verify that products meet your specifications and quality standards.',
    details: [
      'Full or statistical sampling inspection',
      'Function and safety testing',
      'Packaging and labeling verification',
      'Detailed inspection report with photos',
    ],
  },
  {
    step: '07',
    title: 'Shipping & Delivery',
    description: 'We coordinate all logistics to get your goods from the factory to your destination. This includes freight forwarding, customs documentation, and delivery tracking.',
    details: [
      'Freight forwarding arrangement',
      'Customs documentation preparation',
      'Container loading supervision',
      'Delivery tracking and coordination',
    ],
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            A clear, structured process from your initial inquiry to final delivery.
            We keep you informed at every step.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-12">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-blue-700">{step.step}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-0.5 h-12 bg-slate-200 mx-auto mt-4" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h2 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h2>
                  <p className="text-slate-600 mb-4 leading-relaxed">{step.description}</p>
                  <ul className="space-y-1.5">
                    {step.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {detail}
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
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Start Your Sourcing Journey</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Ready to get started? Submit your inquiry and we will begin working on your sourcing needs right away.
              </p>
              <Link to="/services" className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-800 transition-colors">
                View Our Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <SourcingInquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
