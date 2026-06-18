import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Search, Factory, ClipboardCheck, Truck, Package, ArrowRight } from 'lucide-react'
import SectionHeader from '../shared/SectionHeader'

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and shortlist verified Chinese manufacturers that match your product specs, MOQ, and budget requirements.',
    imgId: 'service-img-sourcing-a1b2c3',
    titleId: 'service-title-sourcing',
    descId: 'service-desc-sourcing',
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification',
    description: 'On-site factory audits to verify business licenses, production capacity, certifications, and working conditions.',
    imgId: 'service-img-factory-d4e5f6',
    titleId: 'service-title-factory',
    descId: 'service-desc-factory',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-shipment and in-line inspections to ensure your products meet specifications before they leave China.',
    imgId: 'service-img-qc-g7h8i9',
    titleId: 'service-title-qc',
    descId: 'service-desc-qc',
  },
  {
    id: 'production-followup',
    icon: Package,
    title: 'Production Follow-up',
    description: 'Regular factory visits and progress reports to keep your production on schedule and within spec.',
    imgId: 'service-img-production-j1k2l3',
    titleId: 'service-title-production',
    descId: 'service-desc-production',
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'We handle freight booking, customs documentation, and door-to-door logistics for sea, air, and express shipments.',
    imgId: 'service-img-shipping-m4n5o6',
    titleId: 'service-title-shipping',
    descId: 'service-desc-shipping',
  },
]

export default function ServicesSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="What We Do"
          title="End-to-End China Sourcing Services"
          subtitle="From finding the right supplier to delivering goods to your door, we manage every step of the sourcing process."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="relative h-48 overflow-hidden bg-[#EBF2FA]">
                  <img
                    alt={service.title}
                    data-strk-img-id={service.imgId}
                    data-strk-img={`[${service.descId}] [${service.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="w-10 h-10 bg-[#EBF2FA] rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#1A3C6E]" />
                  </div>
                  <h3 id={service.titleId} className="text-lg font-semibold text-[#1A1A2E] mb-2">{service.title}</h3>
                  <p id={service.descId} className="text-[#4A5568] text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            )
          })}

          {/* CTA Card */}
          <div className="bg-[#1A3C6E] rounded-xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Need a Custom Sourcing Solution?</h3>
              <p className="text-[#CBD5E0] text-sm leading-relaxed mb-6">
                Tell us what you need and we'll put together a tailored sourcing plan for your business.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#C0392B] hover:bg-[#A93226] text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors duration-200"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-[#1A3C6E] font-semibold hover:text-[#C0392B] transition-colors"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
