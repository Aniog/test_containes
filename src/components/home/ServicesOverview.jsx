import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Search, ShieldCheck, ClipboardCheck, Eye, Ship, FileText } from 'lucide-react'

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and shortlist qualified manufacturers based on your product specs, MOQ, budget, and certification requirements.',
    imgId: 'svc-img-sourcing-4a1b',
  },
  {
    id: 'factory-verification',
    icon: ShieldCheck,
    title: 'Factory Verification',
    description: 'On-site factory audits to verify production capacity, certifications, equipment, and business legitimacy before you commit.',
    imgId: 'svc-img-verify-5b2c',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-shipment, during-production, and container-loading inspections following AQL standards to protect your order.',
    imgId: 'svc-img-qc-6c3d',
  },
  {
    id: 'production-followup',
    icon: Eye,
    title: 'Production Follow-up',
    description: 'Regular factory visits and progress reports so you always know where your order stands — no surprises.',
    imgId: 'svc-img-prod-7d4e',
  },
  {
    id: 'shipping-coordination',
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'We arrange freight forwarding, customs documentation, and logistics from factory door to your warehouse.',
    imgId: 'svc-img-ship-8e5f',
  },
  {
    id: 'negotiation-contracts',
    icon: FileText,
    title: 'Negotiation & Contracts',
    description: 'We negotiate pricing, payment terms, and contracts in Chinese on your behalf to get the best deal.',
    imgId: 'svc-img-nego-9f6g',
  },
]

export default function ServicesOverview() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">Our Services</span>
          <h2 id="services-section-title" className="text-3xl md:text-4xl font-bold text-neutral-800 tracking-tight mb-4">
            End-to-End Sourcing Support
          </h2>
          <p id="services-section-subtitle" className="text-neutral-600 text-lg leading-relaxed">
            From finding the right supplier to delivering goods at your door — we handle every step of the China sourcing process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="bg-white rounded-xl border border-neutral-200 p-6 md:p-8 hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 id={`svc-title-${service.id}`} className="text-lg font-semibold text-neutral-800 mb-3">
                  {service.title}
                </h3>
                <p id={`svc-desc-${service.id}`} className="text-neutral-600 text-sm leading-relaxed">
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
