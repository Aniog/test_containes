import { useEffect, useRef } from 'react'
import {
  Search,
  Building2,
  ClipboardCheck,
  Factory,
  Ship,
  FileText,
  Boxes,
  Gavel,
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import SectionHeader from '@/components/shared/SectionHeader'
import CtaBanner from '@/components/shared/CtaBanner'

const services = [
  {
    id: 'supplier-discovery',
    titleId: 'services-title-supplier-discovery',
    descId: 'services-desc-supplier-discovery',
    title: 'Supplier Discovery',
    description:
      'We identify manufacturers that match your product, price, and capacity requirements. Our team searches trade shows, supplier databases, and factory networks across China to build a reliable shortlist.',
    icon: Search,
    imgId: 'services-img-supplier-discovery-4d8a',
  },
  {
    id: 'factory-verification',
    titleId: 'services-title-factory-verification',
    descId: 'services-desc-factory-verification',
    title: 'Factory Verification',
    description:
      'On-site or remote audits of facilities, business licenses, production lines, equipment, and quality systems. We give you a clear pass / watch / avoid recommendation.',
    icon: Building2,
    imgId: 'services-img-factory-verification-9c2e',
  },
  {
    id: 'quality-inspection',
    titleId: 'services-title-quality-inspection',
    descId: 'services-desc-quality-inspection',
    title: 'Quality Inspection',
    description:
      'Pre-shipment, during-production, and container-loading inspections with detailed reports, photos, and corrective-action tracking.',
    icon: ClipboardCheck,
    imgId: 'services-img-quality-inspection-1f7b',
  },
  {
    id: 'production-monitoring',
    titleId: 'services-title-production-monitoring',
    descId: 'services-desc-production-monitoring',
    title: 'Production Monitoring',
    description:
      'Weekly reporting, milestone tracking, and issue escalation to keep your order on schedule. We catch delays before they become problems.',
    icon: Factory,
    imgId: 'services-img-production-monitoring-6a3c',
  },
  {
    id: 'shipping-coordination',
    titleId: 'services-title-shipping-coordination',
    descId: 'services-desc-shipping-coordination',
    title: 'Shipping Coordination',
    description:
      'Freight quotes, consolidation, customs documentation, and handover to your freight forwarder or courier. Air, sea, and rail options.',
    icon: Ship,
    imgId: 'services-img-shipping-coordination-2e5d',
  },
  {
    id: 'contract-support',
    titleId: 'services-title-contract-support',
    descId: 'services-desc-contract-support',
    title: 'Contract & Quotation Support',
    description:
      'Clear bilingual quotations, purchase agreements, payment-term advice, and basic dispute support to protect your interests.',
    icon: FileText,
    imgId: 'services-img-contract-support-8b1e',
  },
  {
    id: 'sample-consolidation',
    titleId: 'services-title-sample-consolidation',
    descId: 'services-desc-sample-consolidation',
    title: 'Sample Consolidation',
    description:
      'Collect samples from multiple suppliers, inspect them, and ship them together to save time and courier costs.',
    icon: Boxes,
    imgId: 'services-img-sample-consolidation-3f6a',
  },
  {
    id: 'compliance',
    titleId: 'services-title-compliance',
    descId: 'services-desc-compliance',
    title: 'Compliance & Certification',
    description:
      'Help coordinate required testing and certificates such as CE, FCC, RoHS, and REACH through trusted third-party labs.',
    icon: Gavel,
    imgId: 'services-img-compliance-7c2d',
  },
]

export default function Services() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <div ref={ref}>
      <section className="bg-slate-900 py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold tracking-wide uppercase text-brand-300 mb-3">
            What We Offer
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Sourcing services built for global buyers
          </h1>
          <p className="mt-5 text-lg text-slate-300 leading-relaxed">
            A full range of practical support to help you buy from China with
            less risk, better quality, and more predictable delivery.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Services"
            title="Everything you need to source from China"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <article
                  key={service.id}
                  className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:shadow-sm transition"
                >
                  <div className="shrink-0 w-full md:w-48 h-40 md:h-auto rounded-xl overflow-hidden bg-slate-200">
                    <img
                      alt={service.title}
                      className="w-full h-full object-cover"
                      data-strk-img-id={service.imgId}
                      data-strk-img={`[${service.descId}] [${service.titleId}] [page-services-title]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="w-10 h-10 rounded-lg bg-brand-800 text-white flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h2
                      id={service.titleId}
                      className="text-xl font-semibold text-slate-900"
                    >
                      {service.title}
                    </h2>
                    <p
                      id={service.descId}
                      className="mt-2 text-slate-600 leading-relaxed"
                    >
                      {service.description}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  )
}
