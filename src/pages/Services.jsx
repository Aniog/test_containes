import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Factory, Ship, Globe,
  FileText, Handshake, ArrowRight
} from 'lucide-react'

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We research, identify, and shortlist qualified manufacturers that match your product specifications, target price, MOQ, and quality standards.',
    features: ['Market research & supplier mapping', 'RFQ management', 'Price comparison analysis', 'Supplier background checks'],
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
    imgId: 'svc-sourcing-img-a1b2c3',
  },
  {
    id: 'factory-verification',
    icon: ShieldCheck,
    title: 'Factory Verification & Audit',
    description: 'On-site factory audits to verify production capacity, certifications, equipment condition, and overall business legitimacy before you place an order.',
    features: ['Business license verification', 'Production capacity assessment', 'Quality system evaluation', 'Social compliance check'],
    titleId: 'svc-audit-title',
    descId: 'svc-audit-desc',
    imgId: 'svc-audit-img-d4e5f6',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    description: 'Professional inspections at key production stages — initial, during production, pre-shipment, and container loading — following AQL sampling standards.',
    features: ['Pre-production inspection', 'During production inspection (DUPRO)', 'Pre-shipment inspection (PSI)', 'Container loading supervision'],
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    imgId: 'svc-qc-img-g7h8i9',
  },
  {
    id: 'production-followup',
    icon: Factory,
    title: 'Production Follow-up',
    description: 'Regular factory visits and detailed progress reports to ensure your order stays on schedule, within spec, and free of surprises.',
    features: ['Weekly progress reports', 'Timeline tracking', 'Issue escalation & resolution', 'Photo & video updates'],
    titleId: 'svc-production-title',
    descId: 'svc-production-desc',
    imgId: 'svc-production-img-j1k2l3',
  },
  {
    id: 'shipping-coordination',
    icon: Ship,
    title: 'Shipping & Logistics',
    description: 'End-to-end logistics coordination including freight booking, export documentation, customs support, and delivery tracking to your warehouse.',
    features: ['Freight forwarder selection', 'Export documentation', 'Customs clearance support', 'Shipment tracking'],
    titleId: 'svc-shipping-title',
    descId: 'svc-shipping-desc',
    imgId: 'svc-shipping-img-m4n5o6',
  },
  {
    id: 'negotiation',
    icon: Handshake,
    title: 'Negotiation & Contract Support',
    description: 'Leverage our local market knowledge to negotiate better pricing, payment terms, and contract conditions that protect your interests.',
    features: ['Price negotiation', 'Payment term structuring', 'Contract review', 'NDA & IP protection'],
    titleId: 'svc-negotiation-title',
    descId: 'svc-negotiation-desc',
    imgId: 'svc-negotiation-img-p7q8r9',
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
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Our Sourcing Services
            </h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              From initial supplier research to final delivery — we provide hands-on support at every stage of your China sourcing project.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <img
                    alt={service.title}
                    data-strk-img-id={service.imgId}
                    data-strk-img={`[${service.descId}] [${service.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                    className="w-full rounded-xl object-cover"
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-brand-blue" />
                    </div>
                    <h2 id={service.titleId} className="text-2xl font-bold text-brand-navy">{service.title}</h2>
                  </div>
                  <p id={service.descId} className="text-slate-600 leading-relaxed mb-5">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-brand-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Need Help with Your Sourcing Project?
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            Tell us about your requirements and get a tailored proposal within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center mt-8 bg-white text-brand-blue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
