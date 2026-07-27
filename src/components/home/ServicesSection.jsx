import { useRef, useEffect } from 'react'
import { Search, ClipboardCheck, Eye, Truck, BarChart3, FileText } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and shortlist reliable manufacturers that match your product specs, budget, and capacity requirements.',
    imgId: 'svc-sourcing-d4e5f6',
  },
  {
    icon: ClipboardCheck,
    title: 'Factory Verification',
    description: 'On-site audits of factory facilities, certifications, production capacity, and legal status to reduce risk.',
    imgId: 'svc-factory-g7h8i9',
  },
  {
    icon: Eye,
    title: 'Quality Inspection',
    description: 'Pre-shipment and in-process inspections to catch defects before goods leave the factory floor.',
    imgId: 'svc-qc-j0k1l2',
  },
  {
    icon: BarChart3,
    title: 'Production Follow-up',
    description: 'Regular status reports, milestone tracking, and proactive issue resolution to keep timelines on track.',
    imgId: 'svc-follow-m3n4o5',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'Freight forwarding support, customs documentation, and logistics management to your warehouse door.',
    imgId: 'svc-shipping-p6q7r8',
  },
  {
    icon: FileText,
    title: 'Documentation Support',
    description: 'Contracts, POs, invoices, packing lists, and compliance paperwork handled accurately and on time.',
    imgId: 'svc-docs-s9t0u1',
  },
]

export default function ServicesSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-slate-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            End-to-End Sourcing Services
          </h2>
          <p id="services-subtitle" className="mt-4 text-lg text-slate-600">
            From supplier discovery to final delivery, we manage every step so you can focus on growing your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[16/10] bg-slate-100 overflow-hidden">
                <img
                  data-strk-img-id={service.imgId}
                  data-strk-img={`[${service.title.toLowerCase().replace(/\s+/g, '-')}-desc] [services-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                  <service.icon className="w-5 h-5 text-brand" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p
                  id={`${service.title.toLowerCase().replace(/\s+/g, '-')}-desc`}
                  className="text-sm text-slate-600 leading-relaxed"
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-light text-white font-semibold text-base px-8 py-3.5 rounded-lg transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
