import { Link } from 'react-router-dom'
import {
  Search,
  Shield,
  ClipboardCheck,
  Factory,
  Ship,
  ArrowRight,
  CheckCircle,
  FileText,
  Camera,
  BarChart3,
  Package,
  Globe,
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Product Sourcing',
    description: 'We identify and connect you with reliable manufacturers that match your product specifications, quality requirements, and budget.',
    features: [
      'Requirement analysis and product specification review',
      'Search across our network of 500+ verified factories',
      'Competitive quotation comparison from multiple suppliers',
      'Sample coordination and evaluation support',
      'Price negotiation on your behalf',
    ],
  },
  {
    icon: Shield,
    title: 'Supplier Verification',
    description: 'Before you commit to any supplier, we conduct thorough on-site audits to confirm they are legitimate and capable.',
    features: [
      'Business license and registration verification',
      'On-site factory inspection with photo documentation',
      'Production capacity and equipment assessment',
      'Quality management system evaluation',
      'Reference checks with existing clients',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Professional quality control at every stage of production to ensure your products meet agreed specifications.',
    features: [
      'Pre-production inspection of raw materials',
      'During-production checks at critical stages',
      'Pre-shipment inspection (PSI) with AQL sampling',
      'Detailed inspection reports with photos and measurements',
      'Defect classification and corrective action recommendations',
    ],
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    description: 'Regular monitoring of your orders to keep production on schedule and address issues before they become problems.',
    features: [
      'Production schedule tracking and milestone updates',
      'Weekly progress reports with photos',
      'Early warning of potential delays',
      'On-site coordination with factory management',
      'Issue resolution and corrective action follow-up',
    ],
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'Complete logistics support from factory door to your warehouse, including all export documentation.',
    features: [
      'Freight forwarding coordination (sea, air, express)',
      'Export documentation preparation',
      'Customs clearance support',
      'Cargo consolidation for multiple suppliers',
      'Real-time shipment tracking',
    ],
  },
]

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Our Sourcing Services</h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              Comprehensive support for every stage of importing from China. From finding the right supplier to delivering products to your door.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, i) => (
              <div key={i} className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-start`}>
                <div className="flex-1">
                  <service.icon className="w-12 h-12 text-blue-700 mb-4" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, fi) => (
                      <li key={fi} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full">
                  <div className="aspect-video bg-slate-100 rounded-lg border border-slate-200 flex items-center justify-center">
                    <span className="text-slate-400 text-sm">Service illustration</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Need Help Sourcing from China?</h2>
          <p className="mt-4 text-lg text-slate-600">
            Tell us about your product requirements and we will recommend the right services for your needs.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-700 text-white font-medium rounded-md hover:bg-blue-800 transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
