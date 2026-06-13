import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Search, ShieldCheck, ClipboardCheck, Clock, Ship, ArrowRight, CheckCircle2 } from 'lucide-react'
import { CTASection, SectionHeader } from '../components/shared/CTASection'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist qualified suppliers matching your product specifications, quality standards, and budget requirements.',
    details: [
      'Product-specific supplier search across China\'s manufacturing hubs',
      'Initial screening for capability, capacity, and compliance',
      'Price comparison and negotiation support',
      'Sample coordination and evaluation',
      'Supplier shortlist with detailed profiles and recommendations',
    ],
    imgId: 'service-sourcing-x1y2z3',
    titleId: 'service-sourcing-title',
    descId: 'service-sourcing-desc',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site factory audits to verify business licenses, production capacity, quality systems, and real manufacturing capabilities.',
    details: [
      'Business license and registration verification',
      'On-site factory audit with detailed report',
      'Production capacity and equipment assessment',
      'Quality management system evaluation',
      'Worker welfare and compliance check',
      'Verification that the factory is a real manufacturer, not a trading company',
    ],
    imgId: 'service-verification-a4b5c6',
    titleId: 'service-verification-title',
    descId: 'service-verification-desc',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-production, during-production, and pre-shipment inspections based on international AQL standards.',
    details: [
      'Pre-production inspection (PPI) to verify materials and components',
      'During-production inspection (DPI) to catch issues early',
      'Pre-shipment inspection (PSI) based on AQL standards',
      'Detailed photo and video documentation',
      'Defect classification and corrective action recommendations',
      'Lab testing coordination for certifications and compliance',
    ],
    imgId: 'service-inspection-d7e8f9',
    titleId: 'service-inspection-title',
    descId: 'service-inspection-desc',
  },
  {
    icon: Clock,
    title: 'Production Follow-up',
    desc: 'Regular monitoring of production progress, milestone tracking, and proactive issue resolution to keep your orders on schedule.',
    details: [
      'Production schedule planning and milestone setting',
      'Weekly progress updates with photos and reports',
      'Proactive identification and resolution of production issues',
      'Raw material and component availability tracking',
      'Coordination between multiple suppliers for assembled products',
    ],
    imgId: 'service-production-g1h2i3',
    titleId: 'service-production-title',
    descId: 'service-production-desc',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    desc: 'End-to-end logistics management including freight booking, customs documentation, and delivery tracking to your door.',
    details: [
      'Freight rate comparison and booking (sea, air, rail)',
      'Consolidation of goods from multiple suppliers',
      'Export customs declaration and documentation',
      'Coordination with destination forwarder',
      'Real-time shipment tracking and status updates',
      'Warehouse and fulfillment arrangements in China',
    ],
    imgId: 'service-shipping-j4k5l6',
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
      {/* Hero */}
      <section className="bg-navy-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            End-to-end sourcing support from supplier discovery to delivery at your door.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, i) => (
              <div key={i} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <service.icon className="w-10 h-10 text-sky-brand mb-4" />
                  <h2 id={service.titleId} className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p id={service.descId} className="text-gray-600 mb-6">{service.desc}</p>
                  <ul className="space-y-3">
                    {service.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <img
                    alt={service.title}
                    data-strk-img-id={service.imgId}
                    data-strk-img={`[${service.descId}] [${service.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full rounded-lg bg-gray-100"
                  />
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
