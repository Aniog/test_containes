import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Factory, Truck, Users,
  CheckCircle2, ArrowRight, Globe2, Award, Eye, FileCheck,
  Package, BarChart3, Handshake
} from 'lucide-react'

const services = [
  {
    id: 'supplier-verification',
    icon: Search,
    title: 'Supplier Verification',
    subtitle: 'Know Who You Are Working With',
    desc: 'Before you commit to any supplier, we conduct comprehensive verification to confirm their legitimacy, capabilities, and track record.',
    features: [
      'Business license and registration verification',
      'Export license and trade history confirmation',
      'Production capability and capacity assessment',
      'Financial stability background check',
      'Reference checks with existing clients',
      'Online reputation and complaint analysis',
    ],
    imgId: 'service-verification-2a9c4f',
    titleId: 'service-verification-title',
  },
  {
    id: 'factory-audits',
    icon: Factory,
    title: 'Factory Audits',
    subtitle: 'See What Your Suppliers Cannot Show You Online',
    desc: 'Our experienced auditors visit factories in person to evaluate facilities, equipment, processes, and working conditions.',
    features: [
      'On-site facility and equipment inspection',
      'Quality management system evaluation',
      'Production workflow and capacity analysis',
      'Worker safety and conditions assessment',
      'Raw material storage and handling review',
      'Detailed audit report with photo documentation',
    ],
    imgId: 'service-audit-7b3e1d',
    titleId: 'service-audit-title',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch Problems Before They Ship',
    desc: 'We conduct thorough inspections at every stage of production to ensure your products meet specifications and standards.',
    features: [
      'Pre-production material inspection',
      'During production (DUPRO) in-line checks',
      'Pre-shipment random sampling (AQL standards)',
      'Function and performance testing',
      'Packaging and labeling verification',
      'Detailed inspection report with photos',
    ],
    imgId: 'service-inspection-5d8f2c',
    titleId: 'service-inspection-title',
  },
  {
    id: 'production-monitoring',
    icon: Eye,
    title: 'Production Monitoring',
    subtitle: 'Stay Informed at Every Step',
    desc: 'We track production progress in real time and provide regular updates so you always know where your order stands.',
    features: [
      'Weekly production progress reports',
      'Milestone tracking and deadline monitoring',
      'On-site presence at critical production stages',
      'Issue identification and resolution support',
      'Photo and video progress documentation',
      'Direct communication with factory management',
    ],
    imgId: 'service-monitoring-1c6a9e',
    titleId: 'service-monitoring-title',
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping & Logistics',
    subtitle: 'From Factory Floor to Your Door',
    desc: 'We handle all logistics including freight forwarding, customs clearance, warehousing, and last-mile delivery coordination.',
    features: [
      'Sea freight, air freight, and rail options',
      'Customs documentation and clearance',
      'Container loading supervision',
      'Warehousing and consolidation services',
      'Insurance arrangement and claims support',
      'Real-time shipment tracking',
    ],
    imgId: 'service-shipping-8e4b3a',
    titleId: 'service-shipping-title',
  },
  {
    id: 'compliance',
    icon: ShieldCheck,
    title: 'Compliance & Certification',
    subtitle: 'Meet Every Regulatory Requirement',
    desc: 'We ensure your products comply with destination country regulations, testing requirements, and certification standards.',
    features: [
      'CE, FCC, UL, and other certification guidance',
      'Product testing coordination with accredited labs',
      'Country-specific regulatory compliance review',
      'Labeling and packaging compliance',
      'Material safety data sheets (MSDS)',
      'Documentation for customs and import authorities',
    ],
    imgId: 'service-compliance-3f7d5b',
    titleId: 'service-compliance-title',
  },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-primary-800 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/10 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Comprehensive China Sourcing Services
          </h1>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto">
            From first contact to final delivery, we provide the full range of services you need
            to source products from China with confidence.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, idx) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  idx % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
              >
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-primary-500" />
                  </div>
                  <h2 id={service.titleId} className="text-3xl font-bold text-primary-800 mb-2">{service.title}</h2>
                  <p className="text-primary-500 font-semibold mb-4">{service.subtitle}</p>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">{service.desc}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-xl overflow-hidden shadow-xl ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    data-strk-img-id={service.imgId}
                    data-strk-img={`[${service.titleId}] China factory`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-6">
            Need a Custom Sourcing Solution?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Every business has unique sourcing needs. Contact us to discuss how we can tailor our services to your requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors no-underline"
          >
            Get Started <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
