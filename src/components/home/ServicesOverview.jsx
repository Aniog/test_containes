import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import SectionHeading from '@/components/shared/SectionHeading'
import { Search, ShieldCheck, ClipboardCheck, Eye, Ship, Headphones } from 'lucide-react'

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and shortlist qualified manufacturers based on your product specs, MOQ, budget, and timeline.',
    imgId: 'svc-sourcing-4a8b1c',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
  },
  {
    id: 'factory-verification',
    icon: ShieldCheck,
    title: 'Factory Verification',
    description: 'On-site factory audits to verify production capacity, certifications, equipment, and business legitimacy.',
    imgId: 'svc-verify-7d2e9f',
    titleId: 'svc-verify-title',
    descId: 'svc-verify-desc',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-shipment, during-production, and container loading inspections following AQL standards.',
    imgId: 'svc-qc-3f6a2b',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
  },
  {
    id: 'production-followup',
    icon: Eye,
    title: 'Production Follow-up',
    description: 'Regular factory visits and progress reports to keep your order on schedule and within spec.',
    imgId: 'svc-production-8c1d4e',
    titleId: 'svc-production-title',
    descId: 'svc-production-desc',
  },
  {
    id: 'shipping-coordination',
    icon: Ship,
    title: 'Shipping & Logistics',
    description: 'End-to-end freight coordination including documentation, customs, and delivery tracking.',
    imgId: 'svc-shipping-2e7f5a',
    titleId: 'svc-shipping-title',
    descId: 'svc-shipping-desc',
  },
  {
    id: 'ongoing-support',
    icon: Headphones,
    title: 'Ongoing Support',
    description: 'Dedicated account manager for communication, negotiation, and long-term supplier relationship management.',
    imgId: 'svc-support-6b3c8d',
    titleId: 'svc-support-title',
    descId: 'svc-support-desc',
  },
]

const ServicesOverview = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="End-to-End Sourcing Services"
          subtitle="From finding the right supplier to delivering goods at your door — we handle every step of the China sourcing process."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="bg-white rounded-xl border border-border p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 id={service.titleId} className="text-lg font-semibold text-text-primary mb-2">
                  {service.title}
                </h3>
                <p id={service.descId} className="text-sm text-text-secondary leading-relaxed">
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

export default ServicesOverview
