import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Search, Factory, ClipboardCheck, TrendingUp, Truck, Shield, FileText, Users } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import SectionCTA from '@/components/shared/SectionCTA'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We research, contact, and shortlist qualified suppliers based on your product specifications, target price, MOQ, and quality requirements. You receive a curated list with quotes, samples, and factory profiles.',
    features: ['Market research & supplier identification', 'Price comparison across multiple factories', 'Sample coordination and evaluation', 'Supplier background checks'],
    id: 'supplier-sourcing',
    imgId: 'svc-sourcing-img-b3c7d1',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'Our team visits factories in person to verify their legitimacy, production capacity, quality management systems, and working conditions. You receive a detailed audit report with photos and recommendations.',
    features: ['On-site factory visits', 'Business license verification', 'Production capacity assessment', 'Quality system evaluation'],
    id: 'factory-verification',
    imgId: 'svc-factory-img-e5f2a8',
    titleId: 'svc-factory-title',
    descId: 'svc-factory-desc',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'We conduct inspections at every stage of production — from raw materials to finished goods. Our inspectors follow AQL standards and provide detailed reports with photos of any defects found.',
    features: ['Pre-production inspection (PPI)', 'During-production inspection (DPI)', 'Pre-shipment inspection (PSI)', 'Container loading supervision'],
    id: 'quality-inspection',
    imgId: 'svc-qc-img-a9d4c6',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
  },
  {
    icon: TrendingUp,
    title: 'Production Follow-up',
    desc: 'We monitor your order from confirmation to completion. Our team tracks production milestones, flags potential delays, and provides regular status updates so you always know where your order stands.',
    features: ['Production timeline tracking', 'Regular progress reports with photos', 'Early delay detection & resolution', 'Direct factory communication'],
    id: 'production-followup',
    imgId: 'svc-production-img-f7b3e2',
    titleId: 'svc-production-title',
    descId: 'svc-production-desc',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We handle the logistics from factory to your warehouse. This includes freight booking, customs documentation, insurance, and delivery tracking for both sea and air shipments.',
    features: ['Freight forwarder selection', 'Customs documentation preparation', 'Shipment tracking & updates', 'Insurance coordination'],
    id: 'shipping-coordination',
    imgId: 'svc-shipping-img-c2e8d4',
    titleId: 'svc-shipping-title',
    descId: 'svc-shipping-desc',
  },
  {
    icon: Shield,
    title: 'Contract & Payment Safety',
    desc: 'We help structure supplier contracts with clear terms, quality standards, and penalty clauses. We also advise on secure payment methods and manage milestone-based payments.',
    features: ['Contract drafting & review', 'Payment milestone management', 'Dispute resolution support', 'Trade assurance guidance'],
    id: 'contract-safety',
    imgId: 'svc-contract-img-d6a1f9',
    titleId: 'svc-contract-title',
    descId: 'svc-contract-desc',
  },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <PageHero
        title="Our Sourcing Services"
        subtitle="Comprehensive support at every stage of your China sourcing journey — from finding suppliers to delivering goods at your door."
      />

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, idx) => (
              <div key={service.id} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}>
                <div className="w-full lg:w-1/2">
                  <img
                    alt={service.title}
                    data-strk-img-id={service.imgId}
                    data-strk-img={`[${service.descId}] [${service.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                    className="w-full rounded-xl object-cover"
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <service.icon className="w-10 h-10 text-brand-orange mb-4" />
                  <h2 id={service.titleId} className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">{service.title}</h2>
                  <p id={service.descId} className="text-brand-gray leading-relaxed mb-6">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-brand-dark">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA
        title="Need Help Sourcing from China?"
        subtitle="Tell us about your project and we will recommend the right services for your needs."
      />
    </div>
  )
}
