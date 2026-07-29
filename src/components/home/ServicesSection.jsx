import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Search, ShieldCheck, ClipboardCheck, Factory, Ship, HeadphonesIcon } from 'lucide-react'

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and shortlist qualified manufacturers based on your product specs, MOQ, and budget requirements.',
    imgId: 'svc-sourcing-4a8b1c',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
  },
  {
    id: 'factory-verification',
    icon: ShieldCheck,
    title: 'Factory Verification',
    description: 'On-site factory audits to verify production capacity, certifications, working conditions, and business legitimacy.',
    imgId: 'svc-verify-5b9c2d',
    titleId: 'svc-verify-title',
    descId: 'svc-verify-desc',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-shipment, during-production, and container loading inspections following AQL standards.',
    imgId: 'svc-qc-6c0d3e',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
  },
  {
    id: 'production-followup',
    icon: Factory,
    title: 'Production Follow-up',
    description: 'Regular factory visits and progress reports to keep your order on schedule and within specifications.',
    imgId: 'svc-production-7d1e4f',
    titleId: 'svc-production-title',
    descId: 'svc-production-desc',
  },
  {
    id: 'shipping-coordination',
    icon: Ship,
    title: 'Shipping & Logistics',
    description: 'End-to-end freight coordination including documentation, customs clearance, and delivery tracking.',
    imgId: 'svc-shipping-8e2f5g',
    titleId: 'svc-shipping-title',
    descId: 'svc-shipping-desc',
  },
  {
    id: 'ongoing-support',
    icon: HeadphonesIcon,
    title: 'Ongoing Support',
    description: 'Dedicated account manager for communication, negotiation, and issue resolution throughout your project.',
    imgId: 'svc-support-9f3g6h',
    titleId: 'svc-support-title',
    descId: 'svc-support-desc',
  },
]

const ServicesSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 id="services-section-title" className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            End-to-End Sourcing Services
          </h2>
          <p id="services-section-subtitle" className="text-lg text-neutral-600 max-w-2xl mx-auto">
            From finding the right supplier to delivering goods at your door — we handle every step of the China sourcing process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.id} className="bg-white border border-neutral-200 rounded-xl p-6 md:p-8 hover:shadow-lg transition-shadow group">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 id={service.titleId} className="text-xl font-semibold text-neutral-800 mb-3">
                  {service.title}
                </h3>
                <p id={service.descId} className="text-neutral-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
