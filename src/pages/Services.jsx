import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Search, ShieldCheck, ClipboardCheck, Factory, Ship, Package, FileText, Users } from 'lucide-react'
import { SectionHeading, CTAButton } from '@/components/shared/SectionHeading'

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We search our network and online platforms to identify manufacturers that match your product specifications, quality standards, and budget. You receive a shortlist of vetted options with pricing comparisons.',
    features: ['Product matching', 'Price comparison', 'MOQ negotiation', 'Sample arrangement'],
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
    imgId: 'svc-sourcing-img-k2m4n6',
  },
  {
    id: 'factory-verification',
    icon: ShieldCheck,
    title: 'Factory Verification & Audit',
    desc: 'Our team visits factories in person to verify business licenses, production capacity, quality management systems, certifications, and working conditions. You get a detailed audit report with photos.',
    features: ['On-site visits', 'License verification', 'Capacity assessment', 'Certification check'],
    titleId: 'svc-audit-title',
    descId: 'svc-audit-desc',
    imgId: 'svc-audit-img-p7q8r9',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    desc: 'We conduct inspections at every stage — pre-production, during production, and pre-shipment. Each inspection includes a detailed report with photos, measurements, and pass/fail criteria.',
    features: ['Pre-production inspection', 'In-line inspection', 'Pre-shipment inspection', 'Defect classification'],
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    imgId: 'svc-qc-img-s1t2u3',
  },
  {
    id: 'production-followup',
    icon: Factory,
    title: 'Production Follow-up',
    desc: 'We monitor your order throughout the production cycle with regular factory visits and progress reports. This ensures timelines are met and any issues are caught early.',
    features: ['Weekly progress updates', 'Timeline tracking', 'Issue escalation', 'Photo documentation'],
    titleId: 'svc-production-title',
    descId: 'svc-production-desc',
    imgId: 'svc-production-img-v4w5x6',
  },
  {
    id: 'shipping-logistics',
    icon: Ship,
    title: 'Shipping & Logistics',
    desc: 'We handle the entire export process — freight booking, customs documentation, container loading supervision, and delivery coordination to your warehouse or port.',
    features: ['Freight forwarding', 'Customs clearance', 'Container loading', 'Door-to-door delivery'],
    titleId: 'svc-shipping-title',
    descId: 'svc-shipping-desc',
    imgId: 'svc-shipping-img-y7z8a9',
  },
  {
    id: 'product-development',
    icon: Package,
    title: 'Product Development',
    desc: 'From initial concept to production-ready samples, we manage the development process including design refinement, material selection, prototyping, and packaging design.',
    features: ['Design support', 'Material sourcing', 'Prototype management', 'Packaging design'],
    titleId: 'svc-dev-title',
    descId: 'svc-dev-desc',
    imgId: 'svc-dev-img-b1c2d3',
  },
  {
    id: 'contract-negotiation',
    icon: FileText,
    title: 'Contract & Negotiation',
    desc: 'We negotiate pricing, payment terms, and contract conditions on your behalf. Our local knowledge ensures you get fair terms while protecting your interests.',
    features: ['Price negotiation', 'Payment terms', 'Contract review', 'IP protection'],
    titleId: 'svc-contract-title',
    descId: 'svc-contract-desc',
    imgId: 'svc-contract-img-e4f5g6',
  },
  {
    id: 'supplier-management',
    icon: Users,
    title: 'Ongoing Supplier Management',
    desc: 'For repeat orders, we maintain supplier relationships, monitor performance, and handle reorders. This ensures consistent quality and reliable delivery over time.',
    features: ['Performance tracking', 'Relationship management', 'Reorder coordination', 'Issue resolution'],
    titleId: 'svc-mgmt-title',
    descId: 'svc-mgmt-desc',
    imgId: 'svc-mgmt-img-h7i8j9',
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
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Sourcing Services</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Comprehensive support at every stage of your China sourcing journey — from finding suppliers to delivering products at your door.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, idx) => (
              <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="aspect-video rounded-xl overflow-hidden bg-neutral-100">
                    <img
                      data-strk-img-id={service.imgId}
                      data-strk-img={`[${service.descId}] [${service.titleId}]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <service.icon className="w-10 h-10 text-primary mb-4" />
                  <h2 id={service.titleId} className="text-2xl font-bold text-neutral-900 mb-3">{service.title}</h2>
                  <p id={service.descId} className="text-neutral-600 leading-relaxed mb-5">{service.desc}</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-neutral-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                        {f}
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
      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Need Help Sourcing from China?</h2>
          <p className="text-neutral-600 mb-8 max-w-xl mx-auto">
            Tell us about your project and we will recommend the right services for your needs.
          </p>
          <CTAButton />
        </div>
      </section>
    </div>
  )
}

export default Services
