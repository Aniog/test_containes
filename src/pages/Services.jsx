import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { Search, ShieldCheck, ClipboardCheck, Factory, Truck, FileText, ArrowRight } from 'lucide-react'

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    description: "We search across China's manufacturing regions to find suppliers that match your exact product specifications, quality standards, and budget.",
    details: [
      'Product-specific factory database search',
      'Multiple supplier quotes and comparison',
      'Background checks on business licenses',
      'Sample coordination and evaluation',
    ],
    imgId: 'svc-sourcing-img-1a2b3c',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
  },
  {
    id: 'factory-verification',
    icon: ShieldCheck,
    title: 'Factory Verification & Audit',
    description: 'Before you commit to any supplier, we visit the factory in person to verify their legitimacy, capacity, and quality systems.',
    details: [
      'On-site factory visit and photo documentation',
      'Production capacity assessment',
      'Quality management system review',
      'Business license and export history verification',
    ],
    imgId: 'svc-audit-img-4d5e6f',
    titleId: 'svc-audit-title',
    descId: 'svc-audit-desc',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    description: 'Our QC team conducts professional inspections at every stage of production to ensure your goods meet specifications.',
    details: [
      'Pre-production inspection (PPI)',
      'During production inspection (DPI)',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision (CLS)',
    ],
    imgId: 'svc-qc-img-7g8h9i',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
  },
  {
    id: 'production-followup',
    icon: Factory,
    title: 'Production Follow-up',
    description: 'We stay in regular contact with your factory throughout production, providing updates and catching issues early.',
    details: [
      'Weekly production progress reports',
      'Timeline tracking and delay alerts',
      'On-site visits during critical stages',
      'Issue resolution and corrective actions',
    ],
    imgId: 'svc-production-img-2j3k4l',
    titleId: 'svc-production-title',
    descId: 'svc-production-desc',
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping & Logistics',
    description: 'We coordinate the entire export process from factory to your warehouse, handling documentation and freight.',
    details: [
      'Freight forwarder selection and booking',
      'Export documentation and customs clearance',
      'Sea, air, and rail freight options',
      'Door-to-door delivery coordination',
    ],
    imgId: 'svc-shipping-img-5m6n7o',
    titleId: 'svc-shipping-title',
    descId: 'svc-shipping-desc',
  },
  {
    id: 'negotiation',
    icon: FileText,
    title: 'Price & Contract Negotiation',
    description: 'We leverage our local expertise and relationships to negotiate the best possible terms for your orders.',
    details: [
      'Price benchmarking against market rates',
      'Payment term negotiation',
      'Contract review and protection clauses',
      'MOQ reduction strategies',
    ],
    imgId: 'svc-negotiation-img-8p9q0r',
    titleId: 'svc-negotiation-title',
    descId: 'svc-negotiation-desc',
  },
]

const Services = () => {
  const pageRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current)
  }, [])

  return (
    <div ref={pageRef}>
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="services-page-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Our Sourcing Services
          </h1>
          <p id="services-page-subtitle" className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            Comprehensive China sourcing support from supplier discovery to final delivery.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {services.map((service, idx) => {
              const Icon = service.icon
              const isReversed = idx % 2 !== 0
              return (
                <div key={service.id} className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${isReversed ? 'lg:direction-rtl' : ''}`}>
                  <div className={isReversed ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h2 id={service.titleId} className="text-2xl md:text-3xl font-bold text-text-primary">{service.title}</h2>
                    </div>
                    <p id={service.descId} className="text-text-body leading-relaxed mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-text-body text-sm">
                          <ArrowRight className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={isReversed ? 'lg:order-1' : ''}>
                    <img
                      data-strk-img-id={service.imgId}
                      data-strk-img={`[${service.descId}] [${service.titleId}] [services-page-title]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={service.title}
                      className="w-full rounded-xl shadow-sm"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary">Ready to Start Sourcing?</h2>
          <p className="mt-4 text-text-body">Tell us about your product and we'll provide a free sourcing plan.</p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services
