import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { Search, ShieldCheck, ClipboardCheck, Factory, Truck, FileText, Users, BarChart3 } from 'lucide-react'

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    titleId: 'svc-page-sourcing-title',
    descId: 'svc-page-sourcing-desc',
    imgId: 'svc-page-sourcing-img-a1b2c3',
    description: 'We leverage our network of 2,000+ verified manufacturers and attend trade fairs across China to find the right supplier for your product.',
    features: ['Database of pre-vetted suppliers', 'Trade fair sourcing', 'Competitive quotation comparison', 'Background checks on shortlisted factories'],
  },
  {
    id: 'factory-verification',
    icon: ShieldCheck,
    title: 'Factory Verification & Audit',
    titleId: 'svc-page-audit-title',
    descId: 'svc-page-audit-desc',
    imgId: 'svc-page-audit-img-d4e5f6',
    description: 'Our team visits factories in person to verify production capabilities, certifications, working conditions, and business legitimacy.',
    features: ['On-site facility inspection', 'Business license verification', 'Production capacity assessment', 'Photo and video documentation'],
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    titleId: 'svc-page-qc-title',
    descId: 'svc-page-qc-desc',
    imgId: 'svc-page-qc-img-g7h8i9',
    description: 'Professional inspections at every stage of production following international AQL standards to ensure your goods meet specifications.',
    features: ['Pre-production inspection', 'During-production inspection', 'Pre-shipment final inspection', 'Container loading supervision'],
  },
  {
    id: 'production-followup',
    icon: Factory,
    title: 'Production Monitoring',
    titleId: 'svc-page-production-title',
    descId: 'svc-page-production-desc',
    imgId: 'svc-page-production-img-j1k2l3',
    description: 'Regular factory visits during production to monitor progress, catch issues early, and keep your order on schedule.',
    features: ['Weekly progress reports', 'Timeline tracking', 'Issue escalation and resolution', 'Sample approval management'],
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping & Logistics',
    titleId: 'svc-page-shipping-title',
    descId: 'svc-page-shipping-desc',
    imgId: 'svc-page-shipping-img-m4n5o6',
    description: 'End-to-end logistics coordination including freight booking, customs documentation, and delivery tracking.',
    features: ['Sea, air, and express freight', 'Export documentation', 'Customs clearance support', 'Door-to-door delivery'],
  },
  {
    id: 'negotiation',
    icon: FileText,
    title: 'Negotiation & Contracts',
    titleId: 'svc-page-negotiation-title',
    descId: 'svc-page-negotiation-desc',
    imgId: 'svc-page-negotiation-img-p7q8r9',
    description: 'We negotiate pricing, payment terms, and delivery schedules on your behalf, and review supplier contracts to protect your interests.',
    features: ['Price benchmarking', 'Payment term structuring', 'Contract review', 'Dispute resolution support'],
  },
]

const Services = () => {
  const pageRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current)
  }, [])

  return (
    <div ref={pageRef}>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Comprehensive sourcing support from supplier identification to final delivery. Every service designed to reduce your risk and save you time.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, idx) => {
              const Icon = service.icon
              const isReversed = idx % 2 !== 0
              return (
                <div key={service.id} className={`grid lg:grid-cols-2 gap-10 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={isReversed ? 'lg:order-2' : ''}>
                    <div className="aspect-[4/3] rounded-xl overflow-hidden">
                      <img
                        data-strk-img-id={service.imgId}
                        data-strk-img={`[${service.descId}] [${service.titleId}]`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className={isReversed ? 'lg:order-1' : ''}>
                    <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-brand-blue" />
                    </div>
                    <h2 id={service.titleId} className="text-2xl md:text-3xl font-bold text-brand-dark mb-3">{service.title}</h2>
                    <p id={service.descId} className="text-brand-muted mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-3 text-sm text-brand-dark">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-brand-navy text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Start Sourcing?</h2>
          <p className="text-gray-300 mb-8">Tell us what you need and get a free sourcing plan within 24 hours.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-orange text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-orange-600 transition"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services
