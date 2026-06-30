import { Link } from 'react-router-dom'
import { Search, Shield, ClipboardCheck, Eye, Truck, Package, ArrowRight, CheckCircle } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and vet suppliers that match your specific product requirements, budget, and quality standards.',
    features: [
      'Tailored supplier search based on your product specifications',
      'Access to our pre-screened network of reliable manufacturers',
      'Multi-source comparison with detailed profile reports',
      'Initial pricing and MOQ negotiations handled on your behalf',
    ],
  },
  {
    icon: Shield,
    title: 'Factory Verification',
    desc: 'On-site audits conducted by our experienced team to verify supplier capabilities and reliability.',
    features: [
      'Physical inspection of production lines and equipment',
      'Verification of business licenses and certifications',
      'Assessment of quality control processes and systems',
      'Capacity evaluation to ensure they can meet your volumes',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Comprehensive quality control services to ensure your products meet specifications.',
    features: [
      'During-production inspection to catch issues early',
      'Pre-shipment inspection using AQL sampling standards',
      'Detailed reports with photos, measurements, and test results',
      'Factory social compliance audits available',
    ],
  },
  {
    icon: Eye,
    title: 'Production Follow-Up',
    desc: 'Proactive monitoring of your production to keep orders on track.',
    features: [
      'Regular production progress reports with photos',
      'Milestone tracking against agreed production schedule',
      'Early warning system for potential delays or issues',
      'Direct communication with factory management',
    ],
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'End-to-end logistics management from factory to your destination.',
    features: [
      'Sea freight (FCL and LCL) and air freight options',
      'Customs documentation and clearance support',
      'Cargo insurance coordination',
      'Door-to-door delivery solutions available',
    ],
  },
  {
    icon: Package,
    title: 'Sample Management',
    desc: 'Efficient sample coordination to help you evaluate quality before committing.',
    features: [
      'Sample request management across multiple suppliers',
      'Collection and inspection of received samples',
      'Comparative analysis reports',
      'Fast sample shipping to your location',
    ],
  },
]

export default function Services() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-900 via-brand-900 to-gray-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Comprehensive sourcing support from supplier discovery to final delivery. We handle the details so you can focus on growing your business.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 lg:gap-16 items-start`}
              >
                <div className="flex-1">
                  <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-brand-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h2>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  <ul className="space-y-2.5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 bg-gray-50 border border-gray-200 rounded-xl p-8">
                  <h3 className="font-semibold text-gray-900 mb-3">Ideal For</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {index === 0 && 'Buyers who need qualified suppliers fast, without spending weeks searching on B2B platforms.'}
                    {index === 1 && 'Importers who want to verify supplier legitimacy before placing large or complex orders.'}
                    {index === 2 && 'Companies that require consistent product quality and want to catch defects before shipment.'}
                    {index === 3 && 'Businesses managing multiple orders who need reliable on-the-ground production tracking.'}
                    {index === 4 && 'Importers who want a single point of contact for the entire logistics chain.'}
                    {index === 5 && 'Buyers evaluating multiple suppliers who need efficient sample handling.'}
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-medium text-sm"
                  >
                    Discuss Your Requirements <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Sourcing?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Tell us what you need, and we will provide a free, no-obligation quote within 1-2 business days.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-8 py-3.5 rounded-lg text-base font-semibold transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}