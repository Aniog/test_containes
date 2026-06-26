import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Search, ShieldCheck, ClipboardCheck, Clock, Ship, ArrowRight, CheckCircle } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist qualified suppliers from our vetted network of 5,000+ factories across China, matched to your product requirements.',
    details: [
      'Product-specific supplier search across China\'s manufacturing hubs',
      'Supplier shortlisting based on capacity, certifications, and track record',
      'Price negotiation and comparison across multiple factories',
      'Sample coordination and evaluation support',
      'Supplier relationship management for long-term partnerships',
    ],
    imgId: 'svc-sourcing-h4i5j6',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site factory audits covering business licenses, production capacity, quality systems, and compliance — before you place an order.',
    details: [
      'Business license and registration verification',
      'On-site production capacity assessment',
      'Quality management system evaluation (ISO, etc.)',
      'Worker conditions and compliance review',
      'Detailed audit report with factory photos and recommendations',
    ],
    imgId: 'svc-verification-k7l8m9',
    titleId: 'svc-verification-title',
    descId: 'svc-verification-desc',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-production, during-production, and pre-shipment inspections based on your specifications and international standards.',
    details: [
      'Pre-production inspection (PPI) for materials and components',
      'During-production inspection (DPI) at 20-30% completion',
      'Pre-shipment inspection (PSI) before container loading',
      'AQL-based sampling per international standards',
      'Detailed photo and video reports for every inspection',
    ],
    imgId: 'svc-inspection-n1o2p3',
    titleId: 'svc-inspection-title',
    descId: 'svc-inspection-desc',
  },
  {
    icon: Clock,
    title: 'Production Follow-up',
    desc: 'We monitor production schedules, track milestones, and report progress so your orders stay on time.',
    details: [
      'Production schedule monitoring and milestone tracking',
      'Weekly progress reports with photos',
      'Early warning system for potential delays',
      'Direct communication with factory management',
      'Issue resolution and contingency planning',
    ],
    imgId: 'svc-production-q4r5s6',
    titleId: 'svc-production-title',
    descId: 'svc-production-desc',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    desc: 'End-to-end logistics support including freight booking, customs documentation, and door-to-door delivery coordination.',
    details: [
      'Freight booking (sea, air, rail) at competitive rates',
      'Customs documentation and compliance preparation',
      'Container loading supervision',
      'Shipment tracking and status updates',
      'Door-to-door delivery coordination',
    ],
    imgId: 'svc-shipping-t7u8v9',
    titleId: 'svc-shipping-title',
    descId: 'svc-shipping-desc',
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
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-amber font-semibold text-sm uppercase tracking-wider mb-2">Our Services</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
              Full-Service China Sourcing
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              From finding the right supplier to delivering quality products to your door, we provide end-to-end sourcing support tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                idx % 2 === 1 ? 'lg:direction-rtl' : ''
              }`}
            >
              <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center mb-5">
                  <service.icon className="w-6 h-6 text-navy" />
                </div>
                <h2 id={service.titleId} className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                <p id={service.descId} className="text-slate-600 text-base leading-relaxed mb-6">{service.desc}</p>
                <ul className="space-y-3">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden">
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
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Need Help Sourcing from China?</h2>
          <p className="text-slate-600 text-lg mb-8">
            Tell us about your project and get a free sourcing assessment within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-amber hover:bg-amber-dark text-white px-8 py-3.5 rounded-lg text-base font-semibold transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
