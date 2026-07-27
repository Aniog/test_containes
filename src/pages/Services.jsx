import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, ClipboardCheck, Eye, BarChart3, Truck, FileText, ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    summary: 'Find the right manufacturer for your product, budget, and volume.',
    details: [
      'Market research across supplier databases and trade show networks',
      'Shortlisting based on product match, capacity, and certifications',
      'Initial price negotiation and MOQ discussion',
      'Transparent comparison reports with pros and cons for each option',
    ],
    imgId: 'svc-page-sourcing-a1b2c3',
    descId: 'svc-page-sourcing-desc',
  },
  {
    icon: ClipboardCheck,
    title: 'Factory Verification',
    summary: 'Know who you are working with before you send a deposit.',
    details: [
      'On-site audit of factory facilities, equipment, and workforce',
      'Review of business licenses, export permits, and certifications',
      'Production capacity assessment and lead-time verification',
      'Reference checks with past international clients',
    ],
    imgId: 'svc-page-factory-d4e5f6',
    descId: 'svc-page-factory-desc',
  },
  {
    icon: Eye,
    title: 'Quality Inspection',
    summary: 'Catch defects before they become costly returns.',
    details: [
      'Pre-production sample evaluation and approval tracking',
      'In-process inspections at critical manufacturing stages',
      'Pre-shipment random sampling based on AQL standards',
      'Detailed photo reports with pass, conditional pass, or fail recommendations',
    ],
    imgId: 'svc-page-qc-g7h8i9',
    descId: 'svc-page-qc-desc',
  },
  {
    icon: BarChart3,
    title: 'Production Follow-up',
    summary: 'Stay informed and in control throughout manufacturing.',
    details: [
      'Weekly production status reports with photos and milestone tracking',
      'Material arrival and production line start confirmation',
      'Mid-production quality spot checks',
      'Proactive issue escalation and resolution with the factory',
    ],
    imgId: 'svc-page-follow-j0k1l2',
    descId: 'svc-page-follow-desc',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    summary: 'From factory floor to your warehouse door.',
    details: [
      'Freight forwarding via sea, air, rail, or courier based on your needs',
      'Export documentation including invoices, packing lists, and certificates',
      'Customs compliance review and HS code classification support',
      'Shipment tracking and delivery confirmation',
    ],
    imgId: 'svc-page-shipping-m3n4o5',
    descId: 'svc-page-shipping-desc',
  },
  {
    icon: FileText,
    title: 'Documentation Support',
    summary: 'Paperwork handled accurately and on time.',
    details: [
      'Purchase order drafting and contract review',
      'Invoice and payment milestone management',
      'Certificate of origin, test reports, and compliance documents',
      'Bilingual communication records for audit trails',
    ],
    imgId: 'svc-page-docs-p6q7r8',
    descId: 'svc-page-docs-desc',
  },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 id="svc-title" className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Our Sourcing Services
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              We offer a complete suite of sourcing and supply chain services designed to reduce risk, save time, and lower costs for businesses buying from China.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
          {services.map((service, index) => {
            const isReversed = index % 2 !== 0
            return (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={isReversed ? 'lg:order-2' : ''}>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                    <service.icon className="w-6 h-6 text-brand" />
                  </div>
                  <h2 id={`${service.descId}-title`} className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                    {service.title}
                  </h2>
                  <p id={service.descId} className="text-lg text-slate-600 mb-6">{service.summary}</p>
                  <ul className="space-y-3">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2 shrink-0" />
                        <span className="text-sm leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`${isReversed ? 'lg:order-1' : ''}`}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
                    <img
                      data-strk-img-id={service.imgId}
                      data-strk-img={`[${service.descId}] [svc-title]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="bg-slate-900 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Not Sure Which Service You Need?
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Tell us about your product and goals. We will recommend the right service mix and send you a free quote.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold text-base px-8 py-4 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
