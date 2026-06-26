import { useEffect, useRef } from 'react'
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  PackageCheck,
  Check,
} from 'lucide-react'
import PageHeader from '@/components/shared/PageHeader'
import CTASection from '@/components/shared/CTASection'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier sourcing',
    desc: 'We identify, shortlist and compare qualified suppliers from our network and from on-the-ground research.',
    deliverables: [
      '3–5 supplier shortlist with detailed profile',
      'Comparison table: price, MOQ, lead time, certifications',
      'Sample request and consolidation',
      'Negotiation support in Mandarin',
    ],
  },
  {
    id: 'factory-verification',
    icon: ShieldCheck,
    title: 'Factory verification',
    desc: 'On-site visits to confirm the supplier is a real factory with real capacity — not a trading company.',
    deliverables: [
      'Business license and tax record check',
      'On-site visit with photos and video',
      'Production lines, machinery and workforce review',
      'Capacity, certification and QC system assessment',
    ],
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality inspection',
    desc: 'AQL-based product inspections at the right stages to prevent defects from reaching your customers.',
    deliverables: [
      'Initial production check (IPC)',
      'During production check (DUPRO)',
      'Pre-shipment inspection (PSI) with AQL sampling',
      'Detailed report: photos, video, measurements',
    ],
  },
  {
    id: 'production-follow-up',
    icon: Factory,
    title: 'Production follow-up',
    desc: 'We track production weekly on the ground and flag risks early — no surprises before shipping.',
    deliverables: [
      'Weekly written status updates',
      'Material and component verification',
      'Risk flagging and corrective action plan',
      'Final approval gate before shipping',
    ],
  },
  {
    id: 'private-label',
    icon: PackageCheck,
    title: 'Private label & OEM',
    desc: 'Custom packaging, branding and OEM coordination, including compliance for your destination market.',
    deliverables: [
      'Packaging and label design coordination',
      'Branding files preparation for factories',
      'Compliance review (CE, FDA, FCC, CPSIA, REACH)',
      'Barcode and Amazon FBA labeling',
    ],
  },
  {
    id: 'shipping',
    icon: Ship,
    title: 'Shipping & logistics',
    desc: 'Door-to-door logistics: consolidation, freight booking, customs documents and last-mile delivery.',
    deliverables: [
      'Sea, air and rail freight booking',
      'Consolidation of multiple suppliers',
      'Customs documents (CI, PL, BL, CO)',
      'Door-to-door delivery, including Amazon FBA',
    ],
  },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <PageHeader
        eyebrow="Services"
        title="End-to-end China sourcing services"
        description="Choose the services you need — supplier sourcing, factory verification, quality inspection, production follow-up, OEM and shipping. One partner from brief to delivery."
      />

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-16">
          {services.map((svc, idx) => {
            const reverse = idx % 2 === 1
            return (
              <div
                key={svc.id}
                id={svc.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
              >
                <div className={reverse ? 'lg:order-2' : ''}>
                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                    <img
                      alt={svc.title}
                      data-strk-img-id={`services-${svc.id}-img`}
                      data-strk-img={`[services-${svc.id}-title] china sourcing ${svc.title}`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                      className="block w-full h-auto"
                    />
                  </div>
                </div>
                <div className={reverse ? 'lg:order-1' : ''}>
                  <span className="flex w-12 h-12 items-center justify-center rounded-md bg-blue-50 text-blue-700 mb-5">
                    <svc.icon className="w-6 h-6" />
                  </span>
                  <h2 id={`services-${svc.id}-title`} className="text-2xl md:text-3xl font-bold text-slate-900">
                    {svc.title}
                  </h2>
                  <p className="mt-3 text-base md:text-lg text-slate-600 leading-relaxed">
                    {svc.desc}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {svc.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-3 text-sm md:text-base text-slate-700">
                        <Check className="w-5 h-5 text-blue-700 mt-0.5 shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <CTASection
        title="Not sure which service you need?"
        description="Send us your sourcing brief. We'll tell you exactly which services are useful for your project — and which you can skip."
      />
    </div>
  )
}
