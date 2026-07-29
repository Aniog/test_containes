import { Link } from 'react-router-dom'
import { FileText, Search, ClipboardCheck, Truck, CheckCircle, ArrowRight, Clock, MessageSquare, Shield } from 'lucide-react'

const steps = [
  {
    icon: FileText,
    step: '01',
    title: 'Submit Your Requirements',
    description: 'Share your product specifications, target quantity, quality standards, and budget through our inquiry form. Include any technical drawings, reference images, or sample products you have.',
    details: [
      'Product description and specifications',
      'Target quantity and budget range',
      'Quality standards and certifications needed',
      'Timeline and delivery requirements',
    ],
    time: 'Response within 24 hours',
  },
  {
    icon: Search,
    step: '02',
    title: 'Supplier Identification & Verification',
    description: 'Our team searches our network and the broader Chinese market to identify qualified manufacturers. We then conduct thorough verification of each potential supplier.',
    details: [
      'Business license and registration checks',
      'Production capacity assessment',
      'Quality management system review',
      'Reference validation with existing clients',
      'On-site factory audit (when needed)',
    ],
    time: '1-2 weeks',
  },
  {
    icon: MessageSquare,
    step: '03',
    title: 'Quotation & Supplier Selection',
    description: 'We present you with vetted supplier options, complete with detailed quotations, capability summaries, and our professional recommendations. You choose the supplier that best fits your needs.',
    details: [
      'Side-by-side quotation comparison',
      'Supplier capability profiles',
      'Risk assessment and recommendations',
      'Price negotiation on your behalf',
    ],
    time: '3-5 business days',
  },
  {
    icon: ClipboardCheck,
    step: '04',
    title: 'Sample Development & Approval',
    description: 'We coordinate sample production with your chosen supplier, evaluate the samples against your requirements, and manage any revisions until you are satisfied.',
    details: [
      'Sample request coordination',
      'Quality evaluation against specifications',
      'Revision management and feedback',
      'Sample shipping to your address',
    ],
    time: '2-4 weeks',
  },
  {
    icon: Shield,
    step: '05',
    title: 'Production & Quality Monitoring',
    description: 'Once you approve the samples and place your order, we monitor the production process closely. Regular updates and inspections ensure everything stays on track.',
    details: [
      'Production schedule tracking',
      'During-production inspections',
      'Regular progress updates with photos',
      'Early issue identification and resolution',
    ],
    time: '4-8 weeks (varies by product)',
  },
  {
    icon: ClipboardCheck,
    step: '06',
    title: 'Pre-Shipment Inspection',
    description: 'Before goods leave the factory, we conduct a thorough final inspection. Detailed reports with photos document the quality and quantity of your order.',
    details: [
      'Random sampling per AQL standards',
      'Function and safety testing',
      'Packaging and labeling verification',
      'Clear pass/fail reporting',
    ],
    time: '1-2 days',
  },
  {
    icon: Truck,
    step: '07',
    title: 'Shipping & Delivery',
    description: 'We handle all logistics coordination, from factory pickup to port delivery. Customs documentation, freight forwarding, and tracking are all managed on your behalf.',
    details: [
      'Freight forwarding coordination',
      'Customs documentation preparation',
      'Container loading supervision',
      'Delivery tracking and confirmation',
    ],
    time: 'Varies by shipping method',
  },
]

export default function HowItWorks() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">Our Process</span>
            <h1 className="text-3xl md:text-5xl font-bold mt-2 mb-4">
              How It Works
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              A transparent, step-by-step process from your initial inquiry to final delivery.
              You stay informed and in control at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={step.step} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-7 top-16 bottom-0 w-0.5 bg-blue-200 hidden md:block" />
                )}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-blue-700 rounded-xl flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-blue-700 font-bold text-sm">Step {step.step}</span>
                      <span className="flex items-center gap-1 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        {step.time}
                      </span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">{step.title}</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
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

      {/* CTA */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Submit your sourcing requirements and we will respond within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
