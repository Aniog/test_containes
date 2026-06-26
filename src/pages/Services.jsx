import { Link } from 'react-router-dom'
import { Search, Factory, ClipboardCheck, Package, Ship, BarChart3, Shield, ArrowRight, CheckCircle } from 'lucide-react'

const serviceDetails = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer for your product',
    points: [
      'Detailed analysis of your product specifications and requirements',
      'Targeted search across our database of 5,000+ verified suppliers',
      'Multi-supplier comparison with capability assessments',
      'RFQ management and price negotiation support',
      'Shortlisted suppliers presented with detailed profiles and recommendations',
    ],
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    subtitle: 'Know exactly who you are working with',
    points: [
      'On-site factory audit by our experienced inspectors',
      'Business license and certification validation',
      'Production capability and capacity assessment',
      'Quality management system review',
      'Comprehensive photo and video documentation',
      'Detailed audit report with risk assessment',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch issues before they reach your customers',
    points: [
      'Pre-production inspection of raw materials and components',
      'During-production (DUPRO) inspection at key milestones',
      'Pre-shipment inspection (PSI) with AQL sampling',
      'Container loading supervision (CLS)',
      'Detailed QC reports with photos and measurements',
      'Custom inspection checklists based on your specifications',
    ],
  },
  {
    icon: Package,
    title: 'Production Monitoring',
    subtitle: 'Full visibility into your order progress',
    points: [
      'Regular production progress updates with photos',
      'Raw material verification before production starts',
      'Critical milestone tracking and alerts',
      'Proactive issue identification and resolution',
      'Weekly status reports with timeline updates',
    ],
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics',
    subtitle: 'End-to-end freight and customs management',
    points: [
      'Freight rate comparison and booking management',
      'FCL and LCL container coordination',
      'Customs documentation and export clearance',
      'Cargo insurance arrangement',
      'Real-time shipment tracking updates',
      'Door-to-door delivery options available',
    ],
  },
  {
    icon: BarChart3,
    title: 'Market Intelligence',
    subtitle: 'Data-driven sourcing decisions',
    points: [
      'Competitive pricing analysis across supplier tiers',
      'Material cost trend monitoring',
      'Supplier benchmarking and scorecards',
      'Tariff and trade regulation updates',
      'Category-specific market insights',
    ],
  },
]

export default function Services() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our Services</h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Comprehensive sourcing support from supplier discovery to final delivery. Each service is designed to reduce risk and ensure quality.
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20">
          {serviceDetails.map((service, i) => (
            <div key={i} className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-start ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="w-16 h-16 bg-accent-50 rounded-2xl flex items-center justify-center flex-shrink-0 lg:mt-2">
                <service.icon className="w-8 h-8 text-accent-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-2">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-6">{service.subtitle}</p>
                <ul className="space-y-3">
                  {service.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-900 mb-4">Need a Custom Service Package?</h2>
          <p className="text-lg text-gray-600 mb-8">We tailor our services to your specific product, budget, and timeline. Contact us for a free consultation.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-accent-500 text-white px-8 py-3.5 rounded-lg font-semibold text-base hover:bg-accent-600 transition-colors">
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}