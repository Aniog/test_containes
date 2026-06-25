import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Factory, Ship, Users,
  ArrowRight, FileText, DollarSign, Truck, Package
} from 'lucide-react'

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify, evaluate, and shortlist qualified manufacturers that match your product specifications, quality standards, MOQ requirements, and budget.',
    features: ['Market research & supplier identification', 'Capability assessment & comparison', 'Price benchmarking across suppliers', 'MOQ negotiation for smaller orders'],
    imgId: 'svc-sourcing-img-4a2b1c',
  },
  {
    id: 'factory-verification',
    icon: ShieldCheck,
    title: 'Factory Verification & Audit',
    desc: 'Our team conducts on-site factory audits to verify production capacity, quality management systems, certifications, and overall business legitimacy.',
    features: ['On-site facility inspection', 'Business license & certification check', 'Production capacity assessment', 'Worker conditions & compliance review'],
    imgId: 'svc-audit-img-5c3d2e',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    desc: 'Professional quality inspections at every stage — from initial production samples to final pre-shipment checks — with detailed photo reports.',
    features: ['Pre-production sample inspection', 'During Production Inspection (DPI)', 'Pre-Shipment Inspection (PSI)', 'Container Loading Supervision (CLS)'],
    imgId: 'svc-qc-img-6d4e3f',
  },
  {
    id: 'production-followup',
    icon: Factory,
    title: 'Production Follow-up',
    desc: 'We monitor your production timeline with regular factory visits, progress photos, and milestone updates to keep everything on schedule.',
    features: ['Weekly production progress reports', 'On-site milestone verification', 'Delay risk identification & mitigation', 'Direct factory communication'],
    imgId: 'svc-production-img-7e5f4g',
  },
  {
    id: 'shipping-logistics',
    icon: Ship,
    title: 'Shipping & Logistics',
    desc: 'End-to-end freight coordination including booking, documentation, customs clearance support, and delivery tracking to your warehouse.',
    features: ['Sea, air, and express freight options', 'Export documentation preparation', 'Customs clearance coordination', 'Real-time shipment tracking'],
    imgId: 'svc-shipping-img-8f6g5h',
  },
  {
    id: 'negotiation-support',
    icon: DollarSign,
    title: 'Negotiation & Contract Support',
    desc: 'Leverage our local market knowledge and language skills to negotiate better pricing, payment terms, and contractual protections.',
    features: ['Price negotiation & benchmarking', 'Payment term optimization', 'Contract review & drafting support', 'Dispute resolution assistance'],
    imgId: 'svc-negotiation-img-9g7h6i',
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
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-3">Our Services</p>
            <h1 id="services-hero-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              Full-Service China Sourcing Support
            </h1>
            <p id="services-hero-subtitle" className="text-lg text-white/80 leading-relaxed">
              From finding the right factory to delivering goods at your door — we provide comprehensive sourcing services tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 id={`svc-${service.id}-title`} className="text-2xl md:text-3xl font-bold text-text-primary tracking-tight mb-3">{service.title}</h2>
                  <p id={`svc-${service.id}-desc`} className="text-text-secondary leading-relaxed mb-6">{service.desc}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <ArrowRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-text-primary text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-xl overflow-hidden ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    data-strk-img-id={service.imgId}
                    data-strk-img={`[svc-${service.id}-desc] [svc-${service.id}-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={service.title}
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg-alt py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight mb-4">Need Help Sourcing from China?</h2>
          <p className="text-text-secondary text-lg mb-8">Tell us about your project and get a customized service proposal within 24 hours.</p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-lg text-base no-underline transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
