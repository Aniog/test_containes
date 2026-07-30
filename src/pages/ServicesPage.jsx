import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, Factory, ClipboardCheck, Clock, Truck, Headphones,
  ArrowRight, CheckCircle
} from 'lucide-react'

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify, evaluate, and shortlist qualified manufacturers that match your product specifications, quality standards, and budget requirements.',
    features: [
      'Database of 10,000+ verified suppliers',
      'Multi-criteria supplier matching',
      'Price comparison across 3-5 suppliers',
      'Background and capability checks',
      'Sample arrangement and evaluation',
    ],
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification & Audit',
    desc: 'On-site factory audits to confirm legitimacy, production capacity, quality management systems, and compliance with international standards.',
    features: [
      'Business license and registration verification',
      'On-site production capacity assessment',
      'Quality management system review (ISO, BSCI)',
      'Worker conditions and safety compliance',
      'Detailed audit report with photos',
    ],
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    desc: 'Comprehensive inspection services at every stage of production to ensure your products meet specifications before shipping.',
    features: [
      'Pre-production inspection (PPI)',
      'During-production inspection (DPI)',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
      'AQL-based sampling with photo reports',
    ],
  },
  {
    id: 'production-followup',
    icon: Clock,
    title: 'Production Follow-up',
    desc: 'We stay in constant contact with your factory to monitor production progress, resolve issues early, and keep your order on schedule.',
    features: [
      'Weekly production status updates',
      'Timeline tracking and milestone alerts',
      'Issue identification and resolution',
      'Direct factory communication',
      'Production photo and video updates',
    ],
  },
  {
    id: 'shipping-logistics',
    icon: Truck,
    title: 'Shipping & Logistics',
    desc: 'End-to-end logistics coordination from factory to your warehouse, including freight booking, customs documentation, and delivery tracking.',
    features: [
      'Sea, air, and rail freight options',
      'Customs documentation preparation',
      'Freight forwarder coordination',
      'Shipment tracking and updates',
      'Door-to-door delivery arrangement',
    ],
  },
  {
    id: 'ongoing-support',
    icon: Headphones,
    title: 'Ongoing Support & Reorders',
    desc: 'A dedicated account manager for long-term supplier relationships, reorder management, and continuous improvement of your supply chain.',
    features: [
      'Dedicated account manager',
      'Supplier relationship management',
      'Reorder coordination and optimization',
      'Price renegotiation support',
      'New product development assistance',
    ],
  },
]

const ServicesPage = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="services-page-title" className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Our Sourcing Services
          </h1>
          <p id="services-page-subtitle" className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive China sourcing support from supplier discovery to doorstep delivery. Every service designed to reduce your risk and save you time.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, i) => (
              <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-orange" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                  <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <img
                    data-strk-img-id={`service-img-${service.id}`}
                    data-strk-img={`[services-page-subtitle] [services-page-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={service.title}
                    className="rounded-xl shadow-md w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Need Help Sourcing from China?
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Tell us about your project and we'll recommend the right services for your needs.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-dark transition"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
