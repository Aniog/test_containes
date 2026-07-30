import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Factory, Ship, ArrowRight
} from 'lucide-react'

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We search our network and verified databases to find manufacturers that match your product specifications, quality standards, MOQ requirements, and budget.',
    features: ['Product-specific supplier matching', 'Multiple supplier comparisons', 'Price and capability analysis', 'Initial sample coordination'],
    imgId: 'svc-sourcing-img-4a2b1c',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
  },
  {
    id: 'factory-verification',
    icon: ShieldCheck,
    title: 'Factory Verification & Audit',
    desc: 'Our team visits factories in person to verify business licenses, production capacity, quality management systems, and working conditions.',
    features: ['On-site factory visits', 'Business license verification', 'Production capacity assessment', 'Quality system evaluation'],
    imgId: 'svc-audit-img-5b3c2d',
    titleId: 'svc-audit-title',
    descId: 'svc-audit-desc',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    desc: 'Professional inspectors check your goods at every stage — during production, before packing, and during container loading.',
    features: ['During Production Inspection (DPI)', 'Pre-Shipment Inspection (PSI)', 'Container Loading Supervision', 'Detailed photo reports'],
    imgId: 'svc-qc-img-6c4d3e',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
  },
  {
    id: 'production-followup',
    icon: Factory,
    title: 'Production Follow-up',
    desc: 'We monitor your order from confirmation to completion, with regular factory visits and progress updates to keep everything on track.',
    features: ['Weekly progress reports', 'Timeline management', 'Issue resolution', 'Direct factory communication'],
    imgId: 'svc-production-img-7d5e4f',
    titleId: 'svc-production-title',
    descId: 'svc-production-desc',
  },
  {
    id: 'shipping-coordination',
    icon: Ship,
    title: 'Shipping & Logistics',
    desc: 'End-to-end logistics coordination including freight booking, customs documentation, and delivery tracking from factory to your warehouse.',
    features: ['Sea, air, and rail freight', 'Customs documentation', 'Consolidation services', 'Door-to-door delivery'],
    imgId: 'svc-shipping-img-8e6f5g',
    titleId: 'svc-shipping-title',
    descId: 'svc-shipping-desc',
  },
  {
    id: 'negotiation',
    icon: Search,
    title: 'Negotiation & Contracts',
    desc: 'We negotiate pricing, payment terms, and contract details on your behalf, leveraging local market knowledge and supplier relationships.',
    features: ['Price negotiation', 'Payment term optimization', 'Contract review', 'MOQ negotiation'],
    imgId: 'svc-negotiation-img-9f7g6h',
    titleId: 'svc-negotiation-title',
    descId: 'svc-negotiation-desc',
  },
]

export default function ServicesPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    try {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    } catch (e) {
      console.log('ImageHelper error:', e)
    }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Our Sourcing Services
            </h1>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed">
              Comprehensive China sourcing support from supplier identification to final delivery. Every service designed to reduce your risk and save you time.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <div key={service.id} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
                  <div className="w-full lg:w-1/2">
                    <img
                      data-strk-img-id={service.imgId}
                      data-strk-img={`[${service.descId}] [${service.titleId}]`}
                      data-strk-img-ratio="3x2"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={service.title}
                      className="w-full rounded-xl object-cover aspect-[3/2] bg-gray-200"
                    />
                  </div>
                  <div className="w-full lg:w-1/2">
                    <Icon className="w-10 h-10 text-brand-blue mb-4" />
                    <h2 id={service.titleId} className="text-2xl md:text-3xl font-bold text-brand-dark tracking-tight">
                      {service.title}
                    </h2>
                    <p id={service.descId} className="mt-3 text-brand-gray leading-relaxed">
                      {service.desc}
                    </p>
                    <ul className="mt-5 space-y-2">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-brand-dark">
                          <span className="w-1.5 h-1.5 bg-brand-blue rounded-full shrink-0" />
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

      {/* CTA */}
      <section className="py-16 md:py-20 bg-brand-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Need Help Sourcing from China?
          </h2>
          <p className="mt-4 text-blue-100 text-lg">
            Tell us about your project and get a customized service proposal within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center mt-8 bg-white text-brand-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
