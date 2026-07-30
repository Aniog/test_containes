import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Search, Factory, ClipboardCheck, Clock, Truck, Award, CheckCircle, ArrowRight } from 'lucide-react'
import CTAButton from '@/components/CTAButton'

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
    imgId: 'svc-img-sourcing-a1b2c3',
    desc: 'We identify and shortlist verified Chinese manufacturers that match your product specifications, MOQ, and budget.',
    details: [
      'Product specification analysis',
      'Supplier database search across Alibaba, Made-in-China, and our private network',
      'Initial supplier screening and shortlisting',
      'Quotation collection and comparison',
      'Sample coordination',
    ],
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification',
    titleId: 'svc-factory-title',
    descId: 'svc-factory-desc',
    imgId: 'svc-img-factory-d4e5f6',
    desc: 'On-site factory audits to verify production capacity, certifications, workforce, and compliance before you place an order.',
    details: [
      'On-site factory visit and audit',
      'Production capacity and equipment assessment',
      'Quality management system review',
      'Certification and compliance verification',
      'Detailed written audit report with photos',
    ],
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    imgId: 'svc-img-qc-g7h8i9',
    desc: 'Pre-shipment, during-production, and container loading inspections with detailed photo and video reports.',
    details: [
      'Pre-production inspection',
      'During-production inspection (DUPRO)',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
      'Defect classification and pass/fail reporting',
    ],
  },
  {
    id: 'production-followup',
    icon: Clock,
    title: 'Production Follow-up',
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
    imgId: 'svc-img-prod-j1k2l3',
    desc: 'Regular updates on your order status, timeline adherence, and early alerts on any production issues.',
    details: [
      'Weekly production status updates',
      'Timeline monitoring and delay alerts',
      'Communication with factory on your behalf',
      'Issue escalation and resolution support',
      'Photo and video updates from the factory floor',
    ],
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping Coordination',
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
    imgId: 'svc-img-ship-m4n5o6',
    desc: 'We coordinate with freight forwarders, handle export documentation, and track your shipment to destination.',
    details: [
      'Freight forwarder coordination (sea and air)',
      'Export documentation preparation',
      'Customs clearance support',
      'Shipment tracking and updates',
      'Consolidation for multiple suppliers',
    ],
  },
  {
    id: 'private-label',
    icon: Award,
    title: 'Private Label / OEM',
    titleId: 'svc-oem-title',
    descId: 'svc-oem-desc',
    imgId: 'svc-img-oem-p7q8r9',
    desc: 'Support for custom branding, packaging design, and OEM production with Chinese manufacturers.',
    details: [
      'OEM factory identification and vetting',
      'Custom packaging and label design coordination',
      'Brand compliance and IP protection guidance',
      'Sample approval process management',
      'First production run oversight',
    ],
  },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-blue-950 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-blue-300 font-semibold text-sm uppercase tracking-wider mb-3">Our Services</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">End-to-End China Sourcing Services</h1>
            <p className="text-neutral-300 text-lg leading-relaxed mb-8">
              We cover every stage of the sourcing process — from finding the right supplier to delivering goods to your warehouse. Each service can be used independently or as part of a full-service package.
            </p>
            <CTAButton size="lg" showArrow>Get a Free Sourcing Quote</CTAButton>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((svc, i) => {
            const Icon = svc.icon
            const isEven = i % 2 === 0
            return (
              <div key={svc.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                <div className={isEven ? '' : 'lg:order-2'}>
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-blue-700" />
                  </div>
                  <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">{svc.title}</h2>
                  <p id={svc.descId} className="text-neutral-600 text-lg leading-relaxed mb-6">{svc.desc}</p>
                  <ul className="space-y-2 mb-8">
                    {svc.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-neutral-700 text-sm">
                        <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <CTAButton variant="secondary" showArrow>Request This Service</CTAButton>
                </div>
                <div className={isEven ? '' : 'lg:order-1'}>
                  <img
                    alt={svc.title}
                    data-strk-img-id={svc.imgId}
                    data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full rounded-2xl shadow-md object-cover aspect-[4/3]"
                  />
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-blue-200 text-lg mb-8">
            Tell us about your product and sourcing goals. We will recommend the right combination of services for your situation.
          </p>
          <CTAButton size="lg" showArrow>Get a Free Consultation</CTAButton>
        </div>
      </section>
    </div>
  )
}
