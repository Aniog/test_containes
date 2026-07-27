import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Search, Factory, ClipboardCheck, Settings, Ship, ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist qualified manufacturers based on your product specifications, volume requirements, and target price.',
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site factory audits to verify certifications, production capacity, equipment, and quality management systems.',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment, during production, and container loading inspections to ensure your products meet specifications.',
  },
  {
    id: 'production-followup',
    icon: Settings,
    title: 'Production Follow-up',
    desc: 'Regular production status updates with timeline tracking, sample approvals, and milestone monitoring.',
  },
  {
    id: 'shipping-coordination',
    icon: Ship,
    title: 'Shipping Coordination',
    desc: 'End-to-end logistics management including freight booking, customs documentation, and delivery tracking.',
  },
]

export default function ServicesSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [])

  return (
    <section className="py-20 md:py-28 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight">
            End-to-End China Sourcing Solutions
          </h2>
          <p className="mt-4 text-navy-500 text-lg">
            From supplier discovery to final delivery, we handle every step of your sourcing journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-xl border border-gray-100 p-6 md:p-8 hover:shadow-lg hover:border-brand-100 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-brand-50 flex items-center justify-center mb-5 group-hover:bg-brand-100 transition-colors">
                  <Icon className="w-6 h-6 text-brand-600" />
                </div>

                <div className="aspect-[16/9] rounded-lg overflow-hidden mb-5 bg-gray-100">
                  <img
                    alt={service.title}
                    data-strk-img-id={`service-card-${service.id}-${idx}b4e2`}
                    data-strk-img={`[service-title-${service.id}] [services-subtitle] China sourcing`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="500"
                    className="w-full h-full object-cover"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>

                <h3 id={`service-title-${service.id}`} className="text-lg font-semibold text-navy-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-navy-500 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}