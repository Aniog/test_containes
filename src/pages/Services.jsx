import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, ShieldCheck, ClipboardCheck, Clock, Ship, ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const services = [
  {
    id: 'supplier-search',
    icon: Search,
    title: 'Supplier Search & Matching',
    desc: 'We identify and evaluate suppliers matching your product requirements, quality standards, and budget from our network of 500+ verified factories across China.',
    details: [
      'Product-specific supplier search based on your specifications',
      'Initial screening for business legitimacy and production capability',
      'Comparison of 3-5 qualified suppliers with detailed profiles',
      'Price negotiation support to ensure competitive pricing',
      'Sample coordination and evaluation',
    ],
    imgId: 'service-search-e1f2g3',
    titleId: 'service-search-title',
    descId: 'service-search-desc',
  },
  {
    id: 'factory-verification',
    icon: ShieldCheck,
    title: 'Factory Verification & Audit',
    desc: 'On-site audits to verify business licenses, production capacity, quality systems, and working conditions before you commit to any supplier.',
    details: [
      'Business license and registration verification',
      'On-site factory visit and capability assessment',
      'Quality management system evaluation (ISO, etc.)',
      'Production equipment and workforce review',
      'Environmental and social compliance checks',
    ],
    imgId: 'service-verify-h4i5j6',
    titleId: 'service-verify-title',
    descId: 'service-verify-desc',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-production, during-production, and pre-shipment inspections following international AQL standards to ensure your products meet specifications.',
    details: [
      'Pre-production inspection (PP inspection) for sample approval',
      'During-production inspection (DUPRO) to catch issues early',
      'Pre-shipment inspection (PSI) before goods leave the factory',
      'AQL-based sampling per international standards',
      'Detailed photo reports with measurements and findings',
    ],
    imgId: 'service-inspection-k7l8m9',
    titleId: 'service-inspection-title',
    descId: 'service-inspection-desc',
  },
  {
    id: 'production-follow',
    icon: Clock,
    title: 'Production Follow-up',
    desc: 'Regular monitoring of production progress, timeline tracking, and proactive communication to keep your orders on schedule.',
    details: [
      'Weekly production status updates with photos',
      'Timeline tracking against agreed milestones',
      'Early warning on potential delays or issues',
      'Coordination between buyer and factory on changes',
      'Container loading supervision',
    ],
    imgId: 'service-production-n1o2p3',
    titleId: 'service-production-title',
    descId: 'service-production-desc',
  },
  {
    id: 'shipping-coordination',
    icon: Ship,
    title: 'Shipping Coordination',
    desc: 'End-to-end logistics support including freight booking, customs documentation, and delivery tracking from factory to your door.',
    details: [
      'Sea freight, air freight, and express shipping options',
      'Freight rate comparison and booking',
      'Customs documentation preparation',
      'Cargo insurance arrangement',
      'Shipment tracking from factory to destination',
    ],
    imgId: 'service-shipping-q4r5s6',
    titleId: 'service-shipping-title',
    descId: 'service-shipping-desc',
  },
]

const ServicesPage = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-primary-800 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 id="services-page-title" className="text-3xl md:text-4xl font-bold mb-4">Our Sourcing Services</h1>
          <p id="services-page-desc" className="text-primary-100 max-w-2xl text-lg">
            Comprehensive sourcing support from supplier discovery to delivery. Each service is designed to solve specific challenges and protect your investment.
          </p>
        </div>
      </section>

      {services.map((s, i) => (
        <section key={s.id} className={`py-16 md:py-20 ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-primary-500" />
                </div>
                <h2 id={s.titleId} className="text-2xl md:text-3xl font-bold text-neutral-800 mb-3">{s.title}</h2>
                <p id={s.descId} className="text-neutral-500 leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-2 mb-6">
                  {s.details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-neutral-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5" />
                      {d}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-5 py-2.5 rounded-md no-underline transition-colors"
                >
                  Request This Service
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="aspect-[4/3] rounded-lg overflow-hidden bg-neutral-100">
                  <img
                    alt={s.title}
                    data-strk-img-id={s.imgId}
                    data-strk-img={`[${s.descId}] [${s.titleId}] [services-page-desc] [services-page-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 md:py-20 bg-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Sourcing?</h2>
          <p className="text-primary-100 max-w-2xl mx-auto mb-8">
            Tell us what you need. We will provide a free sourcing plan and quote within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-lg no-underline transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
