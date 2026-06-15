import { Search, CheckCircle, Factory, Package, Ship, ClipboardCheck, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Understand Your Requirements',
    description: 'We start with a detailed discussion to understand your product specifications, quality standards, target price, estimated order quantity, and timeline. This helps us tailor our approach to your specific needs.',
    details: [
      'Product specifications and technical requirements',
      'Quality standards and certifications needed',
      'Target price and budget constraints',
      'Estimated order quantity and frequency',
      'Timeline and delivery requirements',
    ],
  },
  {
    icon: CheckCircle,
    step: '02',
    title: 'Supplier Sourcing & Verification',
    description: 'We identify potential suppliers from our extensive network and conduct thorough verification. This includes on-site factory audits to verify legitimacy, production capacity, and quality systems.',
    details: [
      'Supplier identification based on your requirements',
      'On-site factory audits and verification',
      'Business license and certification checks',
      'Production capacity assessment',
      'Quality management system evaluation',
      'Initial quotation collection and comparison',
    ],
  },
  {
    icon: ClipboardCheck,
    step: '03',
    title: 'Quotation & Sample Approval',
    description: 'We collect and compare quotations from verified suppliers, negotiate pricing and terms, and coordinate sample production. You review and approve samples before mass production begins.',
    details: [
      'Detailed quotation comparison and analysis',
      'Price and payment term negotiation',
      'Sample production coordination',
      'Sample quality evaluation and feedback',
      'Final supplier selection and confirmation',
    ],
  },
  {
    icon: Factory,
    step: '04',
    title: 'Production Monitoring',
    description: 'We monitor the entire production process to ensure timelines and quality standards are maintained. You receive regular updates on production progress.',
    details: [
      'Production schedule monitoring',
      'During-production quality checks',
      'Timeline and deadline tracking',
      'Issue identification and resolution',
      'Regular progress reports and updates',
    ],
  },
  {
    icon: Package,
    step: '05',
    title: 'Quality Inspection',
    description: 'We perform comprehensive quality inspections before shipment. This includes checking product quality, quantity, packaging, and compliance with your standards.',
    details: [
      'Pre-shipment inspection (PSI)',
      'Product quality and quantity verification',
      'Packaging and labeling checks',
      'AQL (Acceptable Quality Limit) testing',
      'Detailed inspection report with photos',
    ],
  },
  {
    icon: Ship,
    step: '06',
    title: 'Shipping & Delivery',
    description: 'We coordinate all logistics including freight forwarding, customs clearance, and door-to-door delivery. We ensure your goods arrive safely and on time.',
    details: [
      'Freight forwarding arrangement (air/sea/express)',
      'Customs clearance documentation',
      'Cargo insurance coordination',
      'Container loading supervision',
      'Shipment tracking and updates',
      'Door-to-door delivery to your warehouse',
    ],
  },
]

const HowItWorksPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How Our Sourcing Process Works
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              A transparent, step-by-step process designed to minimize risks and ensure
              you receive quality products from reliable suppliers. We guide you through
              every stage of importing from China.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="space-y-16">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isEven = index % 2 === 0

            return (
              <div
                key={index}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <span className="text-6xl font-bold text-blue-50 mr-4">
                      {step.step}
                    </span>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="text-blue-600" size={24} />
                    </div>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h2>

                  <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                    {step.description}
                  </p>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">What We Do:</h3>
                    <ul className="space-y-3">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Visual Placeholder */}
                <div className="flex-1 w-full">
                  <div
                    className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center"
                    data-strk-bg-id={`process-step-${index}`}
                    data-strk-bg={step.title}
                    data-strk-bg-ratio="16x9"
                    data-strk-bg-width="800"
                  >
                    <Icon className="text-blue-300" size={64} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today for a free consultation. Our team will guide you through
            the entire process and help you import with confidence.
          </p>
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            Get a Free Sourcing Quote
            <ChevronRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HowItWorksPage
