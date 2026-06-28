import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Search, Building2, ClipboardCheck, Factory, PackageCheck, Ship } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and shortlist qualified manufacturers based on your product specifications, budget, and volume requirements.',
    imgId: 'service-sourcing-8a3b2c',
  },
  {
    icon: Building2,
    title: 'Factory Verification',
    description: 'On-site factory audits to verify business licenses, production capacity, equipment, and compliance with international standards.',
    imgId: 'service-verify-9c4d3e',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-shipment, during-production, and container-loading inspections to ensure your products meet agreed specifications.',
    imgId: 'service-qc-7b5c1a',
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    description: 'Regular factory visits and progress reports to keep your order on schedule and catch issues before they become costly problems.',
    imgId: 'service-followup-6d2e8f',
  },
  {
    icon: PackageCheck,
    title: 'Sample Coordination',
    description: 'We manage sample requests, track deliveries, and consolidate feedback to accelerate your product development cycle.',
    imgId: 'service-sample-5a1b7d',
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics',
    description: 'End-to-end logistics support including customs documentation, freight forwarding, and delivery tracking to your warehouse.',
    imgId: 'service-shipping-4e9c2b',
  },
]

export default function ServicesSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 mb-2 block">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Full-Service China Sourcing
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            From finding the right factory to delivering goods to your door, we manage every step of the sourcing process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-lg border border-border-light p-6 hover:shadow-md transition-shadow"
            >
              <div className="mb-4 overflow-hidden rounded-md">
                <img
                  data-strk-img-id={service.imgId}
                  data-strk-img={`[${service.title.toLowerCase().replace(/\s+/g, '-')}]-desc [${service.title.toLowerCase().replace(/\s+/g, '-')}]-title`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={service.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                  <service.icon className="w-5 h-5 text-blue-700" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 text-slate-700 font-medium rounded-md hover:bg-slate-50 transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
