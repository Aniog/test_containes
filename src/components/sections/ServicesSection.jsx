import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Search, ShieldCheck, ClipboardCheck, Factory, Ship, FileText } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and shortlist manufacturers that match your product specifications, capacity needs, and target pricing.',
    imgId: 'service-supplier-sourcing-7g8h9i',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    description: 'On-site audits to confirm business licenses, production capabilities, equipment, and quality management systems.',
    imgId: 'service-factory-verification-8h9i0j',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-production, during-production, and pre-shipment inspections to catch issues before goods leave the factory.',
    imgId: 'service-quality-inspection-9i0j1k',
  },
  {
    icon: Factory,
    title: 'Production Follow-Up',
    description: 'Weekly progress reports, milestone tracking, and supplier communication to keep your order on schedule.',
    imgId: 'service-production-followup-0j1k2l',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'We consolidate documentation, coordinate with freight forwarders, and track shipments through delivery.',
    imgId: 'service-shipping-coordination-1k2l3m',
  },
  {
    icon: FileText,
    title: 'Order Administration',
    description: 'Purchase order management, invoice verification, and export paperwork support to reduce administrative burden.',
    imgId: 'service-order-admin-2l3m4n',
  },
]

export default function ServicesSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 lg:py-28 bg-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="section-label">Our Services</span>
          <h2 id="services-title" className="text-3xl sm:text-4xl font-bold mt-3">
            End-to-End Sourcing Support
          </h2>
          <p id="services-desc" className="text-lg text-slate-600 mt-4">
            From first supplier search to final shipment, we manage the details so you can focus on growing your business.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div key={service.title} className="card overflow-hidden group">
              <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  data-strk-img-id={service.imgId}
                  data-strk-img={`[service-${service.title.toLowerCase().replace(/\s+/g, '-')}-desc] [services-title] [services-desc]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-brand-50 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-brand-700" />
                </div>
                <h3
                  id={`service-${service.title.toLowerCase().replace(/\s+/g, '-')}-title`}
                  className="text-xl font-semibold"
                >
                  {service.title}
                </h3>
                <p
                  id={`service-${service.title.toLowerCase().replace(/\s+/g, '-')}-desc`}
                  className="text-slate-600 mt-2 leading-relaxed"
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
