import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Search, Factory, ClipboardCheck, ShieldCheck, Truck, Package, ArrowRight, CheckCircle } from 'lucide-react'

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer for your product',
    desc: 'We research and shortlist verified Chinese manufacturers that match your product specifications, quality requirements, and budget. Our sourcing team has access to a wide network of factories across Guangdong, Zhejiang, Jiangsu, and other major manufacturing hubs.',
    features: [
      'Product specification analysis',
      'Factory database research',
      '3–5 qualified supplier shortlist',
      'Supplier profile reports',
      'Price comparison and negotiation',
    ],
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
    imgId: 'svc-sourcing-full-img-a1b2c3',
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification',
    subtitle: 'Know exactly who you are buying from',
    desc: 'Before you commit to a supplier, we conduct on-site factory audits to verify their business license, production capacity, equipment, workforce, and compliance with international standards. We provide a detailed audit report with photos.',
    features: [
      'Business license verification',
      'On-site factory visit',
      'Production capacity assessment',
      'Certification review (ISO, BSCI, etc.)',
      'Detailed audit report with photos',
    ],
    titleId: 'svc-factory-title',
    descId: 'svc-factory-desc',
    imgId: 'svc-factory-full-img-d4e5f6',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch defects before they reach your warehouse',
    desc: 'Our trained QC inspectors conduct pre-shipment inspections, in-line production checks, and container loading supervision. We follow AQL sampling standards and provide a full inspection report within 24 hours.',
    features: [
      'Pre-shipment inspection (PSI)',
      'In-line production inspection',
      'Container loading supervision',
      'AQL sampling standards',
      'Inspection report within 24 hours',
    ],
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    imgId: 'svc-qc-full-img-g7h8i9',
  },
  {
    id: 'production-followup',
    icon: ShieldCheck,
    title: 'Production Follow-up',
    subtitle: 'Stay informed throughout the production cycle',
    desc: 'We act as your eyes and ears on the ground. Our team communicates with the factory in Chinese, monitors production progress, and sends you regular updates. We identify and resolve issues before they cause delays.',
    features: [
      'Regular production status updates',
      'Chinese-language factory communication',
      'Timeline monitoring and alerts',
      'Issue identification and resolution',
      'Photo and video documentation',
    ],
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
    imgId: 'svc-prod-full-img-j1k2l3',
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'Reliable logistics from China to your door',
    desc: 'We coordinate with licensed freight forwarders to arrange sea freight, air freight, or express courier shipments. We handle export documentation, customs clearance support, and keep you updated on shipment status.',
    features: [
      'Sea freight and air freight options',
      'Export documentation preparation',
      'Customs clearance support',
      'Shipment tracking and updates',
      'Consolidation for multiple suppliers',
    ],
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
    imgId: 'svc-ship-full-img-m4n5o6',
  },
  {
    id: 'sample-procurement',
    icon: Package,
    title: 'Sample Procurement',
    subtitle: 'Evaluate quality before placing your order',
    desc: 'We source product samples from multiple suppliers and ship them to you for evaluation. This allows you to compare quality, materials, and workmanship before committing to a full production order.',
    features: [
      'Multi-supplier sample sourcing',
      'Sample quality comparison',
      'International sample shipping',
      'Sample cost negotiation',
      'Feedback relay to factories',
    ],
    titleId: 'svc-sample-title',
    descId: 'svc-sample-desc',
    imgId: 'svc-sample-full-img-p7q8r9',
  },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-brand-gold uppercase tracking-widest mb-3">Our Services</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              China Sourcing Services for Global Buyers
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              We provide end-to-end sourcing support — from finding the right factory to delivering goods to your warehouse.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((svc, i) => {
            const Icon = svc.icon
            const isEven = i % 2 === 0
            return (
              <div
                key={svc.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={!isEven ? 'lg:order-2' : ''}>
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-navy" />
                  </div>
                  <p className="text-sm font-semibold text-brand-red uppercase tracking-widest mb-2">{svc.subtitle}</p>
                  <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-navy mb-4">{svc.title}</h2>
                  <p id={svc.descId} className="text-gray-600 leading-relaxed mb-6">{svc.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-gray-700 text-sm">
                        <CheckCircle className="w-4 h-4 text-brand-red flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
                  >
                    Request This Service <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className={`rounded-xl overflow-hidden bg-gray-100 aspect-video ${!isEven ? 'lg:order-1' : ''}`}>
                  <img
                    data-strk-img-id={svc.imgId}
                    data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={svc.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-site-bg py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-gray-600 mb-8">
            Submit a free inquiry and our team will recommend the right combination of services for your sourcing project.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
