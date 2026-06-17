import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Truck, PackageCheck, Handshake,
  ArrowRight, CheckCircle2, FileText, Camera, Users, BarChart3, Package
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist qualified suppliers from our verified network based on your product requirements, target price, and quality standards.',
    details: [
      'Product-specific supplier search across China\'s manufacturing hubs',
      'Initial screening for capability, capacity, and compliance',
      'Price benchmarking against market rates',
      '3-5 qualified supplier shortlist with detailed profiles',
    ],
    imgId: 'svc-sourcing-x1y2z3',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site factory audits covering business licenses, production capacity, quality systems, and compliance certifications before you commit.',
    details: [
      'Business license and registration verification',
      'On-site production capacity assessment',
      'Quality management system evaluation (ISO, etc.)',
      'Compliance certification verification (CE, RoHS, FDA, etc.)',
      'Detailed audit report with factory photos',
    ],
    imgId: 'svc-verify-a4b5c6',
    titleId: 'svc-verify-title',
    descId: 'svc-verify-desc',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-production, during-production, and pre-shipment inspections following AQL standards to catch issues before they ship.',
    details: [
      'Pre-production inspection (PPI) — materials and components check',
      'During-production inspection (DPI) — process and quality monitoring',
      'Pre-shipment inspection (PSI) — final AQL-based inspection',
      'Detailed reports with photos and defect classification',
      'Go/No-Go recommendation for shipment',
    ],
    imgId: 'svc-qc-d7e8f9',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
  },
  {
    icon: PackageCheck,
    title: 'Production Follow-up',
    desc: 'We monitor production schedules, track milestones, and report progress so your orders stay on track and on time.',
    details: [
      'Production schedule monitoring and milestone tracking',
      'Weekly progress reports with photos',
      'Early warning system for potential delays',
      'Direct communication with factory management',
      'Issue resolution and corrective action coordination',
    ],
    imgId: 'svc-prod-g1h2i3',
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'Consolidation, freight booking, customs documentation, and door-to-door logistics for sea, air, and rail shipments.',
    details: [
      'Freight rate comparison and booking (sea, air, rail)',
      'Cargo consolidation from multiple suppliers',
      'Customs documentation and compliance',
      'Door-to-door delivery coordination',
      'Shipment tracking and status updates',
    ],
    imgId: 'svc-ship-j4k5l6',
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
  },
  {
    icon: Handshake,
    title: 'Price Negotiation',
    desc: 'Leverage local market knowledge and supplier relationships to negotiate competitive pricing and favorable payment terms.',
    details: [
      'Market price research and benchmarking',
      'Multi-supplier competitive bidding',
      'Payment terms negotiation (T/T, L/C, etc.)',
      'MOQ and volume discount optimization',
      'Contract review and risk mitigation',
    ],
    imgId: 'svc-nego-m7n8o9',
    titleId: 'svc-nego-title',
    descId: 'svc-nego-desc',
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
      <section className="bg-neutral-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent-400 font-semibold text-sm uppercase tracking-wider mb-3">
              Our Services
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Comprehensive China Sourcing Services
            </h1>
            <p className="text-lg text-neutral-300 leading-relaxed">
              From finding the right supplier to delivering goods to your warehouse,
              we provide end-to-end sourcing support tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((svc, idx) => (
              <div
                key={svc.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  idx % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
              >
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-5">
                    <svc.icon className="w-6 h-6 text-primary-500" />
                  </div>
                  <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                    {svc.title}
                  </h2>
                  <p id={svc.descId} className="text-neutral-600 leading-relaxed mb-6">
                    {svc.desc}
                  </p>
                  <ul className="space-y-3">
                    {svc.details.map((d) => (
                      <li key={d} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                        <span className="text-neutral-700">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="aspect-[4/3] bg-neutral-100 rounded-xl overflow-hidden">
                    <img
                      alt={svc.title}
                      data-strk-img-id={svc.imgId}
                      data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
            Need a Service Not Listed?
          </h2>
          <p className="text-neutral-600 text-lg mb-8">
            We offer customized sourcing solutions. Tell us your requirements and we'll create a tailored plan.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Contact Us to Discuss
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
