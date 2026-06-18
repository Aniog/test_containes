import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Search, Factory, ClipboardCheck, ShieldCheck, Truck, Globe, ArrowRight, CheckCircle } from 'lucide-react'

const services = [
  {
    icon: Search,
    id: 'srv-sourcing',
    titleId: 'srv-sourcing-title',
    descId: 'srv-sourcing-desc',
    imgId: 'srv-sourcing-img-a1b2c3',
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer, fast',
    desc: 'We research and shortlist verified manufacturers that match your product specifications, MOQ, quality standards, and target price. Our network spans Guangdong, Zhejiang, Jiangsu, and other major manufacturing hubs.',
    points: [
      'Product specification analysis',
      'Manufacturer database search',
      'Initial supplier screening',
      '3–5 qualified supplier shortlist',
      'Comparative quote analysis',
    ],
    tag: 'Most Popular',
  },
  {
    icon: Factory,
    id: 'srv-audit',
    titleId: 'srv-audit-title',
    descId: 'srv-audit-desc',
    imgId: 'srv-audit-img-d4e5f6',
    title: 'Factory Verification & Audit',
    subtitle: 'Know who you\'re buying from',
    desc: 'Before you place an order, we visit the factory in person. We verify production capacity, equipment, workforce, certifications, and working conditions — and provide a detailed audit report.',
    points: [
      'On-site factory visit',
      'Production capacity verification',
      'Certification and license check',
      'Sample quality assessment',
      'Detailed audit report with photos',
    ],
    tag: 'Risk Reduction',
  },
  {
    icon: ClipboardCheck,
    id: 'srv-qc',
    titleId: 'srv-qc-title',
    descId: 'srv-qc-desc',
    imgId: 'srv-qc-img-g7h8i9',
    title: 'Quality Inspection',
    subtitle: 'Catch defects before they ship',
    desc: 'Our inspectors conduct pre-shipment, in-line, and final random inspections using internationally recognized AQL standards. We check dimensions, functionality, packaging, and labeling.',
    points: [
      'Pre-shipment inspection (PSI)',
      'In-line production inspection',
      'AQL sampling methodology',
      'Defect classification and reporting',
      'Pass/fail recommendation',
    ],
    tag: 'Quality Assurance',
  },
  {
    icon: ShieldCheck,
    id: 'srv-followup',
    titleId: 'srv-followup-title',
    descId: 'srv-followup-desc',
    imgId: 'srv-followup-img-j1k2l3',
    title: 'Production Follow-up',
    subtitle: 'Stay informed throughout production',
    desc: 'We act as your eyes and ears on the factory floor. From sample approval to final production, we provide regular updates, flag issues early, and ensure your order stays on schedule.',
    points: [
      'Sample approval coordination',
      'Production schedule monitoring',
      'Weekly progress reports',
      'Issue escalation and resolution',
      'Pre-shipment checklist',
    ],
    tag: 'Order Management',
  },
  {
    icon: Truck,
    id: 'srv-shipping',
    titleId: 'srv-shipping-title',
    descId: 'srv-shipping-desc',
    imgId: 'srv-shipping-img-m4n5o6',
    title: 'Shipping & Logistics',
    subtitle: 'From factory to your warehouse',
    desc: 'We coordinate sea freight, air freight, and express courier shipments. We handle export documentation, customs clearance support, and provide real-time tracking until delivery.',
    points: [
      'Sea, air, and express freight',
      'Freight forwarder coordination',
      'Export documentation',
      'Customs clearance support',
      'Shipment tracking and updates',
    ],
    tag: 'Logistics',
  },
  {
    icon: Globe,
    id: 'srv-compliance',
    titleId: 'srv-compliance-title',
    descId: 'srv-compliance-desc',
    imgId: 'srv-compliance-img-p7q8r9',
    title: 'Trade Compliance',
    subtitle: 'Import with confidence',
    desc: 'We advise on product certifications (CE, FCC, RoHS), labeling requirements, import regulations, and tariff classifications for your target market — reducing the risk of customs delays or rejections.',
    points: [
      'Product certification guidance (CE, FCC, RoHS)',
      'Labeling and packaging compliance',
      'HS code classification',
      'Import regulation advisory',
      'Third-party lab testing coordination',
    ],
    tag: 'Compliance',
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
      {/* Hero */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-2 mb-4">
              China Sourcing Services for Global Buyers
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              We provide end-to-end sourcing support — from finding the right supplier to delivering goods to your door.
              Every service is designed to reduce risk and save you time.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((svc, i) => {
              const Icon = svc.icon
              const isEven = i % 2 === 0
              return (
                <div
                  key={svc.id}
                  className={`grid lg:grid-cols-2 gap-10 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-blue-700" />
                      </div>
                      <span className="bg-orange-100 text-orange-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                        {svc.tag}
                      </span>
                    </div>
                    <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                      {svc.title}
                    </h2>
                    <p className="text-blue-700 font-medium mb-4">{svc.subtitle}</p>
                    <p id={svc.descId} className="text-slate-600 leading-relaxed mb-6">{svc.desc}</p>
                    <ul className="space-y-2">
                      {svc.points.map((pt) => (
                        <li key={pt} className="flex items-center gap-2 text-slate-700 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`rounded-2xl overflow-hidden ${isEven ? '' : 'lg:order-1'}`}>
                    <img
                      alt={svc.title}
                      className="w-full h-72 object-cover"
                      data-strk-img-id={svc.imgId}
                      data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Not sure which service you need?</h2>
          <p className="text-blue-200 mb-8">
            Tell us about your project and we'll recommend the right combination of services for your situation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
