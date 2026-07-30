import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, Factory, ClipboardCheck, ShieldCheck, Truck, Package,
  ArrowRight, CheckCircle
} from 'lucide-react'

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer for your product',
    desc: 'We research and shortlist verified Chinese manufacturers that match your product specifications, quality requirements, MOQ, and target price. Our network spans Guangdong, Zhejiang, Jiangsu, and other major manufacturing hubs.',
    features: [
      'Product specification analysis',
      'Manufacturer database research',
      'Shortlist of 3–5 qualified suppliers',
      'Initial price and MOQ comparison',
      'Communication facilitation',
    ],
    titleId: 'svc-full-sourcing-title',
    descId: 'svc-full-sourcing-desc',
    imgId: 'svc-full-sourcing-img-a1b2c3',
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification',
    subtitle: 'Know who you\'re buying from before you pay',
    desc: 'We conduct on-site factory audits to verify production capacity, quality management systems, certifications, workforce, and compliance with your standards. You receive a detailed audit report with photos.',
    features: [
      'On-site factory visit',
      'Business license and certification check',
      'Production capacity assessment',
      'Quality management system review',
      'Detailed audit report with photos',
    ],
    titleId: 'svc-full-factory-title',
    descId: 'svc-full-factory-desc',
    imgId: 'svc-full-factory-img-d4e5f6',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch defects before goods leave China',
    desc: 'Our inspectors conduct pre-shipment, in-line, and final random inspections using AQL sampling standards. We check dimensions, functionality, packaging, labeling, and compliance with your specifications.',
    features: [
      'Pre-shipment inspection (PSI)',
      'In-line production inspection',
      'AQL sampling methodology',
      'Defect classification and reporting',
      'Pass/fail recommendation',
    ],
    titleId: 'svc-full-qc-title',
    descId: 'svc-full-qc-desc',
    imgId: 'svc-full-qc-img-g7h8i9',
  },
  {
    id: 'production-followup',
    icon: ShieldCheck,
    title: 'Production Follow-up',
    subtitle: 'Stay in control of your order from start to finish',
    desc: 'We act as your on-the-ground representative during production. We monitor milestones, communicate with the factory, resolve issues early, and send you regular progress updates.',
    features: [
      'Production milestone tracking',
      'Regular status reports',
      'Issue escalation and resolution',
      'Material and component verification',
      'Delivery timeline management',
    ],
    titleId: 'svc-full-prod-title',
    descId: 'svc-full-prod-desc',
    imgId: 'svc-full-prod-img-j1k2l3',
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'From factory gate to your warehouse',
    desc: 'We coordinate with freight forwarders, prepare export documentation, arrange cargo consolidation, and track your shipment from China to your destination. We work with sea, air, and express couriers.',
    features: [
      'Freight forwarder coordination',
      'Export documentation preparation',
      'Cargo consolidation (LCL/FCL)',
      'Customs clearance support',
      'Shipment tracking and updates',
    ],
    titleId: 'svc-full-ship-title',
    descId: 'svc-full-ship-desc',
    imgId: 'svc-full-ship-img-m4n5o6',
  },
  {
    id: 'sample-procurement',
    icon: Package,
    title: 'Sample Procurement',
    subtitle: 'Evaluate before you commit to a full order',
    desc: 'We source product samples from multiple suppliers, inspect them against your specifications, and ship them to you for evaluation. This reduces risk before placing a bulk order.',
    features: [
      'Multi-supplier sample sourcing',
      'Sample inspection and comparison',
      'Consolidated sample shipping',
      'Supplier feedback facilitation',
      'Sample approval documentation',
    ],
    titleId: 'svc-full-sample-title',
    descId: 'svc-full-sample-desc',
    imgId: 'svc-full-sample-img-p7q8r9',
  },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-[#0F2A4A] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-[#C8102E] text-sm font-semibold uppercase tracking-wider">Our Services</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
              China Sourcing Services for Global Buyers
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              We offer a complete range of sourcing and supply chain services to help you import from China with confidence and control.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {services.map((svc, i) => {
              const Icon = svc.icon
              const isEven = i % 2 === 0
              return (
                <div
                  key={svc.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="w-12 h-12 bg-[#C8102E]/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[#C8102E]" />
                    </div>
                    <span className="text-[#C8102E] text-sm font-semibold">{svc.subtitle}</span>
                    <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-[#0F2A4A] mt-1 mb-4">{svc.title}</h2>
                    <p id={svc.descId} className="text-slate-600 leading-relaxed mb-6">{svc.desc}</p>
                    <ul className="flex flex-col gap-2 mb-6">
                      {svc.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-[#C8102E] text-white px-5 py-2.5 rounded-md font-semibold text-sm hover:bg-[#A80D26] transition-colors"
                    >
                      Get a Quote for This Service <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className={`rounded-xl overflow-hidden bg-slate-100 aspect-video ${!isEven ? 'lg:order-1' : ''}`}>
                    <img
                      alt={svc.title}
                      data-strk-img-id={svc.imgId}
                      data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F2A4A] mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-slate-600 mb-8">
            Tell us about your product and sourcing goals. We'll recommend the right combination of services and provide a free quote.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#C8102E] text-white px-7 py-3.5 rounded-md font-semibold hover:bg-[#A80D26] transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
