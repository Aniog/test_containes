import { Link } from 'react-router-dom'
import {
  Search, Shield, Eye, Truck, CheckCircle, BarChart3,
  FileCheck, Package, ClipboardCheck, Globe, ArrowRight,
  Users, Factory, FileText
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing & Matching',
    desc: 'We identify and evaluate manufacturers that match your exact product requirements, target price, quality standards, and production timeline.',
    details: [
      'Product specification analysis',
      'Multi-supplier comparison',
      'Price benchmarking across regions',
      'Minimum order quantity negotiation',
      'Lead time assessment',
    ],
  },
  {
    icon: Shield,
    title: 'Factory Verification & Audits',
    desc: 'On-site factory audits to confirm business legitimacy, production capabilities, certifications, and compliance with international standards.',
    details: [
      'Business license verification',
      'Production capacity assessment',
      'Equipment and technology review',
      'Workforce and management evaluation',
      'Social compliance and certifications',
    ],
  },
  {
    icon: Eye,
    title: 'Quality Inspection (QC)',
    desc: 'In-line and pre-shipment inspections using AQL sampling standards to identify defects before goods leave the factory.',
    details: [
      'Initial Production Check (IPC)',
      'During Production Inspection (DPI)',
      'Pre-Shipment Inspection (PSI)',
      'Container Loading Supervision',
      'AQL-based defect classification',
    ],
  },
  {
    icon: BarChart3,
    title: 'Production Monitoring',
    desc: 'Regular on-site progress checks with photo and video reporting to ensure your order stays on schedule and meets all specifications.',
    details: [
      'Weekly production status updates',
      'Milestone tracking and alerts',
      'Photo and video documentation',
      'Schedule risk identification',
      'Issue escalation and resolution',
    ],
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics Coordination',
    desc: 'End-to-end logistics management including freight forwarding, customs clearance, documentation, and door-to-door delivery.',
    details: [
      'Sea, air, and rail freight options',
      'Customs documentation preparation',
      'Import/export compliance',
      'Insurance coordination',
      'Door-to-door tracking',
    ],
  },
  {
    icon: FileCheck,
    title: 'Sample Management',
    desc: 'We collect, evaluate, and ship product samples so you can assess quality and specifications before placing a full order.',
    details: [
      'Sample collection from multiple suppliers',
      'Quality and specification evaluation',
      'Photographic documentation',
      'International sample shipping',
      'Revision coordination with factories',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Compliance & Certification Support',
    desc: 'We help ensure your products meet the regulatory requirements of your target market, including testing and certification coordination.',
    details: [
      'CE, FCC, UL certification coordination',
      'Product testing lab arrangements',
      'Labeling and packaging compliance',
      'Regulatory documentation',
      'Country-specific import requirements',
    ],
  },
  {
    icon: Users,
    title: 'Supplier Relationship Management',
    desc: 'Ongoing supplier performance monitoring and relationship management to ensure consistent quality and reliability over time.',
    details: [
      'Supplier scorecard tracking',
      'Performance benchmarking',
      'Dispute resolution support',
      'Contract negotiation assistance',
      'Alternative supplier identification',
    ],
  },
]

export default function Services() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-primary-dark py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h1 className="text-3xl lg:text-5xl font-extrabold text-white mt-3 mb-4">
              Comprehensive Sourcing Services
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              From initial supplier identification to final delivery, our team manages every aspect of your China sourcing operation. Each service is designed to reduce risk and save you time.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon
              const isEven = index % 2 === 0
              return (
                <div
                  key={service.title}
                  className={`grid lg:grid-cols-2 gap-12 items-start ${!isEven ? 'lg:direction-rtl' : ''}`}
                >
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="w-12 h-12 bg-accent-light rounded-lg flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h2 className="text-2xl font-bold text-text-primary mb-4">{service.title}</h2>
                    <p className="text-text-secondary leading-relaxed mb-6">{service.desc}</p>
                    <ul className="space-y-3">
                      {service.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                          <span className="text-text-secondary text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`bg-surface-light rounded-2xl p-8 border border-border ${!isEven ? 'lg:order-1' : ''}`}>
                    <div className="aspect-[4/3] bg-surface-gray rounded-xl flex items-center justify-center">
                      <img
                        data-strk-img-id={`service-img-${index}-5a${index}8b`}
                        data-strk-img="[service-title-placeholder]"
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={service.title}
                        id={`service-title-placeholder-${index}`}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Sourcing Solution?</h2>
          <p className="text-white/90 text-lg mb-8">
            Tell us about your project and we will create a tailored service package for your needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-accent hover:bg-gray-100 font-semibold rounded-lg transition-colors"
          >
            Request a Custom Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </>
  )
}
