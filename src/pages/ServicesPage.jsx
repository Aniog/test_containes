import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Factory, Ship, FileText,
  Users, Handshake, PackageCheck
} from 'lucide-react'
import CTASection from '@/components/CTASection'

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We research, identify, and shortlist qualified manufacturers that match your product specifications, target price, MOQ, and quality standards.',
    features: ['Database of 10,000+ verified factories', 'Multi-supplier comparison reports', 'Price and capability benchmarking', 'Trade show supplier follow-up'],
    imgId: 'svc-sourcing-img-a1b2c3',
  },
  {
    id: 'factory-verification',
    icon: ShieldCheck,
    title: 'Factory Verification & Audit',
    desc: 'On-site factory audits to verify business legitimacy, production capacity, quality management systems, and export experience.',
    features: ['Business license verification', 'Production capacity assessment', 'Quality system evaluation', 'Worker condition review'],
    imgId: 'svc-audit-img-d4e5f6',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    desc: 'Professional inspections at every stage — from initial production samples to final pre-shipment checks with detailed photo reports.',
    features: ['Pre-production inspection (PPI)', 'During production inspection (DPI)', 'Pre-shipment inspection (PSI)', 'Container loading supervision'],
    imgId: 'svc-qc-img-g7h8i9',
  },
  {
    id: 'production-followup',
    icon: Factory,
    title: 'Production Monitoring',
    desc: 'Regular factory visits and progress tracking to ensure your order stays on schedule and meets agreed specifications.',
    features: ['Weekly progress reports', 'Milestone tracking', 'Issue escalation management', 'Timeline adjustment coordination'],
    imgId: 'svc-production-img-j1k2l3',
  },
  {
    id: 'shipping-logistics',
    icon: Ship,
    title: 'Shipping & Logistics',
    desc: 'End-to-end freight coordination including booking, documentation, customs clearance, and delivery tracking.',
    features: ['Sea, air, and rail freight', 'Customs documentation', 'Cargo consolidation', 'Door-to-door delivery'],
    imgId: 'svc-shipping-img-m4n5o6',
  },
  {
    id: 'negotiation-support',
    icon: Handshake,
    title: 'Negotiation & Contracts',
    desc: 'We negotiate pricing, payment terms, and production agreements on your behalf, leveraging local market knowledge.',
    features: ['Price negotiation', 'Payment term structuring', 'Contract review', 'Dispute resolution support'],
    imgId: 'svc-negotiation-img-p7q8r9',
  },
]

export default function ServicesPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-navy/10 text-navy text-sm font-medium px-3 py-1 rounded-full mb-4">
              Our Services
            </span>
            <h1 id="services-page-title" className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
              Full-Service China Sourcing Support
            </h1>
            <p id="services-page-subtitle" className="text-lg text-slate-600 max-w-2xl mx-auto">
              From supplier discovery to doorstep delivery, we provide hands-on support at every stage of your China sourcing journey.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} className={`grid lg:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <service.icon className="w-10 h-10 text-navy mb-4" />
                  <h2 id={`${service.id}-title`} className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">{service.title}</h2>
                  <p id={`${service.id}-desc`} className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-slate-700 text-sm">
                        <PackageCheck className="w-4 h-4 text-green-600 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <img
                    data-strk-img-id={service.imgId}
                    data-strk-img={`[${service.id}-desc] [${service.id}-title] [services-page-subtitle]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={service.title}
                    className="w-full rounded-xl shadow-md"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
