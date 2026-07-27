import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ClipboardCheck, Factory, Truck, Shield, BarChart3,
  ArrowRight, CheckCircle
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and connect you with reliable suppliers that match your product specifications, quality requirements, and budget.',
    details: [
      'Market research and supplier mapping',
      'RFQ preparation and distribution',
      'Supplier shortlisting and comparison',
      'Negotiation support',
      'NDA and contract facilitation',
    ],
    imgId: 'services-sourcing-9a1b2c',
  },
  {
    icon: ClipboardCheck,
    title: 'Supplier Verification',
    description: 'Thorough due diligence to ensure your potential suppliers are legitimate, capable, and trustworthy.',
    details: [
      'Business license and registration verification',
      'On-site factory audit',
      'Production capacity assessment',
      'Quality management system review',
      'Background and reputation check',
    ],
    imgId: 'services-verification-0b2c3d',
  },
  {
    icon: Factory,
    title: 'Quality Inspection',
    description: 'Comprehensive inspection services at every stage of production to ensure quality standards are met.',
    details: [
      'Pre-production sample evaluation',
      'During-production inspection (DUPRO)',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
      'Detailed inspection reports with photos',
    ],
    imgId: 'services-inspection-1c3d4e',
  },
  {
    icon: BarChart3,
    title: 'Production Monitoring',
    description: 'Keep your production on track with regular monitoring, progress reports, and proactive issue management.',
    details: [
      'Production schedule monitoring',
      'Weekly progress reports',
      'Raw material quality checks',
      'Production milestone tracking',
      'Early warning for potential delays',
    ],
    imgId: 'services-monitoring-2d4e5f',
  },
  {
    icon: Shield,
    title: 'Compliance & Testing',
    description: 'Ensure your products meet regulatory requirements and safety standards for your target market.',
    details: [
      'Product compliance assessment',
      'Lab testing coordination (CE, FCC, RoHS, FDA, etc.)',
      'Certification assistance',
      'Documentation preparation',
      'Labeling and packaging compliance',
    ],
    imgId: 'services-compliance-3e5f6g',
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    description: 'End-to-end logistics management from factory to your doorstep.',
    details: [
      'Freight booking (sea, air, express)',
      'Shipment consolidation',
      'Customs clearance documentation',
      'Cargo insurance coordination',
      'Door-to-door delivery tracking',
    ],
    imgId: 'services-shipping-4f6g7h',
  },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-navy-800 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Our Services
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
              Comprehensive China sourcing services designed to help you find quality suppliers, control production, and deliver products successfully.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-20">
            {services.map((service, i) => (
              <div
                key={i}
                className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className="w-14 h-14 bg-navy-50 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-navy-700" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-navy-700 mb-3">{service.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                    <img
                      alt={service.title}
                      className="w-full h-full object-cover"
                      data-strk-img-id={service.imgId}
                      data-strk-img={`[service-title-${i}] [service-desc-${i}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                  <p id={`service-desc-${i}`} className="hidden">{service.description}</p>
                  <h3 id={`service-title-${i}`} className="hidden">{service.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-700 mb-4">
            Need a Custom Service Package?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            We tailor our services to your specific needs. Tell us what you need and we will propose a solution.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-base transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}