import React from 'react'
import { Link } from 'react-router-dom'
import {
  Search, Shield, ClipboardCheck, Factory, Package, Truck,
  ArrowRight, CheckCircle, FileText, BarChart3, MessageSquare
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Product Sourcing',
    description: 'We identify and connect you with reliable manufacturers that match your product specifications, quality requirements, and budget.',
    features: [
      'Requirement analysis and product specification review',
      'Multi-supplier identification and comparison',
      'Price negotiation on your behalf',
      'Supplier capability assessment',
      'Detailed sourcing reports with recommendations',
    ],
  },
  {
    icon: Shield,
    title: 'Supplier Verification',
    description: 'On-site factory audits to confirm that suppliers are legitimate, capable, and meet your quality standards before you place any orders.',
    features: [
      'Business license and registration verification',
      'On-site factory inspection and facility assessment',
      'Production capacity evaluation',
      'Quality management system review',
      'Detailed audit report with photos and findings',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Professional quality inspections at every stage of production to catch issues early and ensure your products meet specifications.',
    features: [
      'Pre-production inspection (raw materials and components)',
      'During-production inspection (early-stage quality check)',
      'Pre-shipment inspection (final random sampling)',
      'Container loading supervision',
      'Detailed inspection reports with photos and measurements',
    ],
  },
  {
    icon: Factory,
    title: 'Production Monitoring',
    description: 'Regular factory visits and progress tracking to keep your production on schedule and address issues before they become problems.',
    features: [
      'Production schedule tracking and milestone monitoring',
      'Regular factory visits with progress reports',
      'Early issue identification and resolution',
      'Communication coordination with factory management',
      'Timeline updates and delay notifications',
    ],
  },
  {
    icon: Package,
    title: 'Sample Management',
    description: 'We collect, evaluate, and ship product samples so you can verify quality and specifications before committing to a full production order.',
    features: [
      'Sample collection from multiple suppliers',
      'Initial quality evaluation and comparison',
      'Sample consolidation and international shipping',
      'Feedback communication with suppliers',
      'Sample revision coordination',
    ],
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics management from factory pickup to final delivery, including customs documentation and freight coordination.',
    features: [
      'Freight forwarder selection and coordination',
      'Export documentation preparation',
      'Customs clearance support',
      'Shipping term negotiation (FOB, CIF, DDP)',
      'Shipment tracking and delivery confirmation',
    ],
  },
]

const processHighlights = [
  {
    icon: FileText,
    title: 'Detailed Reports',
    description: 'Every service includes comprehensive documentation with photos, measurements, and clear findings.',
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Decisions',
    description: 'We provide comparison data and analysis to help you make informed sourcing decisions.',
  },
  {
    icon: MessageSquare,
    title: 'Clear Communication',
    description: 'Regular updates in English with direct access to your dedicated sourcing agent.',
  },
]

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Sourcing Services</h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Comprehensive sourcing support from supplier identification to final delivery. Each service can be used independently or combined for end-to-end sourcing management.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-start`}>
                <div className="lg:w-1/2">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">{service.title}</h2>
                  <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2 bg-slate-100 rounded-xl p-8 min-h-[200px] flex items-center justify-center">
                  <div className="text-center text-slate-500">
                    <service.icon className="w-16 h-16 mx-auto mb-3 opacity-30" />
                    <p className="text-sm">Professional {service.title.toLowerCase()} service</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Highlights */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">What You Get With Every Service</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processHighlights.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-slate-200 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help Choosing the Right Service?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Tell us about your sourcing needs and we will recommend the right combination of services for your situation.
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors text-lg">
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
