import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Clock, Truck, BarChart3,
  ArrowRight, CheckCircle2, FileText, Users, Package, Globe
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist qualified suppliers from our verified network across China, matching your product specifications and quality requirements.',
    details: [
      'Product-specific supplier search across China\'s manufacturing hubs',
      'Initial screening for capability, capacity, and compliance',
      'Price comparison from 3-5 qualified suppliers',
      'Sample arrangement and evaluation',
      'Supplier background and reference checks',
    ],
    imgId: 'service-sourcing-d4e5f6',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site factory audits to verify business licenses, production capacity, quality management systems, and compliance with international standards.',
    details: [
      'Business license and registration verification',
      'On-site factory audit with detailed report',
      'Production capacity and equipment assessment',
      'Quality management system evaluation (ISO, etc.)',
      'Social compliance and working condition review',
    ],
    imgId: 'service-verification-g7h8i9',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-production, during-production, and pre-shipment inspections following AQL standards to ensure your products meet specifications.',
    details: [
      'Pre-production inspection (PPI) for materials and components',
      'During-production inspection (DPI) at 20-30% completion',
      'Pre-shipment inspection (PSI) before container loading',
      'AQL sampling based on international standards',
      'Detailed photo and video documentation',
    ],
    imgId: 'service-qc-j1k2l3',
  },
  {
    icon: Clock,
    title: 'Production Follow-up',
    desc: 'Regular monitoring of production progress, milestone tracking, and proactive communication to keep your orders on schedule.',
    details: [
      'Weekly production status updates with photos',
      'Milestone tracking against agreed timeline',
      'Proactive issue identification and resolution',
      'Direct communication with factory management',
      'Production delay early warning system',
    ],
    imgId: 'service-production-m4n5o6',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'End-to-end logistics management including freight booking, customs documentation, and door-to-door delivery coordination.',
    details: [
      'Sea freight, air freight, and rail options',
      'Consolidation of multiple supplier shipments',
      'Customs documentation and compliance',
      'Container loading supervision',
      'Real-time shipment tracking and updates',
    ],
    imgId: 'service-shipping-p7q8r9',
  },
  {
    icon: BarChart3,
    title: 'Cost Optimization',
    desc: 'Price negotiation, cost breakdown analysis, and supply chain optimization to help you achieve competitive pricing without compromising quality.',
    details: [
      'Detailed cost breakdown analysis',
      'Price negotiation with suppliers on your behalf',
      'MOQ optimization and order consolidation',
      'Supply chain efficiency recommendations',
      'Total landed cost calculation',
    ],
    imgId: 'service-cost-s1t2u3',
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
      <section className="bg-navy py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Sourcing Services</h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Comprehensive sourcing support covering every stage of your supply chain — from finding suppliers to delivering quality products.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, idx) => (
              <div key={service.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-14 h-14 bg-navy-50 rounded-xl flex items-center justify-center mb-5">
                    <service.icon className="w-7 h-7 text-ocean" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-4">{service.title}</h2>
                  <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
                  <ul className="space-y-3">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="rounded-xl overflow-hidden bg-slate-100 aspect-[4/3]">
                    <img
                      data-strk-img-id={service.imgId}
                      data-strk-img={`[service-${idx}-desc] [service-${idx}-title]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p id={`service-${idx}-title`} className="hidden">{service.title}</p>
                  <p id={`service-${idx}-desc`} className="hidden">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">Need a Specific Service?</h2>
          <p className="text-lg text-slate-600 mb-8">
            We tailor our services to your needs. Tell us what you're looking for and we'll provide a customized solution.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-ocean text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-blue-700 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
