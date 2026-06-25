import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Search, ShieldCheck, ClipboardCheck, Factory, Ship, Package, FileText, Handshake } from 'lucide-react'
import CTASection from '@/components/shared/CTASection'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We search our network and verified databases to identify manufacturers that match your product specifications, target price, MOQ, and certification requirements. You receive a shortlist of 3–5 vetted options with comparison data.',
    features: ['Product matching', 'Price benchmarking', 'MOQ negotiation', 'Supplier comparison reports'],
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification & Audit',
    desc: 'Our team visits factories in person to verify business licenses, production capacity, quality systems, worker conditions, and export experience. You get a detailed audit report with photos and risk assessment.',
    features: ['On-site factory visits', 'License & certification checks', 'Capacity assessment', 'Social compliance review'],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    desc: 'We conduct inspections at every stage — incoming materials, during production, and before shipment. Each inspection includes a detailed report with photos, measurements, and pass/fail results based on AQL standards.',
    features: ['Pre-production inspection', 'During-production inspection', 'Pre-shipment inspection', 'AQL-based sampling'],
  },
  {
    icon: Factory,
    title: 'Production Monitoring',
    desc: 'We visit the factory regularly during production to track progress, identify delays early, and ensure your specifications are being followed. You receive weekly updates with photos and timeline status.',
    features: ['Weekly progress reports', 'Timeline tracking', 'Spec compliance checks', 'Issue escalation'],
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics',
    desc: 'We coordinate with freight forwarders, handle export documentation, arrange customs clearance, and provide door-to-door tracking. We optimize for cost, speed, or a balance of both based on your needs.',
    features: ['Freight booking (sea/air/rail)', 'Export documentation', 'Customs clearance support', 'Door-to-door tracking'],
  },
  {
    icon: Package,
    title: 'Sample Management',
    desc: 'We collect samples from multiple suppliers, inspect them against your requirements, photograph details, and consolidate shipment to your location. This saves time and shipping costs during the evaluation phase.',
    features: ['Multi-supplier sample collection', 'Quality evaluation', 'Consolidated shipping', 'Detailed photo reports'],
  },
  {
    icon: FileText,
    title: 'Contract & Payment Support',
    desc: 'We help draft purchase agreements, review supplier contracts, and advise on secure payment terms. We ensure your interests are protected with clear terms for quality, delivery, and dispute resolution.',
    features: ['Contract drafting', 'Payment term advice', 'Dispute resolution support', 'Trade assurance guidance'],
  },
  {
    icon: Handshake,
    title: 'Ongoing Supplier Management',
    desc: 'For repeat orders, we maintain supplier relationships, monitor performance over time, negotiate volume discounts, and ensure consistent quality across multiple production runs.',
    features: ['Performance tracking', 'Relationship management', 'Volume discount negotiation', 'Consistency monitoring'],
  },
]

const Services = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-900 py-16 md:py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="services-hero-bg-c3d4e5"
          data-strk-bg="[services-hero-desc]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Our Sourcing Services
          </h1>
          <p id="services-hero-desc" className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Comprehensive China sourcing support from supplier identification to final delivery at your warehouse.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <service.icon className="w-8 h-8 text-blue-800" />
                    <h2 className="text-2xl font-bold text-slate-900">{service.title}</h2>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                  <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-slate-700">
                        <span className="w-1.5 h-1.5 bg-blue-800 rounded-full shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <img
                    alt={service.title}
                    data-strk-img-id={`service-img-${index}-f8a9b0`}
                    data-strk-img={`[service-desc-${index}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="rounded-xl shadow-md w-full"
                  />
                  <span id={`service-desc-${index}`} className="hidden">{service.title} China sourcing factory manufacturing quality control</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}

export default Services
