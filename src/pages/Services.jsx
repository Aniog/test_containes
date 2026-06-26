import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Search, ShieldCheck, ClipboardCheck, Clock, Ship, ChevronRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist qualified suppliers from our verified network based on your product requirements, target price, and quality standards.',
    details: [
      'Search across 500+ pre-vetted suppliers in our database',
      'Evaluate new suppliers based on your specific criteria',
      'Compare quotes from multiple qualified factories',
      'Provide detailed supplier profiles with capabilities and certifications',
      'Negotiate pricing and terms on your behalf',
    ],
    imgId: 'svc-sourcing-d1',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'Our team visits factories in person to verify business licenses, production capacity, quality systems, and working conditions before you commit.',
    details: [
      'On-site factory visits with detailed photo and video reports',
      'Business license and registration verification',
      'Production capacity and equipment assessment',
      'Quality management system evaluation (ISO, etc.)',
      'Working conditions and compliance review',
    ],
    imgId: 'svc-verification-e2',
    titleId: 'svc-verification-title',
    descId: 'svc-verification-desc',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-production, during-production, and pre-shipment inspections to ensure your products meet specifications before they leave the factory.',
    details: [
      'Pre-production inspection (PPI): raw materials and components check',
      'During-production inspection (DPI): in-process quality monitoring',
      'Pre-shipment inspection (PSI): final check before dispatch',
      'Detailed inspection reports with photos and measurements',
      'AQL sampling based on international standards',
    ],
    imgId: 'svc-inspection-f3',
    titleId: 'svc-inspection-title',
    descId: 'svc-inspection-desc',
  },
  {
    icon: Clock,
    title: 'Production Follow-up',
    desc: 'We monitor production schedules, track milestones, and report progress so your orders stay on track and delays are caught early.',
    details: [
      'Regular production status updates with photos',
      'Milestone tracking against agreed timelines',
      'Early warning system for potential delays',
      'Coordination between you and the factory on changes',
      'Weekly progress reports during production',
    ],
    imgId: 'svc-production-g4',
    titleId: 'svc-production-title',
    descId: 'svc-production-desc',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    desc: 'From booking freight to customs documentation, we coordinate logistics to get your goods from the factory to your door smoothly.',
    details: [
      'Freight booking (sea, air, rail) at competitive rates',
      'Consolidation of shipments from multiple suppliers',
      'Customs documentation and compliance preparation',
      'Real-time shipment tracking and status updates',
      'Door-to-door delivery coordination',
    ],
    imgId: 'svc-shipping-h5',
    titleId: 'svc-shipping-title',
    descId: 'svc-shipping-desc',
  },
]

export default function ServicesPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Our Services
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Comprehensive sourcing support from finding suppliers to delivering goods. Each service is designed to reduce risk and save you time.
          </p>
        </div>
      </section>

      {services.map((service, index) => {
        const Icon = service.icon
        const isEven = index % 2 === 0
        return (
          <section key={service.title} className={`py-16 md:py-20 ${isEven ? 'bg-white' : 'bg-slate-50'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                <div className={isEven ? '' : 'lg:order-2'}>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 id={service.titleId} className="text-2xl md:text-3xl font-bold text-primary mb-4">{service.title}</h2>
                  <p id={service.descId} className="text-slate-600 text-base leading-relaxed mb-6">{service.desc}</p>
                  <ul className="space-y-3">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                        <span className="text-slate-700 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${isEven ? '' : 'lg:order-1'}`}>
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
            </div>
          </section>
        )
      })}

      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Start Sourcing?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Tell us about your product and requirements. We will provide a free sourcing plan and quote within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
