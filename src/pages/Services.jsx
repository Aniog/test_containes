import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Search, ShieldCheck, ClipboardCheck, Clock, Ship, FileText, ArrowRight } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and shortlist reliable suppliers from our vetted network based on your product requirements, target price, and quality standards.',
    details: [
      'Product-specific supplier search across China',
      'Initial price negotiation and comparison',
      'Supplier background check and reference verification',
      '3-5 qualified supplier options with detailed quotes',
    ],
    imgId: 'svc-sourcing-v1w2x3',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    description: 'On-site factory audits to verify business licenses, production capacity, quality management systems, and compliance certifications.',
    details: [
      'Business license and registration verification',
      'On-site production capacity assessment',
      'Quality management system evaluation (ISO, etc.)',
      'Social compliance and certification review',
      'Detailed audit report with photos and findings',
    ],
    imgId: 'svc-verification-y4z5a6',
    titleId: 'svc-verification-title',
    descId: 'svc-verification-desc',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-production, during-production, and pre-shipment inspections following AQL standards to ensure product quality meets your specifications.',
    details: [
      'Pre-production inspection (raw materials & components)',
      'During-production inspection (in-line quality check)',
      'Pre-shipment inspection (AQL-based final check)',
      'Detailed inspection reports with photos',
      'Defect classification and corrective action tracking',
    ],
    imgId: 'svc-inspection-b7c8d9',
    titleId: 'svc-inspection-title',
    descId: 'svc-inspection-desc',
  },
  {
    icon: Clock,
    title: 'Production Follow-up',
    description: 'Regular monitoring of production progress, milestone tracking, and proactive communication to keep your orders on schedule.',
    details: [
      'Production schedule planning and milestone setting',
      'Weekly progress updates with photos',
      'Proactive issue identification and resolution',
      'Delay risk assessment and contingency planning',
    ],
    imgId: 'svc-production-e1f2g3',
    titleId: 'svc-production-title',
    descId: 'svc-production-desc',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics management including freight booking, customs documentation, and door-to-door delivery coordination.',
    details: [
      'Sea freight, air freight, and express shipping options',
      'Freight rate comparison and booking',
      'Customs documentation and compliance',
      'Cargo insurance arrangement',
      'Door-to-door delivery coordination',
    ],
    imgId: 'svc-shipping-h4i5j6',
    titleId: 'svc-shipping-title',
    descId: 'svc-shipping-desc',
  },
  {
    icon: FileText,
    title: 'Product Development',
    description: 'From concept to production-ready product, we help with design refinement, prototyping, and OEM/ODM manufacturing coordination.',
    details: [
      'Design review and material selection',
      'Prototype and sample development',
      'OEM/ODM manufacturing coordination',
      'Packaging and labeling design',
      'Compliance testing coordination',
    ],
    imgId: 'svc-development-k7l8m9',
    titleId: 'svc-development-title',
    descId: 'svc-development-desc',
  },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Our Services</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Comprehensive sourcing support from supplier discovery to delivery. Every step covered.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-12 h-12 bg-sky-blue rounded-lg flex items-center justify-center mb-5">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 id={service.titleId} className="text-2xl md:text-3xl font-bold text-navy mb-4">{service.title}</h2>
                  <p id={service.descId} className="text-muted-text leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-trust-green/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-trust-green rounded-full" />
                        </div>
                        <span className="text-body-text text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="rounded-xl overflow-hidden bg-section-bg h-64 lg:h-80">
                    <img
                      alt={service.title}
                      data-strk-img-id={service.imgId}
                      data-strk-img={`[${service.descId}] [${service.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-sky-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Solution?</h2>
          <p className="text-white/80 text-lg mb-8">
            Every sourcing project is unique. Tell us your requirements and we will create a tailored plan.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-sky-blue-dark px-8 py-4 rounded-lg font-bold hover:bg-white/90 transition-colors"
          >
            Get a Free Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
