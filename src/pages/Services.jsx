import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, Factory, ClipboardCheck, Zap, Truck, MessageSquare,
  CheckCircle, ArrowRight
} from 'lucide-react'

const services = [
  {
    id: 'sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer for your product',
    desc: 'We research and shortlist verified Chinese manufacturers that match your product specifications, target price, MOQ, and delivery requirements. Our sourcing process draws on an established network of factories across Guangdong, Zhejiang, Fujian, and other key manufacturing regions.',
    features: [
      'Product specification analysis',
      'Multi-source supplier research',
      'Supplier background checks',
      'Shortlist with detailed profiles',
      'Price and MOQ comparison',
    ],
    imgId: 'svc-sourcing-img-a1b2c3',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
  },
  {
    id: 'factory',
    icon: Factory,
    title: 'Factory Verification & Audit',
    subtitle: 'Know exactly who you are buying from',
    desc: 'Before you commit to a supplier, we conduct an on-site factory audit to verify production capacity, quality management systems, certifications, working conditions, and business legitimacy. You receive a detailed audit report with photos.',
    features: [
      'Business license verification',
      'Production capacity assessment',
      'Quality management system review',
      'Certification and compliance check',
      'Photographic audit report',
    ],
    imgId: 'svc-factory-img-d4e5f6',
    titleId: 'svc-factory-title',
    descId: 'svc-factory-desc',
  },
  {
    id: 'qc',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch defects before goods leave the factory',
    desc: 'Our inspectors conduct pre-shipment and in-line inspections following AQL (Acceptable Quality Limit) standards. We check dimensions, functionality, appearance, labeling, and packaging against your approved samples and specifications.',
    features: [
      'Pre-shipment inspection (PSI)',
      'During production inspection (DUPRO)',
      'AQL sampling methodology',
      'Detailed inspection report with photos',
      'Pass/fail recommendation',
    ],
    imgId: 'svc-qc-img-g7h8i9',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
  },
  {
    id: 'production',
    icon: Zap,
    title: 'Production Follow-up',
    subtitle: 'Stay informed at every stage of production',
    desc: 'We act as your eyes and ears on the factory floor. Our team provides regular production updates, monitors timelines, and escalates issues before they become costly problems. You always know the status of your order.',
    features: [
      'Production schedule monitoring',
      'Regular status updates',
      'On-site factory visits',
      'Issue escalation and resolution',
      'Delivery timeline management',
    ],
    imgId: 'svc-prod-img-j1k2l3',
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'From factory gate to your warehouse',
    desc: 'We coordinate with licensed freight forwarders for sea and air freight, prepare all required export documentation, and track your shipment from departure to arrival. We work with your customs broker or can recommend one.',
    features: [
      'Sea and air freight coordination',
      'Export documentation preparation',
      'Cargo consolidation (LCL/FCL)',
      'Shipment tracking and updates',
      'Freight forwarder liaison',
    ],
    imgId: 'svc-ship-img-m4n5o6',
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
  },
  {
    id: 'negotiation',
    icon: MessageSquare,
    title: 'Supplier Negotiation',
    subtitle: 'Get better terms with local expertise',
    desc: 'Our Mandarin-speaking team negotiates directly with suppliers on your behalf. We leverage our local knowledge and supplier relationships to secure competitive pricing, favorable payment terms, and realistic lead times.',
    features: [
      'Price negotiation',
      'Payment terms discussion',
      'Lead time optimization',
      'Sample cost reduction',
      'Long-term contract support',
    ],
    imgId: 'svc-neg-img-p7q8r9',
    titleId: 'svc-neg-title',
    descId: 'svc-neg-desc',
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
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-brand-accent font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              China Sourcing Services
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              End-to-end sourcing support for global importers. We handle every step from supplier research to final delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {services.map((svc, i) => (
              <div
                key={svc.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center mb-4">
                    <svc.icon className="w-6 h-6 text-brand-blue" />
                  </div>
                  <span className="text-brand-blue font-semibold text-sm uppercase tracking-wider">{svc.subtitle}</span>
                  <h2 id={svc.titleId} className="font-display text-2xl md:text-3xl font-bold text-brand-navy mt-2 mb-4">
                    {svc.title}
                  </h2>
                  <p id={svc.descId} className="text-gray-700 leading-relaxed mb-6">{svc.desc}</p>
                  <ul className="space-y-2.5 mb-6">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-brand-accent hover:bg-amber-500 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
                  >
                    Get a Quote for This Service <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className={`rounded-2xl overflow-hidden bg-gray-100 aspect-video ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    alt={svc.title}
                    data-strk-img-id={svc.imgId}
                    data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Tell us about your product and sourcing goals. We'll recommend the right combination of services.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-accent hover:bg-amber-500 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
