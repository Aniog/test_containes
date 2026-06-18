import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { 
  Search, 
  ClipboardCheck, 
  Factory, 
  Truck, 
  FileText, 
  CreditCard,
  Package,
  ArrowRight,
  CheckCircle,
  Shield,
  Clock,
  Users
} from 'lucide-react'

const services = [
  {
    id: 'supplier-verification',
    icon: Search,
    title: 'Supplier Verification',
    description: 'We verify factory existence, legitimacy, and capabilities through in-person visits and comprehensive research.',
    features: [
      'Business license verification',
      'Factory facility inspection',
      'Production capacity assessment',
      'Certification verification (ISO, CE, FCC, etc.)',
      'Financial stability check',
      'Customer references and track record',
    ],
    process: [
      'Initial supplier research and shortlisting',
      'Background check and due diligence',
      'On-site factory visit and audit',
      'Detailed verification report with photos',
      'Risk assessment and recommendations',
    ],
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Professional quality control inspections at key production stages to ensure your products meet specifications.',
    features: [
      'Pre-shipment inspection (PSI)',
      'During production inspection (DPI)',
      'Initial production inspection (IPI)',
      'Container loading supervision',
      'AQL-based sampling',
      'Detailed inspection reports with photos',
    ],
    process: [
      'Review product specifications and standards',
      'Develop customized inspection checklist',
      'On-site inspection by certified QC',
      'Same-day report with findings',
      'Follow-up on corrective actions',
    ],
  },
  {
    id: 'production-follow',
    icon: Factory,
    title: 'Production Follow-up',
    description: 'We monitor production progress and address issues promptly to ensure on-time delivery.',
    features: [
      'Production schedule monitoring',
      'Quality issue resolution',
      'Sample approval coordination',
      'Material quality tracking',
      'Weekly progress reports',
      'Delay prevention and mitigation',
    ],
    process: [
      'Establish production timeline and milestones',
      'Regular factory visits during production',
      'Quality checkpoints at critical stages',
      'Issue escalation and resolution',
      'Final inspection before shipment',
    ],
  },
  {
    id: 'shipping-logistics',
    icon: Truck,
    title: 'Shipping & Logistics',
    description: 'End-to-end logistics management from factory to your warehouse.',
    features: [
      'Freight forwarding coordination',
      'Customs clearance assistance',
      'Documentation preparation',
      'Multi-modal shipping (air, sea, land)',
      'Door-to-door delivery',
      'Shipment tracking',
    ],
    process: [
      'Shipping method recommendation',
      'Freight booking and coordination',
      'Document preparation and submission',
      'Customs clearance monitoring',
      'Final delivery coordination',
    ],
  },
]

const additionalServices = [
  {
    icon: FileText,
    title: 'Product Development',
    description: 'We help you develop new products, create prototypes, and find manufacturers for custom designs.',
  },
  {
    icon: CreditCard,
    title: 'Payment Protection',
    description: 'Secure payment services with escrow options to protect both buyers and sellers.',
  },
  {
    icon: Package,
    title: 'Sample Sourcing',
    description: 'We can source product samples from multiple suppliers for your evaluation.',
  },
]

const whyChooseUs = [
  {
    icon: Shield,
    title: 'Verified Suppliers',
    description: 'Every supplier we recommend has been personally verified through on-site audits.',
  },
  {
    icon: Clock,
    title: 'Time Savings',
    description: 'We handle supplier research, communication, and logistics—saving you weeks of effort.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Our team has 10+ years of experience in China manufacturing and international trade.',
  },
]

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Sourcing Services | Supplier Verification, QC & Shipping | SSourcing China</title>
        <meta name="description" content="Comprehensive China sourcing services including supplier verification, quality inspection, production follow-up, and shipping coordination." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Sourcing Services
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Comprehensive solutions to help you source products from China with confidence. 
              From supplier verification to final delivery, we handle every step.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              id={service.id}
              className={`py-16 ${index > 0 ? 'border-t border-gray-100' : ''}`}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-slate-600 mb-8">{service.description}</p>

                  <h3 className="font-semibold text-slate-900 mb-4">What's Included:</h3>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-2xl p-8">
                  <h3 className="font-semibold text-slate-900 mb-6">Our Process:</h3>
                  <div className="space-y-4">
                    {service.process.map((step, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                          {i + 1}
                        </div>
                        <span className="text-slate-700">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Beyond our core services, we offer specialized support for your sourcing needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Work With Us
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We're not just a sourcing agent—we're your partner in building a successful China supply chain.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index}
                className="text-center p-8"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Help with Your Sourcing?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Tell us about your project and we'll create a customized sourcing solution.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-5 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-lg"
          >
            Get a Free Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}

export default Services