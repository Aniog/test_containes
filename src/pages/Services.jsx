import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Factory, Ship, Lightbulb,
  FileText, Users, ArrowRight, CheckCircle
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We research, identify, and shortlist qualified Chinese suppliers based on your product specifications, target price, MOQ, and quality requirements.',
    features: ['Market research & supplier mapping', 'RFQ management & price comparison', 'Supplier background checks', 'Sample coordination'],
    imgId: 'svc-sourcing-img-a1b2c3',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site factory audits to confirm legitimacy, production capacity, quality management systems, and compliance with international standards.',
    features: ['Business license verification', 'Production capacity assessment', 'Quality system evaluation', 'Social compliance checks'],
    imgId: 'svc-verification-img-d4e5f6',
    titleId: 'svc-verification-title',
    descId: 'svc-verification-desc',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Professional QC inspections at every stage of production — from raw materials to final packaging — with detailed photo and video reports.',
    features: ['Pre-production inspection (PPI)', 'During production inspection (DPI)', 'Pre-shipment inspection (PSI)', 'Container loading supervision'],
    imgId: 'svc-inspection-img-g7h8i9',
    titleId: 'svc-inspection-title',
    descId: 'svc-inspection-desc',
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    desc: 'Regular factory visits and real-time progress updates to ensure your order stays on schedule, within spec, and free of surprises.',
    features: ['Weekly progress reports', 'Timeline tracking & alerts', 'Issue resolution support', 'Photo/video documentation'],
    imgId: 'svc-production-img-j1k2l3',
    titleId: 'svc-production-title',
    descId: 'svc-production-desc',
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics',
    desc: 'End-to-end logistics coordination including freight booking, customs documentation, and delivery tracking from factory to your warehouse.',
    features: ['Freight forwarder selection', 'Export documentation', 'Customs clearance support', 'Shipment tracking'],
    imgId: 'svc-shipping-img-m4n5o6',
    titleId: 'svc-shipping-title',
    descId: 'svc-shipping-desc',
  },
  {
    icon: Lightbulb,
    title: 'Product Development',
    desc: 'Support with new product development including sampling, prototyping, packaging design, and private label setup.',
    features: ['Sample management', 'Prototype iteration', 'Packaging & labeling design', 'OEM/ODM coordination'],
    imgId: 'svc-development-img-p7q8r9',
    titleId: 'svc-development-title',
    descId: 'svc-development-desc',
  },
]

export default function ServicesPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-3">Our Services</p>
            <h1 id="services-hero-title" className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Full-Service China Sourcing Support
            </h1>
            <p id="services-hero-desc" className="text-lg text-slate-300 leading-relaxed">
              From supplier discovery to doorstep delivery, we provide the local expertise and hands-on support you need to source from China successfully.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <service.icon className="w-10 h-10 text-blue-800 mb-4" />
                  <h2 id={service.titleId} className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">{service.title}</h2>
                  <p id={service.descId} className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                        <span className="text-slate-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <img
                    alt={service.title}
                    data-strk-img-id={service.imgId}
                    data-strk-img={`[${service.descId}] [${service.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full rounded-xl shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-800 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Need Help Sourcing from China?</h2>
          <p className="text-blue-200 text-lg mb-8">Tell us about your project and we will put together a tailored sourcing plan for you.</p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg text-base no-underline transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
