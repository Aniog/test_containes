import { Link } from 'react-router-dom'
import { Search, ShieldCheck, Eye, FileCheck, Truck, BarChart3, Package, FileText, Globe, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing & Identification',
    desc: 'We search our verified supplier network and industry databases to find factories that match your product specifications, quality standards, and volume requirements.',
    details: [
      'Database of 500+ pre-vetted factories',
      'Match by capability, capacity, and location',
      'Shortlist of 3-5 qualified suppliers per product',
      'Initial pricing and MOQ comparison',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification & Audits',
    desc: 'Our team visits factories in person to verify legitimacy, assess production capabilities, check certifications, and evaluate working conditions before you commit.',
    details: [
      'On-site factory visits by our local team',
      'Business license and registration verification',
      'Production capacity and equipment assessment',
      'Quality management system review',
      'Compliance and certification checks',
    ],
  },
  {
    icon: Eye,
    title: 'Quality Inspection',
    desc: 'Multi-stage quality control inspections to catch defects early and ensure products meet your exact specifications before they leave the factory.',
    details: [
      'Pre-production sample approval',
      'During production (DUPRO) inspections',
      'Pre-shipment inspection (PSI)',
      'Detailed inspection reports with photos',
      'AQL-based sampling methodology',
    ],
  },
  {
    icon: FileCheck,
    title: 'Production Monitoring',
    desc: 'Regular follow-ups throughout the production cycle to track progress, verify milestones, and address issues before they become costly delays.',
    details: [
      'Weekly production status updates',
      'Timeline tracking against agreed schedule',
      'Early delay detection and escalation',
      'Photo and video progress documentation',
    ],
  },
  {
    icon: Package,
    title: 'Sample Management',
    desc: 'We coordinate product samples, review them against your specifications, and manage the approval process before mass production begins.',
    details: [
      'Sample coordination with multiple suppliers',
      'Specification comparison and review',
      'Photographic documentation of samples',
      'Express shipping arrangements',
    ],
  },
  {
    icon: BarChart3,
    title: 'Cost Negotiation & Optimization',
    desc: 'We negotiate pricing on your behalf, leveraging our volume relationships with factories to secure competitive rates without compromising quality.',
    details: [
      'Price benchmarking across multiple suppliers',
      'Volume-based negotiation strategies',
      'Tooling and mold cost management',
      'Packaging cost optimization',
    ],
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    desc: 'From container loading supervision to customs documentation and freight forwarding, we handle all logistics to get your goods delivered safely.',
    details: [
      'Container loading supervision',
      'Export documentation and customs clearance',
      'Sea freight, air freight, and express options',
      'Door-to-door delivery coordination',
      'Cargo insurance arrangement',
    ],
  },
  {
    icon: FileText,
    title: 'Certification & Compliance',
    desc: 'We help navigate product certification requirements for your target markets, including CE, FCC, FDA, REACH, and other regulatory standards.',
    details: [
      'Target market compliance assessment',
      'Test report coordination with accredited labs',
      'CE, FCC, FDA, REACH guidance',
      'Documentation for customs clearance',
    ],
  },
]

const Services = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-700 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold text-accent-400 uppercase tracking-wider">
            Our Services
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            Complete China Sourcing Solutions
          </h1>
          <p className="mt-5 text-lg text-brand-200 max-w-2xl mx-auto">
            Every service you need to source products from China with confidence.
            From finding the right factory to delivering goods to your door.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-12 h-12 bg-brand-50 text-brand-500 rounded-xl flex items-center justify-center mb-5">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-brand-500 font-semibold hover:text-brand-600 transition-colors"
                  >
                    Request this service
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className={`bg-gray-50 rounded-xl p-7 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                    What is included
                  </h3>
                  <ul className="space-y-3">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-gray-700">{detail}</span>
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need a Custom Sourcing Solution?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Every project is different. Contact us to discuss your specific requirements
            and we will create a tailored sourcing plan for your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors shadow-sm"
          >
            Contact Us Today
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services
