import { Link } from 'react-router-dom'
import { Search, CheckCircle, Factory, Package, Ship, ClipboardCheck } from 'lucide-react'

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Understand Your Needs',
    description: 'We start by understanding your product requirements, quality standards, target price, and estimated order quantity.',
  },
  {
    icon: CheckCircle,
    step: '02',
    title: 'Supplier Sourcing & Verification',
    description: 'We identify potential suppliers and conduct on-site factory audits to verify legitimacy, capacity, and quality systems.',
  },
  {
    icon: ClipboardCheck,
    step: '03',
    title: 'Quotation & Sample Approval',
    description: 'We collect and compare quotations, negotiate pricing, and coordinate sample production for your approval.',
  },
  {
    icon: Factory,
    step: '04',
    title: 'Production Monitoring',
    description: 'We monitor production progress, conduct during-production inspections, and ensure quality standards are met.',
  },
  {
    icon: Package,
    step: '05',
    title: 'Quality Inspection',
    description: 'We perform pre-shipment inspections to verify product quality, quantity, packaging, and compliance with your standards.',
  },
  {
    icon: Ship,
    step: '06',
    title: 'Shipping & Delivery',
    description: 'We coordinate freight forwarding, handle customs clearance, and arrange door-to-door delivery to your warehouse.',
  },
]

const HowItWorksSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Our Sourcing Process Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A transparent, step-by-step process designed to minimize risks and ensure
            you receive quality products from reliable suppliers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow relative"
              >
                <div className="flex items-center mb-4">
                  <span className="text-5xl font-bold text-blue-50 text-blue-100">
                    {step.step}
                  </span>
                  <div className="ml-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/how-it-works"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            Learn More About Our Process
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
