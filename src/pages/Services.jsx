import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Search, ShieldCheck, ClipboardCheck, Clock, Ship, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We search across Chinese manufacturing hubs to find suppliers that match your product specifications, price targets, and quality requirements.',
    details: [
      'Product-specific supplier search across major manufacturing regions',
      'Initial supplier screening based on your requirements',
      'Price comparison from multiple qualified suppliers',
      'Sample arrangement and evaluation',
      'Supplier background research and reference checks',
    ],
    imgId: 'service-sourcing-e4f5g6',
    titleId: 'service-sourcing-title',
    descId: 'service-sourcing-desc',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    description: 'We visit factories in person, verify business licenses, check production capabilities, and assess quality management systems before you commit.',
    details: [
      'On-site factory visits with detailed photo documentation',
      'Business license and registration verification',
      'Production capacity and equipment assessment',
      'Quality management system evaluation (ISO certifications)',
      'Export experience and client reference verification',
      'Environmental and social compliance checks',
    ],
    imgId: 'service-verification-h7i8j9',
    titleId: 'service-verification-title',
    descId: 'service-verification-desc',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-production, during-production, and pre-shipment inspections based on AQL standards. Detailed photo reports with measurable results.',
    details: [
      'Pre-production inspection (PPI) — materials and components check',
      'During-production inspection (DPI) — mid-run quality check',
      'Pre-shipment inspection (PSI) — final AQL-based inspection',
      'Detailed photo reports with defect classification',
      'Lab testing coordination for certifications',
      'Container loading supervision',
    ],
    imgId: 'service-inspection-k1l2m3',
    titleId: 'service-inspection-title',
    descId: 'service-inspection-desc',
  },
  {
    icon: Clock,
    title: 'Production Follow-up',
    description: 'We monitor production schedules, track milestones, and keep you updated on progress so your orders arrive on time.',
    details: [
      'Production schedule monitoring and milestone tracking',
      'Weekly progress reports with photos',
      'Early warning on potential delays',
      'Coordination with factory on timeline adjustments',
      'Material procurement status tracking',
      'Packaging and labeling compliance checks',
    ],
    imgId: 'service-production-n4o5p6',
    titleId: 'service-production-title',
    descId: 'service-production-desc',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'We coordinate logistics from factory to port, handle customs documentation, and work with freight forwarders to get your goods delivered.',
    details: [
      'Freight forwarding coordination (sea and air)',
      'FCL and LCL shipment arrangement',
      'Export documentation preparation',
      'Customs clearance assistance',
      'Container loading supervision',
      'Real-time shipment tracking and status updates',
    ],
    imgId: 'service-shipping-q7r8s9',
    titleId: 'service-shipping-title',
    descId: 'service-shipping-desc',
  },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-slate-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="services-page-title" className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Sourcing Services
          </h1>
          <p id="services-page-subtitle" className="text-slate-300 text-lg max-w-2xl mx-auto">
            From finding suppliers to delivering goods, we cover every step of the China sourcing process with professional, on-the-ground support.
          </p>
        </div>
      </section>

      {services.map((service, index) => (
        <section
          key={service.title}
          className={index % 2 === 0 ? 'bg-white py-16 md:py-20' : 'bg-slate-50 py-16 md:py-20'}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary-500" />
                </div>
                <h2 id={service.titleId} className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h2>
                <p id={service.descId} className="text-slate-600 text-lg leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 shrink-0" />
                      <span className="text-slate-700 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                <div className="rounded-xl overflow-hidden shadow-md">
                  <img
                    alt={service.title}
                    data-strk-img-id={service.imgId}
                    data-strk-img={`[${service.descId}] [${service.titleId}] [services-page-subtitle] [services-page-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-primary-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Start Sourcing from China?
          </h2>
          <p className="text-primary-100 text-lg mb-8">
            Get a free consultation and quote for your sourcing project. No commitment required.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-accent-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-accent-600 transition-colors no-underline text-lg"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
