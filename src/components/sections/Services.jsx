import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Search, ShieldCheck, ClipboardCheck, Factory, Ship, FileCheck } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and shortlist suppliers that match your product specs, quality standards, and target pricing.',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    description: 'On-site audits to confirm factory credentials, production capacity, compliance, and reliability.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-shipment, during-production, and container-loading inspections to reduce defects and returns.',
  },
  {
    icon: Factory,
    title: 'Production Follow-Up',
    description: 'Regular updates, milestone tracking, and problem-solving to keep your orders on schedule.',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'We coordinate freight forwarding, customs docs, and logistics to move goods smoothly to your door.',
  },
  {
    icon: FileCheck,
    title: 'Order Management',
    description: 'One point of contact for quotes, samples, contracts, payments, and delivery timelines.',
  },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 lg:py-28 bg-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <span className="section-label">Our Services</span>
            <h2 id="services-title" className="text-3xl lg:text-4xl font-bold mt-3 mb-4">
              End-to-end sourcing support from China
            </h2>
            <p id="services-desc" className="text-lg text-slate-600">
              From finding the right supplier to getting goods shipped, we handle the details so you can focus on growing your business.
            </p>
          </div>
          <div className="hidden lg:block">
            <img
              alt="Factory quality inspection"
              className="rounded-2xl shadow-lg w-full object-cover"
              data-strk-img-id="services-img-ssourcing-7g8h9i"
              data-strk-img="[services-desc] [services-title]"
              data-strk-img-ratio="16x9"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.title} className="card p-6 lg:p-8 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-brand-50 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-brand-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Link to="/services" className="btn-secondary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
