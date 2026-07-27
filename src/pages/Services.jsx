import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Search, Factory, ClipboardCheck, Eye, Ship, HeadphonesIcon, Shield, ArrowRight, CheckCircle } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and vet reliable suppliers matching your specific product requirements, budget, and quality expectations.',
    features: [
      'Market research and supplier mapping by product category',
      'Request for quotation (RFQ) management across multiple suppliers',
      'Price negotiation and terms comparison',
      'Capability assessment and initial screening',
    ],
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site audits conducted by our experienced team to verify supplier legitimacy and production capacity.',
    features: [
      'Business license and legal status verification',
      'Production facility and equipment assessment',
      'Quality management system evaluation',
      'Social compliance and working conditions audit',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Comprehensive quality control services to ensure products meet your specifications and standards.',
    features: [
      'During-production inspection (DPI)',
      'Pre-shipment inspection (PSI)',
      'Random sampling per AQL standards',
      'Detailed inspection reports with photos and measurements',
    ],
  },
  {
    icon: Eye,
    title: 'Production Monitoring',
    desc: 'Real-time tracking and regular updates on your order status from raw materials to finished goods.',
    features: [
      'Weekly production progress reports',
      'Raw material quality verification',
      'Production timeline management',
      'Issue identification and resolution',
    ],
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics',
    desc: 'End-to-end logistics management from factory gate to your destination.',
    features: [
      'Sea freight, air freight, and express courier options',
      'Customs documentation and clearance',
      'Consolidation services for multiple orders',
      'Door-to-door delivery coordination',
    ],
  },
  {
    icon: HeadphonesIcon,
    title: 'Dedicated Account Management',
    desc: 'A personal sourcing manager assigned to your project, available across time zones.',
    features: [
      'Single point of contact for all communications',
      'Regular video calls and progress updates',
      'Language support (English, Mandarin, Cantonese)',
      'After-sales support and issue resolution',
    ],
  },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-500 py-16 md:py-24" ref={containerRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-brand-100 text-lg max-w-2xl mx-auto">
            End-to-end sourcing services designed to protect your interests and streamline your supply chain from China.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-xl border border-surface-200 p-6 md:p-8 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mb-5">
                  <service.icon className="w-6 h-6 text-brand-500" />
                </div>
                <h2 className="text-xl font-semibold text-surface-800 mb-3">{service.title}</h2>
                <p className="text-surface-500 text-sm mb-4">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-surface-600">
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-surface-800 mb-4">Need a Custom Sourcing Solution?</h2>
          <p className="text-surface-500 mb-8">
            Every project is different. Contact us and we will design a service package that fits your specific needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent-500 text-white rounded-lg font-semibold hover:bg-accent-600 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}