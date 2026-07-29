import { Link } from 'react-router-dom'
import { Search, Shield, ClipboardCheck, Truck, ArrowRight, FileText, BarChart3, MessageSquare, Package, DollarSign } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and evaluate manufacturers across China that match your product requirements, quality standards, and budget. Our extensive network and market knowledge help us find the right supplier for your specific needs.',
    features: [
      'Product-specific supplier identification',
      'Initial capability assessment',
      'Quotation comparison and analysis',
      'Supplier shortlisting with detailed profiles',
    ],
  },
  {
    icon: Shield,
    title: 'Factory Verification & Audits',
    description: 'Before you commit to any supplier, we conduct thorough on-site audits to verify their legitimacy, production capacity, and quality management systems.',
    features: [
      'Business license and registration verification',
      'On-site factory inspection',
      'Production capacity assessment',
      'Quality management system review',
      'Social compliance and working conditions check',
      'Reference validation with existing clients',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Our quality inspection services ensure your products meet your specifications and standards before they leave the factory. We provide detailed reports with photos and clear pass/fail criteria.',
    features: [
      'Pre-production inspection (raw materials)',
      'During-production inspection (early stage)',
      'Pre-shipment inspection (finished goods)',
      'Container loading supervision',
      'Detailed photo and video documentation',
      'Clear pass/fail reporting',
    ],
  },
  {
    icon: BarChart3,
    title: 'Production Monitoring',
    description: 'We keep you informed throughout the production process with regular updates, progress reports, and early warning of any potential delays or issues.',
    features: [
      'Production schedule tracking',
      'Regular progress updates with photos',
      'Early issue identification and resolution',
      'Timeline management and delay prevention',
    ],
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    description: 'We handle the complexity of international shipping so you do not have to. From factory pickup to port delivery, we coordinate every step of the logistics process.',
    features: [
      'Freight forwarding coordination',
      'Customs documentation preparation',
      'Warehousing and consolidation',
      'Sea, air, and express shipping options',
      'Incoterms guidance and negotiation',
      'Delivery tracking and confirmation',
    ],
  },
  {
    icon: MessageSquare,
    title: 'Communication & Negotiation',
    description: 'Our bilingual team bridges the language and cultural gap between you and Chinese suppliers, ensuring clear communication and favorable terms.',
    features: [
      'Professional translation and interpretation',
      'Price negotiation on your behalf',
      'Contract review and drafting',
      'Dispute resolution support',
    ],
  },
  {
    icon: FileText,
    title: 'Sample Management',
    description: 'We coordinate the entire sampling process, from initial sample requests to revisions and final approval, saving you time and ensuring quality before bulk production.',
    features: [
      'Sample request coordination',
      'Sample quality evaluation',
      'Revision management',
      'Sample shipping to your address',
    ],
  },
  {
    icon: DollarSign,
    title: 'Cost Analysis & Optimization',
    description: 'We help you understand the true cost of your products and identify opportunities for cost savings without compromising quality.',
    features: [
      'Detailed cost breakdown analysis',
      'Material and process optimization suggestions',
      'Volume pricing negotiation',
      'Total landed cost calculation',
    ],
  },
]

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">Our Services</span>
            <h1 className="text-3xl md:text-5xl font-bold mt-2 mb-4">
              Complete China Sourcing Services
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              From finding the right supplier to delivering products to your door, we provide end-to-end
              sourcing services that protect your interests and ensure quality at every step.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-blue-700" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-gray-100 rounded-xl aspect-video flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Service image</span>
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
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Get a free consultation and learn how we can help you source from China with confidence.
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
