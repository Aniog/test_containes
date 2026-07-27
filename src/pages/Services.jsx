import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Factory, Truck, Users,
  ArrowRight, CheckCircle,
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find real manufacturers, not middlemen',
    desc: 'We tap into our network of 500+ pre-vetted factories to match you with suppliers that meet your exact specifications. Every candidate undergoes a preliminary screening before we present them to you.',
    details: [
      'Product specification analysis and market research',
      'Supplier shortlist with detailed factory profiles',
      'Price comparison and negotiation support',
      'Sample collection and evaluation',
    ],
    imgId: 'service-sourcing-img-1a2b3c',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    subtitle: 'Know who you are dealing with',
    desc: 'We conduct comprehensive on-site factory audits covering legal status, financial health, production capacity, quality management systems, certifications, and social compliance.',
    details: [
      'Business license and export license verification',
      'On-site factory tour with photo/video documentation',
      'Production line and equipment assessment',
      'Quality management system review (ISO, BSCI, etc.)',
    ],
    imgId: 'service-factory-img-4d5e6f',
    titleId: 'svc-factory-title',
    descId: 'svc-factory-desc',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control',
    subtitle: 'AQL-based inspection at every stage',
    desc: 'Our QC inspectors enforce internationally recognized AQL standards with detailed reports including photos, measurements, and functional testing results.',
    details: [
      'Pre-production inspection (raw materials)',
      'During production inspection (DUPRO)',
      'Pre-shipment inspection (final random sampling)',
      'Container loading supervision',
    ],
    imgId: 'service-qc-img-7g8h9i',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
  },
  {
    icon: Factory,
    title: 'Production Follow-Up',
    subtitle: 'Stay informed at every milestone',
    desc: 'We monitor production progress with weekly updates. You receive photos, videos, and status reports so you always know where your order stands.',
    details: [
      'Weekly production progress reports',
      'Photo and video documentation from the factory floor',
      'Milestone tracking against agreed timeline',
      'Immediate escalation if delays or issues arise',
    ],
    imgId: 'service-prod-img-0j1k2l',
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'From factory to your destination',
    desc: 'We manage freight forwarding, customs clearance, and delivery coordination. Our logistics partners cover sea, air, and express shipping to all major ports worldwide.',
    details: [
      'Freight booking and rate comparison',
      'Export documentation and customs clearance',
      'Cargo insurance arrangement',
      'Door-to-door delivery coordination',
    ],
    imgId: 'service-shipping-img-3m4n5o',
    titleId: 'svc-shipping-title',
    descId: 'svc-shipping-desc',
  },
  {
    icon: Users,
    title: 'Dedicated Account Management',
    subtitle: 'One person, your entire project',
    desc: 'You get a bilingual account manager who understands your market and coordinates every aspect of your sourcing project. No handoffs, no confusion.',
    details: [
      'Single point of contact for all communications',
      'Bilingual support (English, Chinese, and more)',
      'Regular status calls and reports',
      'Market intelligence and sourcing strategy advice',
    ],
    imgId: 'service-acct-img-6p7q8r',
    titleId: 'svc-acct-title',
    descId: 'svc-acct-desc',
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
      <section className="bg-brand-navy py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Our Services
          </h1>
          <p className="text-lg text-brand-gray-400 max-w-2xl mx-auto">
            End-to-end China sourcing solutions designed to eliminate risk at every stage of your supply chain.
          </p>
        </div>
      </section>

      {/* Service detail sections */}
      {services.map((svc, i) => (
        <section
          key={svc.imgId}
          className={`py-20 md:py-28 ${i % 2 === 0 ? 'bg-white' : 'bg-brand-gray-50'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Text */}
              <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-5">
                  <svc.icon className="w-6 h-6 text-brand-blue" />
                </div>
                <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight mb-2">
                  {svc.title}
                </h2>
                <p className="text-lg text-brand-blue font-medium mb-4">{svc.subtitle}</p>
                <p id={svc.descId} className="text-brand-gray-600 leading-relaxed mb-6">
                  {svc.desc}
                </p>
                <ul className="space-y-3">
                  {svc.details.map((detail, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-sm text-brand-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className={i % 2 !== 0 ? 'lg:order-1' : ''}>
                <div
                  className="rounded-xl overflow-hidden"
                  data-strk-bg-id={svc.imgId}
                  data-strk-bg={`[${svc.descId}] [${svc.titleId}]`}
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width="800"
                >
                  <div className="h-72 md:h-80 bg-brand-gray-100" />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 bg-brand-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Not sure which service you need?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Tell us about your project and we will recommend the right combination of services.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-brand-blue font-semibold rounded-lg hover:bg-brand-gray-100 transition-colors"
          >
            Get a Free Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
