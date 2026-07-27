import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Shield, Search, Eye, Truck, Package, FileCheck,
  ArrowRight, CheckCircle, Factory, ClipboardCheck,
  BarChart3, Globe
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing & Identification',
    description: 'We leverage our extensive network and database to find the best suppliers for your specific product requirements.',
    features: [
      'Database of 2,000+ pre-verified suppliers',
      'Industry-specific supplier matching',
      'Price negotiation and comparison',
      'Initial capability assessment',
      'Supplier shortlisting with detailed profiles',
    ],
    image: 'business meeting supplier negotiation sourcing',
    imageId: 'service-sourcing-c1d2e3',
  },
  {
    icon: Factory,
    title: 'Factory Audits & Verification',
    description: 'Comprehensive on-site evaluations to ensure supplier legitimacy, capability, and compliance.',
    features: [
      'On-site factory visits and inspections',
      'Business license and registration verification',
      'Production capacity assessment',
      'Quality management system review',
      'Social compliance and ethical audit',
    ],
    image: 'factory audit inspection manufacturing facility',
    imageId: 'service-audit-f4g5h6',
  },
  {
    icon: Eye,
    title: 'Quality Inspection',
    description: 'Multi-stage quality control process to catch defects before products leave the factory.',
    features: [
      'Pre-production sample approval',
      'During-production inspection (DPI)',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
      'AQL-based sampling and testing',
    ],
    image: 'quality control inspection product testing',
    imageId: 'service-qc-i7j8k9',
  },
  {
    icon: ClipboardCheck,
    title: 'Production Follow-up',
    description: 'Active monitoring of your orders from start to finish, keeping production on track.',
    features: [
      'Production timeline planning',
      'Milestone tracking and reporting',
      'Raw material verification',
      'Progress photo and video updates',
      'Delay prevention and issue resolution',
    ],
    image: 'production planning factory monitoring',
    imageId: 'service-production-l1m2n3',
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    description: 'End-to-end logistics management to get your products delivered safely and on time.',
    features: [
      'Freight forwarding (sea, air, rail)',
      'Customs clearance and documentation',
      'Warehousing and consolidation',
      'Door-to-door delivery worldwide',
      'Cargo insurance arrangement',
    ],
    image: 'shipping container logistics port freight',
    imageId: 'service-shipping-o4p5q6',
  },
  {
    icon: FileCheck,
    title: 'Documentation & Compliance',
    description: 'Complete handling of all paperwork required for international trade.',
    features: [
      'Export and import documentation',
      'Certificates of origin',
      'Product testing and certification',
      'Labeling and packaging compliance',
      'Regulatory compliance support',
    ],
    image: 'business documentation paperwork compliance',
    imageId: 'service-docs-r7s8t9',
  },
]

const Services = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-800 to-brand-950 section-padding text-center">
        <div className="container-max">
          <span className="inline-block px-4 py-1 bg-brand-700 text-brand-200 text-sm font-medium rounded-full mb-4">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive China Sourcing Services
          </h1>
          <p className="text-lg text-brand-200 max-w-2xl mx-auto">
            From initial supplier identification to final delivery, we provide end-to-end sourcing
            solutions tailored to your business needs.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-white">
        <div className="container-max space-y-24">
          {services.map((service, index) => {
            const Icon = service.icon
            const isEven = index % 2 === 0
            return (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-xl overflow-hidden shadow-lg bg-slate-100">
                    <img
                      data-strk-img-id={service.imageId}
                      data-strk-img={`[service-${service.title.toLowerCase().replace(/[^a-z]/g, '-')}] ${service.image}`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={service.title}
                      className="w-full h-auto"
                      id={`service-${service.title.toLowerCase().replace(/[^a-z]/g, '-')}`}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                  <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-6">
                    <Icon size={24} className="text-brand-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-slate-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-slate-50">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Need a Custom Sourcing Solution?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Every business has unique sourcing needs. Contact us to discuss your specific requirements
            and get a tailored proposal.
          </p>
          <Link to="/contact" className="btn-accent gap-2">
            Get a Free Quote
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services
