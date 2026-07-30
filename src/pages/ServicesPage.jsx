import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory, CheckCircle2,
  ArrowRight, FileText, Package
} from 'lucide-react'

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We leverage our network and on-the-ground presence to identify manufacturers that match your exact product specifications, quality standards, and budget.',
    features: ['Database of 10,000+ verified suppliers', 'Detailed supplier comparison reports', 'Price negotiation support', 'MOQ optimization strategies'],
  },
  {
    id: 'factory-verification',
    icon: ShieldCheck,
    title: 'Factory Verification & Audit',
    desc: 'Before you commit to any supplier, we conduct thorough on-site audits to verify their legitimacy, capacity, and quality management systems.',
    features: ['Business license verification', 'Production capacity assessment', 'Quality system evaluation (ISO, BSCI)', 'Worker condition review'],
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    desc: 'Our trained QC inspectors conduct inspections at critical production stages following international AQL standards to protect your investment.',
    features: ['Pre-production inspection (PPI)', 'During production inspection (DPI)', 'Pre-shipment inspection (PSI)', 'Container loading supervision (CLS)'],
  },
  {
    id: 'production-followup',
    icon: Factory,
    title: 'Production Follow-up',
    desc: 'We maintain regular contact with your factory throughout production, providing weekly updates and catching potential delays before they become problems.',
    features: ['Weekly progress reports with photos', 'Timeline tracking & milestone alerts', 'Issue escalation & resolution', 'Sample approval management'],
  },
  {
    id: 'shipping-logistics',
    icon: Truck,
    title: 'Shipping & Logistics',
    desc: 'From factory gate to your warehouse door, we coordinate the entire logistics chain including documentation, customs, and freight forwarding.',
    features: ['Sea, air, and rail freight options', 'Customs documentation preparation', 'Shipment consolidation', 'Door-to-door delivery coordination'],
  },
  {
    id: 'sample-management',
    icon: Package,
    title: 'Sample Development',
    desc: 'We manage the entire sample process from initial request through revisions to final approval, ensuring your product meets specifications before mass production.',
    features: ['Sample sourcing from multiple factories', 'Quality evaluation & comparison', 'Revision management', 'Approval documentation'],
  },
  {
    id: 'product-development',
    icon: FileText,
    title: 'Product Development Support',
    desc: 'Need help turning your idea into a manufacturable product? We connect you with engineering resources and manage the development process.',
    features: ['Technical drawing review', 'Material selection guidance', 'Prototype coordination', 'Design for manufacturing optimization'],
  },
  {
    id: 'compliance',
    icon: CheckCircle2,
    title: 'Compliance & Certification',
    desc: 'We help ensure your products meet destination country regulations and obtain necessary certifications before shipment.',
    features: ['CE, FCC, FDA compliance guidance', 'Lab testing coordination', 'Certificate verification', 'Labeling & packaging compliance'],
  },
]

export default function ServicesPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-[#0f2a4a] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#e86a2e] font-semibold text-sm uppercase tracking-wider mb-3">Our Services</p>
            <h1 id="services-hero-title" className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Complete China Sourcing Solutions
            </h1>
            <p id="services-hero-subtitle" className="mt-5 text-lg text-neutral-200 leading-relaxed">
              From supplier identification to doorstep delivery, we provide every service you need to source products from China safely and efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, idx) => (
              <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <img
                    data-strk-img-id={`service-img-${service.id}-8e2f`}
                    data-strk-img={`[service-${service.id}-desc] [service-${service.id}-title] [services-hero-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={service.title}
                    className="rounded-xl w-full shadow-sm"
                  />
                </div>
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <service.icon className="w-10 h-10 text-[#e86a2e] mb-4" />
                  <h2 id={`service-${service.id}-title`} className="text-2xl font-bold text-[#0f2a4a] mb-3">{service.title}</h2>
                  <p id={`service-${service.id}-desc`} className="text-neutral-700 leading-relaxed mb-4">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-neutral-700">
                        <CheckCircle2 className="w-4 h-4 text-[#e86a2e] mt-0.5 shrink-0" />
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

      {/* CTA */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2a4a] tracking-tight">
            Need a Custom Sourcing Solution?
          </h2>
          <p className="mt-4 text-neutral-700 leading-relaxed">
            Every project is different. Tell us your requirements and we'll create a tailored service package for your needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center mt-8 bg-[#e86a2e] hover:bg-[#d05a20] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
