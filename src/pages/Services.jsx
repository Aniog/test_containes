import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import {
  Search,
  Building2,
  ClipboardCheck,
  Factory,
  PackageCheck,
  Ship,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    short: 'Find the right factory for your product.',
    description:
      'We research and shortlist qualified Chinese manufacturers based on your product specifications, target price, minimum order quantities, and quality requirements. Our database includes thousands of verified factories across Guangdong, Zhejiang, Jiangsu, and Fujian provinces.',
    features: [
      'Multi-channel supplier research (trade shows, B2B platforms, industry networks)',
      'Initial capability and capacity assessment',
      'Shortlist of 3–5 pre-qualified factories',
      'Competitive quotation comparison',
    ],
    imgId: 'page-service-sourcing-1a2b3c',
  },
  {
    icon: Building2,
    title: 'Factory Verification',
    short: 'Confirm the factory is real and capable.',
    description:
      'Before you commit, we conduct thorough on-site factory audits to verify business licenses, production lines, equipment, workforce, and export experience. This eliminates the risk of dealing with trading companies posing as factories.',
    features: [
      'Business license and registration verification',
      'Production line and equipment inspection',
      'Quality management system assessment',
      'Social compliance and workplace safety checks',
    ],
    imgId: 'page-service-verify-2b3c4d',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    short: 'Catch defects before shipment.',
    description:
      'Our quality inspectors visit factories at critical stages to ensure your products meet agreed specifications. We provide detailed photo and video reports with clear pass/fail recommendations.',
    features: [
      'Pre-production sample approval',
      'During-production (DUPRO) inspections',
      'Pre-shipment inspections (PSI) per AQL standards',
      'Container loading supervision',
    ],
    imgId: 'page-service-qc-3c4d5e',
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    short: 'Keep your order on track.',
    description:
      'Production delays and miscommunication are common when sourcing from China. We assign a dedicated project manager who visits the factory regularly, reports progress, and resolves issues before they impact your timeline.',
    features: [
      'Weekly progress reports with photos',
      'Milestone tracking against production schedule',
      'Early warning for delays or capacity issues',
      'Direct communication with factory management',
    ],
    imgId: 'page-service-followup-4d5e6f',
  },
  {
    icon: PackageCheck,
    title: 'Sample Coordination',
    short: 'Validate quality before mass production.',
    description:
      'Samples are your first real checkpoint. We manage the entire sampling process — from requesting prototypes to evaluating and consolidating feedback — so you can approve with confidence.',
    features: [
      'Sample request coordination with multiple factories',
      'Spec checklist review before sampling',
      'Sample photo/video evaluation reports',
      'Revised sample tracking and comparison',
    ],
    imgId: 'page-service-sample-5e6f7g',
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics',
    short: 'From factory floor to your warehouse.',
    description:
      'We handle the complex logistics of moving goods from China to your destination. This includes freight forwarding coordination, export documentation, customs support, and delivery tracking.',
    features: [
      'Sea freight, air cargo, and express coordination',
      'Export documentation (invoice, packing list, CO, etc.)',
      'Customs clearance guidance',
      'Delivery tracking and warehouse coordination',
    ],
    imgId: 'page-service-shipping-6f7g8h',
  },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2 block">
            Services
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Full-Service China Sourcing
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            From the first supplier search to final delivery, we manage every step so you can focus on growing your business.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="aspect-[16/10] rounded-lg overflow-hidden border border-border-light">
                    <img
                      data-strk-img-id={service.imgId}
                      data-strk-img={`[service-page-${service.title.toLowerCase().replace(/\s+/g, '-')}-desc] [service-page-${service.title.toLowerCase().replace(/\s+/g, '-')}-title]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-blue-700" />
                    </div>
                    <h2
                      id={`service-page-${service.title.toLowerCase().replace(/\s+/g, '-')}-title`}
                      className="text-2xl font-bold text-slate-900"
                    >
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-base font-medium text-slate-700 mb-3">{service.short}</p>
                  <p className="text-sm text-slate-500 leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-blue-700 font-medium hover:text-blue-800"
                  >
                    Request this service <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Not Sure Which Services You Need?
          </h2>
          <p className="text-blue-100 mb-8">
            Tell us about your project and we will recommend the right combination of services for your situation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-blue-700 font-semibold rounded-md hover:bg-blue-50 transition-colors"
          >
            Get a Free Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
