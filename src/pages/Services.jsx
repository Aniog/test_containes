import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Search, Factory, ShieldCheck, ClipboardCheck, Ship, Beaker, ArrowRight, CheckCircle } from 'lucide-react'
import CTASection from '@/components/home/CTASection'

const servicesList = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and vet reliable suppliers that match your product specifications, budget, and quality requirements.',
    details: [
      'Market research and supplier identification',
      'RFQ distribution to qualified suppliers',
      'Price negotiation and terms agreement',
      'Capability and capacity assessment',
      'Reference checks with past buyers',
    ],
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    description: 'On-site audits to verify factory legitimacy, production capacity, certifications, and working conditions.',
    details: [
      'Business license and legal status verification',
      'On-site facility and equipment inspection',
      'Production capacity assessment',
      'Quality management system review',
      'Social compliance and working conditions audit',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Quality Control',
    description: 'Pre-shipment inspections, in-process QC checks, and product testing to ensure your standards are met.',
    details: [
      'In-process inspection during production',
      'Pre-shipment inspection (AQL sampling)',
      'Dimensional and functional testing',
      'Packaging and labeling verification',
      'Photo and video evidence at each stage',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Production Monitoring',
    description: 'Regular progress updates and milestone checks to keep your orders on track and on schedule.',
    details: [
      'Weekly production progress reports',
      'Raw material arrival verification',
      'Production milestone tracking',
      'Real-time issue notification and resolution',
      'Final shipment readiness confirmation',
    ],
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics',
    description: 'Coordination of freight, customs documentation, and door-to-door delivery to any destination worldwide.',
    details: [
      'Freight booking (air, sea, express)',
      'Export customs clearance in China',
      'Shipping documentation (B/L, CO, invoice)',
      'Cargo tracking and status updates',
      'Door-to-door delivery coordination',
    ],
  },
  {
    icon: Beaker,
    title: 'Product Sampling',
    description: 'Management of sample development, revisions, and approval process before bulk production begins.',
    details: [
      'Sample request from shortlisted suppliers',
      'Sample evaluation and feedback management',
      'Revision coordination with factory',
      'Pre-production sample approval',
      'Sample retention for future reference',
    ],
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
      <section className="bg-gray-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-primary-light font-semibold text-sm tracking-wide uppercase">Our Services</span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
              Comprehensive Sourcing Services
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Every step of the sourcing process, managed by experienced professionals who understand both Chinese manufacturing and international quality standards.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {servicesList.map((service, i) => (
              <div
                key={i}
                className={`flex flex-col ${
                  i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 md:gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className="w-14 h-14 bg-primary-light rounded-xl flex items-center justify-center mb-5">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{service.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full">
                  <div className="aspect-[4/3] rounded-xl bg-gray-100 overflow-hidden">
                    <div
                      className="w-full h-full bg-gray-200"
                      data-strk-bg-id={`service-img-${i}`}
                      data-strk-bg={`[service-${i}-title] [service-${i}-desc]`}
                      data-strk-bg-ratio="4x3"
                      data-strk-bg-width="700"
                    />
                  </div>
                  <p id={`service-${i}-title`} className="sr-only">{service.title}</p>
                  <p id={`service-${i}-desc`} className="sr-only">{service.description}</p>
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