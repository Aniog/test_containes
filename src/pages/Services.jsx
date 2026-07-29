import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory, DollarSign,
  FileText, Package, ArrowRight, CheckCircle2
} from 'lucide-react'

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We search our network and online platforms to identify manufacturers that match your product specifications, quality standards, and budget.',
    features: ['Product-specific factory matching', 'Multiple supplier shortlisting', 'Background checks on business licenses', 'Price and MOQ comparison'],
    imgId: 'svc-page-sourcing-1a2b3c',
  },
  {
    id: 'factory-audit',
    icon: ShieldCheck,
    title: 'Factory Verification & Audit',
    desc: 'Our team visits factories in person to verify their legitimacy, production capacity, quality systems, and working conditions.',
    features: ['On-site facility inspection', 'Production capacity assessment', 'Certification verification (ISO, BSCI, etc.)', 'Worker condition evaluation'],
    imgId: 'svc-page-audit-4d5e6f',
  },
  {
    id: 'quality-control',
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    desc: 'Professional inspections at every stage of production to ensure your goods meet specifications before they leave the factory.',
    features: ['Pre-production inspection (PPI)', 'During production inspection (DPI)', 'Pre-shipment inspection (PSI)', 'Container loading supervision'],
    imgId: 'svc-page-qc-7g8h9i',
  },
  {
    id: 'production-monitoring',
    icon: Factory,
    title: 'Production Follow-up',
    desc: 'Regular factory visits and communication to monitor production progress, catch issues early, and keep your order on schedule.',
    features: ['Weekly progress reports', 'Timeline tracking', 'Issue escalation and resolution', 'Sample approval management'],
    imgId: 'svc-page-prod-0j1k2l',
  },
  {
    id: 'shipping-logistics',
    icon: Truck,
    title: 'Shipping & Logistics',
    desc: 'Complete freight coordination from factory to your warehouse, including documentation, consolidation, and customs support.',
    features: ['Sea, air, and rail freight options', 'Export documentation preparation', 'Cargo consolidation', 'Door-to-door delivery coordination'],
    imgId: 'svc-page-ship-3m4n5o',
  },
  {
    id: 'negotiation-support',
    icon: DollarSign,
    title: 'Price Negotiation',
    desc: 'We leverage local market knowledge and supplier relationships to secure better pricing, payment terms, and trade conditions.',
    features: ['Competitive price benchmarking', 'Payment term negotiation', 'MOQ reduction strategies', 'Long-term contract structuring'],
    imgId: 'svc-page-nego-6p7q8r',
  },
  {
    id: 'sample-management',
    icon: Package,
    title: 'Sample Development',
    desc: 'We manage the entire sampling process from initial prototypes to final pre-production samples, ensuring your specifications are met.',
    features: ['Sample request coordination', 'Quality evaluation', 'Modification follow-up', 'Approval documentation'],
    imgId: 'svc-page-sample-9s0t1u',
  },
  {
    id: 'documentation',
    icon: FileText,
    title: 'Documentation & Compliance',
    desc: 'We help ensure your products meet destination country regulations and prepare all necessary export/import documentation.',
    features: ['Product compliance research', 'Certificate of origin', 'Lab testing coordination', 'Customs documentation'],
    imgId: 'svc-page-docs-2v3w4x',
  },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 id="services-page-title" className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Our Sourcing Services
          </h1>
          <p id="services-page-subtitle" className="text-lg text-slate-300 max-w-2xl">
            End-to-end support for every stage of your China sourcing journey. From finding the right factory to delivering goods at your door.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, idx) => {
              const Icon = service.icon
              const isEven = idx % 2 === 0
              return (
                <div key={service.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}>
                  <div className="w-full lg:w-1/2">
                    <div className="rounded-xl overflow-hidden h-64 md:h-80">
                      <img
                        data-strk-img-id={service.imgId}
                        data-strk-img={`[svc-page-${service.id}-title] [services-page-title]`}
                        data-strk-img-ratio="3x2"
                        data-strk-img-width="800"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-brand-blue" />
                      </div>
                      <h2 id={`svc-page-${service.id}-title`} className="text-2xl font-bold text-brand-navy">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-4">{service.desc}</p>
                    <ul className="space-y-2">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                          {f}
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

      <section className="py-16 md:py-20 bg-brand-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Sourcing Solution?</h2>
          <p className="text-slate-300 mb-8">Every project is different. Tell us your requirements and we'll put together a tailored service package.</p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition no-underline"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
