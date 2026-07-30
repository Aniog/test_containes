import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Factory, Ship, MessageSquare,
  FileText, PackageCheck, ArrowRight
} from 'lucide-react'
import CTABanner from '@/components/CTABanner'

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify, evaluate, and shortlist verified suppliers that match your product specifications, MOQ requirements, and budget constraints.',
    details: [
      'Database of 10,000+ pre-vetted suppliers',
      'Multi-supplier comparison reports',
      'Price benchmarking and negotiation',
      'Sample coordination and evaluation',
    ],
  },
  {
    id: 'factory-verification',
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site factory audits to confirm legitimacy, production capacity, quality systems, certifications, and working conditions.',
    details: [
      'Business license and export license verification',
      'Production capacity assessment',
      'Quality management system review',
      'Social compliance and safety checks',
    ],
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Comprehensive inspection services at every stage of production to ensure your goods meet specifications before shipping.',
    details: [
      'Pre-production inspection (PPI)',
      'During production inspection (DPI)',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision (CLS)',
    ],
  },
  {
    id: 'production-followup',
    icon: Factory,
    title: 'Production Follow-up',
    desc: 'Regular factory visits and real-time progress updates to keep your order on schedule and prevent delays.',
    details: [
      'Weekly production progress reports',
      'Photo and video documentation',
      'Timeline tracking and delay alerts',
      'Direct communication with factory managers',
    ],
  },
  {
    id: 'shipping-coordination',
    icon: Ship,
    title: 'Shipping & Logistics',
    desc: 'End-to-end logistics support from factory to your warehouse, including freight booking, customs documentation, and tracking.',
    details: [
      'Sea, air, and rail freight options',
      'Customs documentation preparation',
      'Consolidation and warehousing',
      'Door-to-door delivery coordination',
    ],
  },
  {
    id: 'negotiation-support',
    icon: MessageSquare,
    title: 'Negotiation & Contracts',
    desc: 'Expert negotiation support to secure the best prices, payment terms, and contract protections for your orders.',
    details: [
      'Price negotiation and benchmarking',
      'Payment term optimization',
      'Contract review and drafting',
      'Dispute resolution support',
    ],
  },
  {
    id: 'product-development',
    icon: PackageCheck,
    title: 'Product Development',
    desc: 'From concept to production-ready, we help you develop and refine products with Chinese manufacturers.',
    details: [
      'Design-to-manufacturing consultation',
      'Prototype development coordination',
      'Material sourcing and testing',
      'Packaging design and compliance',
    ],
  },
  {
    id: 'compliance-docs',
    icon: FileText,
    title: 'Compliance & Documentation',
    desc: 'Ensure your products meet destination country regulations with proper certifications and documentation.',
    details: [
      'CE, FDA, FCC certification guidance',
      'Lab testing coordination',
      'Import documentation preparation',
      'Regulatory compliance consulting',
    ],
  },
]

export default function ServicesPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-orange text-sm font-semibold uppercase tracking-wide">Our Services</span>
            <h1 id="services-page-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mt-2 mb-4">
              Complete China Sourcing Services
            </h1>
            <p id="services-page-subtitle" className="text-slate-300 text-lg leading-relaxed">
              From supplier identification to doorstep delivery, we provide comprehensive sourcing support tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 hover:shadow-md transition">
                <service.icon className="w-10 h-10 text-navy mb-4" />
                <h2 id={`svc-${service.id}-title`} className="text-xl font-bold text-slate-900 mb-3">{service.title}</h2>
                <p id={`svc-${service.id}-desc`} className="text-slate-600 text-sm leading-relaxed mb-4">{service.desc}</p>
                <ul className="space-y-2">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                data-strk-img-id="services-qc-inspection-9d4f2b"
                data-strk-img="[services-visual-desc] [services-visual-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Quality control inspection at Chinese factory"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            <div>
              <h2 id="services-visual-title" className="text-3xl font-bold text-slate-900 tracking-tight mb-4">
                Quality You Can Trust
              </h2>
              <p id="services-visual-desc" className="text-slate-600 leading-relaxed mb-6">
                Our inspection team conducts thorough quality checks at every stage of production. We use AQL sampling standards and provide detailed photo reports so you always know the status of your order.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-orange text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-dark transition text-sm"
              >
                Discuss Your Project <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  )
}
