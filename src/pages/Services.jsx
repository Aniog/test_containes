import { Link } from 'react-router-dom'
import { Search, Shield, CheckCircle, Clock, Truck, FileText, Package, ArrowRight, BarChart3, Users } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and evaluate manufacturers across China to find the best match for your product requirements, budget, and timeline.',
    features: [
      'Market research and supplier identification',
      'Initial screening and capability assessment',
      'Request for quotation (RFQ) management',
      'Supplier comparison and recommendation',
      'Sample coordination and evaluation',
    ],
  },
  {
    icon: Shield,
    title: 'Factory Verification',
    description: 'On-site audits to confirm that suppliers are legitimate, capable, and compliant with your standards.',
    features: [
      'Business license and registration verification',
      'Production capacity and equipment assessment',
      'Quality management system evaluation',
      'Social compliance and working condition checks',
      'Detailed audit reports with photos',
    ],
  },
  {
    icon: CheckCircle,
    title: 'Quality Inspection',
    description: 'Professional inspections at every stage of production to ensure your products meet specifications and quality standards.',
    features: [
      'Pre-production inspection (materials and components)',
      'During-production inspection (early stage quality check)',
      'Pre-shipment inspection (final random sampling)',
      'Container loading supervision',
      'Detailed inspection reports with photos and measurements',
    ],
  },
  {
    icon: Clock,
    title: 'Production Monitoring',
    description: 'Regular factory visits and progress updates to keep your production on schedule and address issues early.',
    features: [
      'Production schedule tracking',
      'Regular factory visits and progress reports',
      'Issue identification and resolution',
      'Timeline management and delay prevention',
      'Communication bridge with factory management',
    ],
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics support to get your products from the factory floor to your warehouse safely and efficiently.',
    features: [
      'Freight forwarding (sea and air)',
      'Customs documentation and clearance',
      'Cargo insurance arrangement',
      'Consolidation of multiple suppliers',
      'Delivery tracking and status updates',
    ],
  },
  {
    icon: FileText,
    title: 'Contract Negotiation',
    description: 'We help you negotiate favorable terms and draft clear contracts that protect your interests.',
    features: [
      'Price and payment term negotiation',
      'Contract drafting and review',
      'Intellectual property protection clauses',
      'Quality standard and defect resolution terms',
      'Delivery timeline and penalty clauses',
    ],
  },
  {
    icon: Package,
    title: 'Product Development',
    description: 'From concept to production-ready design, we help you optimize your product for manufacturing in China.',
    features: [
      'Design feasibility assessment',
      'Material selection and sourcing',
      'Prototyping and sample development',
      'Packaging design and optimization',
      'Cost reduction suggestions',
    ],
  },
  {
    icon: BarChart3,
    title: 'Market Research',
    description: 'Understand the Chinese manufacturing landscape and make informed sourcing decisions.',
    features: [
      'Industry and supplier landscape analysis',
      'Price benchmarking and cost analysis',
      'Regulatory and compliance requirements',
      'Competitor sourcing intelligence',
      'Market trend reports',
    ],
  },
]

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-blue-300 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h1 className="heading-xl text-white mt-3 mb-6">End-to-End China Sourcing Services</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              From finding the right supplier to delivering products to your door, we handle every step of the sourcing process.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h2 className="heading-sm text-blue-900 mb-3">{service.title}</h2>
                    <p className="text-gray-600 mb-5 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
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
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg text-blue-900 mb-4">Need Help with Sourcing?</h2>
            <p className="text-gray-600 text-lg mb-8">
              Tell us about your product and we will recommend the right services for your needs.
            </p>
            <Link to="/contact" className="btn-primary">
              Get a Free Sourcing Quote
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
