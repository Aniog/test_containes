import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import loadStrkImgConfig from '../strk-img-config.js'
import { Search, Building2, ClipboardCheck, TrendingUp, Ship, Shield, FileCheck, Users, Package, BarChart3 } from 'lucide-react'

const detailedServices = [
  {
    icon: Search,
    title: 'Supplier Sourcing & Identification',
    description: 'We research and identify qualified suppliers that match your product specifications, quality requirements, and budget. Our team leverages an extensive network of verified manufacturers across China.',
    features: [
      'Market research and supplier mapping',
      'Capability and capacity assessment',
      'Price benchmarking and comparison',
      'Background and compliance checks',
    ],
  },
  {
    icon: Building2,
    title: 'Factory Verification & Audits',
    description: 'Our auditors visit factories in person to verify credentials, assess production capabilities, and evaluate quality management systems. We provide detailed reports with photos and recommendations.',
    features: [
      'On-site factory inspection',
      'Production line evaluation',
      'Quality system assessment',
      'Social compliance audit',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    description: 'Independent inspection at every stage of production. Our QC inspectors check products against your specifications and provide comprehensive reports with photographic evidence.',
    features: [
      'Pre-production sample inspection',
      'During-production inspection (DUPRO)',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Production Monitoring',
    description: 'Regular follow-up and progress tracking on your orders. We identify potential delays early and work with suppliers to keep production on schedule.',
    features: [
      'Weekly production status reports',
      'Real-time issue escalation',
      'Photo and video updates',
      'Critical path management',
    ],
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics Coordination',
    description: 'End-to-end logistics management from factory pickup to delivery at your destination port. We handle all documentation, customs clearance, and freight booking.',
    features: [
      'Freight forwarding (FCL/LCL)',
      'Export documentation',
      'Customs clearance support',
      'Cargo insurance arrangement',
    ],
  },
  {
    icon: Shield,
    title: 'Risk Management & Compliance',
    description: 'Protect your business with comprehensive risk assessment. We help you navigate Chinese regulations, intellectual property protection, and supplier contract negotiations.',
    features: [
      'Supplier due diligence reports',
      'Contract review and negotiation',
      'IP protection guidance',
      'Dispute resolution support',
    ],
  },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    let cancelled = false
    loadStrkImgConfig().then((cfg) => {
      if (!cancelled && containerRef.current) {
        return ImageHelper.loadImages(cfg, containerRef.current)
      }
    })
    return () => { cancelled = true }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Our Services</h1>
            <p className="mt-4 text-lg text-slate-600">
              Comprehensive sourcing and supply chain services tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-12">
            {detailedServices.map((service, i) => (
              <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-brand-600" />
                      </div>
                      <h2 className="text-xl font-bold text-slate-900">{service.title}</h2>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-5">{service.description}</p>
                    <ul className="space-y-2.5">
                      {service.features.map((feat, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                          <span className="w-1.5 h-1.5 bg-brand-500 rounded-full mt-2 shrink-0" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div
                    data-strk-bg-id={`service-img-${i}`}
                    data-strk-bg={`[service-title-${i}] [service-section-title]`}
                    data-strk-bg-ratio="4x3"
                    data-strk-bg-width="800"
                    className="bg-slate-200 rounded-lg h-64 md:h-80 bg-cover bg-center"
                    
                  />
                  <span id={`service-title-${i}`} className="hidden">{service.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 id="service-section-title" className="text-3xl font-bold text-slate-900 tracking-tight">Need a Specific Service?</h2>
            <p className="mt-4 text-lg text-slate-600">
              Every project is unique. Contact us to discuss your specific requirements and get a tailored solution.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="bg-red-600 text-white px-8 py-3.5 rounded-md text-base font-semibold hover:bg-red-700 transition-colors inline-block"
              >
                Get a Free Sourcing Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}