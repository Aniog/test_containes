import { Link } from 'react-router-dom'
import { Search, Building2, ClipboardCheck, Factory, Ship, BarChart3, ChevronRight, CheckCircle } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and evaluate reliable suppliers that match your specific requirements, quality standards, and budget. Our extensive supplier network covers all major manufacturing hubs in China.',
    features: [
      'Supplier identification based on your requirements',
      'Background checks and legitimacy verification',
      'Multiple supplier options with comparison',
      'Initial price quotations collection',
      'Capability assessment and matching',
    ],
  },
  {
    icon: Building2,
    title: 'Factory Verification & Audit',
    description: 'On-site factory audits to verify legitimacy, production capacity, quality systems, and compliance certifications. We visit factories in person to assess their actual capabilities.',
    features: [
      'On-site factory visits and inspections',
      'Business license and certification verification',
      'Production capacity assessment',
      'Quality management system evaluation',
      'Social compliance and working conditions check',
      'Detailed audit reports with photos',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Comprehensive quality inspection services including pre-shipment inspections, during-production checks, and container loading supervision to ensure quality standards are met.',
    features: [
      'Pre-shipment inspection (PSI)',
      'During production inspection (DPI)',
      'Container loading supervision (CLS)',
      'Laboratory testing coordination',
      'AQL (Acceptable Quality Limit) standard checks',
      'Detailed inspection reports with photos',
    ],
  },
  {
    icon: Factory,
    title: 'Production Monitoring',
    description: 'Regular monitoring throughout the production process to ensure timelines and quality are maintained. We provide updates and address issues proactively.',
    features: [
      'Regular production progress updates',
      'Timeline and deadline monitoring',
      'Quality control at each production stage',
      'Issue identification and resolution',
      'Weekly or bi-weekly status reports',
      'Direct communication with factory',
    ],
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics Coordination',
    description: 'Complete logistics support including freight forwarding, customs clearance, and door-to-door delivery arrangements. We ensure your goods arrive safely and on time.',
    features: [
      'Freight forwarding (air, sea, express)',
      'Customs clearance documentation',
      'Cargo insurance arrangement',
      'Door-to-door delivery coordination',
      'Shipping cost optimization',
      'Real-time shipment tracking',
    ],
  },
  {
    icon: BarChart3,
    title: 'Price Negotiation & Cost Optimization',
    description: 'Leverage our local presence and expertise to negotiate better prices, payment terms, and conditions with suppliers. We help you get the best value for your money.',
    features: [
      'Price negotiation with suppliers',
      'Payment terms optimization',
      'Cost breakdown analysis',
      'Alternative material suggestions',
      'Volume discount negotiation',
      'Total landed cost calculation',
    ],
  },
]

const ServicesPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Sourcing Services
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Comprehensive sourcing solutions to help you import from China with confidence.
              From supplier identification to final delivery, we handle every step of the process.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="space-y-16">
          {services.map((service, index) => {
            const Icon = service.icon
            const isEven = index % 2 === 0

            return (
              <div
                key={index}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Icon className="text-blue-600" size={24} />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                    {service.description}
                  </p>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">What We Provide:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="text-green-500 mr-3 flex-shrink-0 mt-0.5" size={18} />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Visual Placeholder */}
                <div className="flex-1 w-full">
                  <div
                    className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center"
                    data-strk-bg-id={`service-${index}`}
                    data-strk-bg={service.title}
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
            Ready to Start Sourcing from China?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today for a free consultation. We'll discuss your sourcing needs
            and provide a customized solution for your business.
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

export default ServicesPage
