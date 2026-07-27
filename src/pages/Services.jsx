import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Search, ShieldCheck, ClipboardCheck, Clock, Ship, FileText, PackageCheck, Handshake } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Search & Matching',
    desc: 'We identify and evaluate suppliers that match your product specifications, quality standards, and budget requirements. Our team searches across verified factory networks, trade databases, and manufacturing clusters to find the best fit for your project.',
    details: [
      'Product-specific supplier identification',
      'Multi-supplier comparison and evaluation',
      'Price negotiation and terms discussion',
      'Background check on supplier history',
    ],
    imgId: 'svc-search-img-m1n2',
    titleId: 'svc-search-title',
    descId: 'svc-search-desc',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification & Audit',
    desc: 'On-site factory audits to verify business licenses, production capacity, quality systems, and operational compliance. We visit the factory, inspect facilities, review documentation, and provide a detailed audit report.',
    details: [
      'Business license and registration verification',
      'Production capacity and equipment assessment',
      'Quality management system review (ISO, etc.)',
      'Worker conditions and environmental compliance',
    ],
    imgId: 'svc-verify-img-o3p4',
    titleId: 'svc-verify-title',
    descId: 'svc-verify-desc',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-production, during-production, and pre-shipment inspections to ensure your products meet agreed specifications. We follow internationally recognized inspection standards and provide detailed reports with photos.',
    details: [
      'Pre-production inspection (PPI)',
      'During-production inspection (DPI)',
      'Pre-shipment inspection (PSI)',
      'Detailed inspection reports with photos',
    ],
    imgId: 'svc-inspection-img-q5r6',
    titleId: 'svc-inspection-title',
    descId: 'svc-inspection-desc',
  },
  {
    icon: Clock,
    title: 'Production Follow-up',
    desc: 'Regular monitoring of production progress, material procurement, and timeline adherence. We visit the factory during production, check milestones, and keep you updated with status reports.',
    details: [
      'Production schedule monitoring',
      'Material procurement tracking',
      'Weekly progress reports',
      'Delay risk assessment and mitigation',
    ],
    imgId: 'svc-production-img-s7t8',
    titleId: 'svc-production-title',
    descId: 'svc-production-desc',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    desc: 'Freight booking, customs documentation, and logistics coordination from factory to your destination port or warehouse. We handle the complexity of international shipping so you don\'t have to.',
    details: [
      'Sea, air, and rail freight booking',
      'Customs documentation preparation',
      'Cargo insurance arrangement',
      'Door-to-door logistics coordination',
    ],
    imgId: 'svc-shipping-img-u9v0',
    titleId: 'svc-shipping-title',
    descId: 'svc-shipping-desc',
  },
  {
    icon: Handshake,
    title: 'Negotiation & Contract Support',
    desc: 'We help negotiate pricing, payment terms, lead times, and warranty conditions with suppliers. Our bilingual team ensures clear communication and fair agreements.',
    details: [
      'Price negotiation with factories',
      'Payment terms structuring',
      'Contract drafting and review',
      'Dispute resolution assistance',
    ],
    imgId: 'svc-negotiation-img-w1x2',
    titleId: 'svc-negotiation-title',
    descId: 'svc-negotiation-desc',
  },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="services-page-title" className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Our Sourcing Services
          </h1>
          <p id="services-page-subtitle" className="text-white/80 max-w-2xl mx-auto">
            End-to-end sourcing support from supplier discovery to delivery at your door. Each service can be engaged individually or as a complete package.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((svc, index) => (
              <div
                key={svc.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <img
                    alt={svc.title}
                    data-strk-img-id={svc.imgId}
                    data-strk-img={`[${svc.descId}] [${svc.titleId}] [services-page-subtitle] [services-page-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full rounded-lg bg-neutral-light object-cover"
                  />
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <svc.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h2 id={svc.titleId} className="text-2xl font-bold text-primary mb-3">
                    {svc.title}
                  </h2>
                  <p id={svc.descId} className="text-neutral-mid leading-relaxed mb-4">
                    {svc.desc}
                  </p>
                  <ul className="space-y-2">
                    {svc.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 text-sm text-neutral-dark">
                        <PackageCheck className="w-4 h-4 text-success mt-0.5 shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need a Custom Service Package?
          </h2>
          <p className="text-white/80 mb-8">
            We tailor our services to your specific sourcing needs. Tell us about your project and we will propose the right combination of support.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-md text-lg font-semibold no-underline hover:bg-accent-light transition-colors"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  )
}
