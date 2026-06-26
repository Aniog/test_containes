import { useEffect, useRef } from 'react'
import {
  Search,
  Building2,
  ClipboardCheck,
  Factory,
  Ship,
  FileText,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import SectionHeader from '@/components/shared/SectionHeader'

const services = [
  {
    id: 'supplier-discovery',
    titleId: 'service-title-supplier-discovery',
    descId: 'service-desc-supplier-discovery',
    title: 'Supplier Discovery',
    description:
      'We identify manufacturers that match your product, price, and capacity requirements.',
    icon: Search,
    imgId: 'service-img-supplier-discovery-4d8a',
  },
  {
    id: 'factory-verification',
    titleId: 'service-title-factory-verification',
    descId: 'service-desc-factory-verification',
    title: 'Factory Verification',
    description:
      'On-site audits of facilities, licenses, equipment, and production capability.',
    icon: Building2,
    imgId: 'service-img-factory-verification-9c2e',
  },
  {
    id: 'quality-inspection',
    titleId: 'service-title-quality-inspection',
    descId: 'service-desc-quality-inspection',
    title: 'Quality Inspection',
    description:
      'Pre-shipment, during-production, and container-loading inspections.',
    icon: ClipboardCheck,
    imgId: 'service-img-quality-inspection-1f7b',
  },
  {
    id: 'production-monitoring',
    titleId: 'service-title-production-monitoring',
    descId: 'service-desc-production-monitoring',
    title: 'Production Monitoring',
    description:
      'Weekly reporting, milestone tracking, and issue resolution to keep orders on schedule.',
    icon: Factory,
    imgId: 'service-img-production-monitoring-6a3c',
  },
  {
    id: 'shipping-coordination',
    titleId: 'service-title-shipping-coordination',
    descId: 'service-desc-shipping-coordination',
    title: 'Shipping Coordination',
    description:
      'Freight quotes, customs docs, and consolidation to simplify your supply chain.',
    icon: Ship,
    imgId: 'service-img-shipping-coordination-2e5d',
  },
  {
    id: 'contract-support',
    titleId: 'service-title-contract-support',
    descId: 'service-desc-contract-support',
    title: 'Contract Support',
    description:
      'Clear quotations, purchase terms, and bilingual agreements to protect your interests.',
    icon: FileText,
    imgId: 'service-img-contract-support-8b1e',
  },
]

export default function HomeServices() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Services"
          title="End-to-end sourcing support from China"
          description="From the first supplier search to final delivery, we manage the details so you can focus on growing your business."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.id}
                className="group bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition"
              >
                <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    alt={service.title}
                    className="w-full h-full object-cover"
                    data-strk-img-id={service.imgId}
                    data-strk-img={`[${service.descId}] [${service.titleId}] [section-services-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-brand-50 text-brand-800 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3
                        id={service.titleId}
                        className="text-lg font-semibold text-slate-900"
                      >
                        {service.title}
                      </h3>
                      <p
                        id={service.descId}
                        className="mt-1 text-sm text-slate-600 leading-relaxed"
                      >
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-brand-800 text-brand-800 font-semibold hover:bg-brand-50 transition"
          >
            View all services
          </Link>
        </div>
      </div>
    </section>
  )
}
