import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Search, ShieldCheck, ClipboardCheck, Factory, Ship, FileText, Users, Handshake } from 'lucide-react'
import CTAButton from '@/components/shared/CTAButton'
import SectionHeading from '@/components/shared/SectionHeading'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We search our network and major sourcing platforms to identify suppliers that match your product specifications, target price, and quality standards.',
    details: ['Market research & supplier identification', 'Price comparison across 3-5 suppliers', 'Initial capability assessment', 'Sample arrangement & evaluation'],
    id: 'svc-sourcing',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'Our team visits factories in person to verify their legitimacy, production capacity, quality management systems, and export experience.',
    details: ['On-site factory audit', 'Business license verification', 'Production capacity assessment', 'Quality system review (ISO, BSCI, etc.)'],
    id: 'svc-verification',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Professional inspectors check your goods at every stage — from raw materials to final packaging — using AQL standards.',
    details: ['Pre-production inspection (PPI)', 'During production inspection (DPI)', 'Pre-shipment inspection (PSI)', 'Container loading supervision'],
    id: 'svc-inspection',
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    desc: 'We stay in constant contact with your supplier to monitor production progress, resolve issues early, and keep your timeline on track.',
    details: ['Weekly production updates', 'Sample approval management', 'Timeline tracking & alerts', 'Issue resolution & escalation'],
    id: 'svc-production',
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics',
    desc: 'From factory gate to your warehouse, we coordinate freight, documentation, and customs clearance for smooth delivery.',
    details: ['Freight forwarder selection', 'Export documentation preparation', 'Customs clearance support', 'Shipment tracking & updates'],
    id: 'svc-shipping',
  },
  {
    icon: FileText,
    title: 'Contract & Negotiation',
    desc: 'We help you negotiate better terms, draft clear purchase agreements, and protect your interests throughout the transaction.',
    details: ['Price negotiation', 'Payment term structuring', 'Purchase agreement drafting', 'IP protection guidance'],
    id: 'svc-contract',
  },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-accent-500/20 text-accent-400 mb-4">
              Our Services
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Complete China Sourcing Services
            </h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              We provide end-to-end support for every stage of your China sourcing journey — from finding the right supplier to delivering goods at your door.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, idx) => (
              <div key={service.id} className={`flex flex-col lg:flex-row gap-8 items-start ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full lg:w-1/2">
                  <div className="rounded-xl overflow-hidden h-64 md:h-80 bg-slate-100">
                    <img
                      data-strk-img-id={`${service.id}-img-4e8a`}
                      data-strk-img={`[${service.id}-title] [${service.id}-desc] china factory`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="w-12 h-12 bg-accent-500/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-accent-500" />
                  </div>
                  <h2 id={`${service.id}-title`} className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h2>
                  <p id={`${service.id}-desc`} className="text-slate-600 leading-relaxed mb-4">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-sm text-slate-700">
                        <div className="w-1.5 h-1.5 bg-accent-500 rounded-full shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Need Help Sourcing from China?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Tell us about your project and we'll recommend the right service package for your needs.
          </p>
          <div className="mt-8">
            <CTAButton>Get a Free Sourcing Quote</CTAButton>
          </div>
        </div>
      </section>
    </div>
  )
}
