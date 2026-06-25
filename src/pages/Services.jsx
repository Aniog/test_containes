import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, Factory, ClipboardCheck, Package, Truck, Shield,
  FileText, Users, ArrowRight, CheckCircle
} from 'lucide-react'

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We research, contact, and shortlist qualified manufacturers that match your product specifications, target price, and minimum order quantity.',
    features: ['Market research & supplier mapping', 'RFQ management & price comparison', 'Sample coordination', 'Supplier background checks'],
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
    imgId: 'svc-sourcing-img-d4a1',
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site factory audits to confirm production capacity, certifications, working conditions, and business legitimacy before you place an order.',
    features: ['Business license verification', 'Production capacity assessment', 'Certification checks (ISO, BSCI, etc.)', 'Photo & video documentation'],
    titleId: 'svc-factory-title',
    descId: 'svc-factory-desc',
    imgId: 'svc-factory-img-e5b2',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Professional QC inspections at every stage — initial production, during production, pre-shipment, and container loading checks.',
    features: ['AQL sampling inspections', 'Detailed photo reports', 'Defect classification', 'Corrective action follow-up'],
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    imgId: 'svc-qc-img-f6c3',
  },
  {
    id: 'production-followup',
    icon: Package,
    title: 'Production Follow-up',
    desc: 'Regular factory visits and progress reports to ensure your order stays on schedule and meets agreed specifications.',
    features: ['Weekly progress updates', 'Timeline tracking', 'Issue escalation & resolution', 'Material verification'],
    titleId: 'svc-production-title',
    descId: 'svc-production-desc',
    imgId: 'svc-production-img-g7d4',
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping & Logistics',
    desc: 'End-to-end logistics management from factory pickup to your warehouse — including documentation, customs, and freight booking.',
    features: ['Freight forwarder coordination', 'Export documentation', 'Container loading supervision', 'Shipment tracking'],
    titleId: 'svc-shipping-title',
    descId: 'svc-shipping-desc',
    imgId: 'svc-shipping-img-h8e5',
  },
  {
    id: 'contract-payment',
    icon: Shield,
    title: 'Contract & Payment Safety',
    desc: 'We help structure supplier contracts and manage payment milestones to protect your interests throughout the transaction.',
    features: ['Contract review & negotiation', 'Payment milestone planning', 'Escrow guidance', 'Dispute resolution support'],
    titleId: 'svc-contract-title',
    descId: 'svc-contract-desc',
    imgId: 'svc-contract-img-i9f6',
  },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Our Sourcing Services
            </h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              Comprehensive support at every stage of your China sourcing journey — from finding the right supplier to delivering goods at your door.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, idx) => (
              <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <img
                    alt={service.title}
                    data-strk-img-id={service.imgId}
                    data-strk-img={`[${service.descId}] [${service.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                    className="w-full rounded-xl object-cover bg-slate-100"
                  />
                </div>
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <service.icon className="w-10 h-10 text-accent mb-4" />
                  <h2 id={service.titleId} className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">{service.title}</h2>
                  <p id={service.descId} className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-slate-700 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
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

      {/* CTA */}
      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Need Help Sourcing from China?
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Tell us about your project and we will recommend the right service package for your needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center mt-8 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-3.5 rounded-lg text-base no-underline transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
