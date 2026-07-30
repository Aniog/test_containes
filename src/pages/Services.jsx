import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, Factory, ClipboardCheck, Clock, Truck, Package,
  Tag, ArrowRight, CheckCircle
} from 'lucide-react'

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer for your product',
    desc: 'We research and shortlist verified Chinese manufacturers based on your product specifications, target price, minimum order quantity, and quality requirements. Our team has direct access to factory networks across Guangdong, Zhejiang, Jiangsu, and other major manufacturing hubs.',
    features: [
      'Product specification analysis',
      'Supplier database research',
      '3–5 qualified supplier shortlist',
      'Initial price benchmarking',
      'Communication in Chinese on your behalf',
    ],
    imgId: 'svc-sourcing-img-a1b2c3',
    titleId: 'svc-sourcing-page-title',
    descId: 'svc-sourcing-page-desc',
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification',
    subtitle: 'Know who you are buying from',
    desc: 'Before you commit to an order, we conduct thorough factory audits — either on-site or via video — to verify production capacity, quality management systems, certifications, and business legitimacy. We provide a detailed audit report with photos.',
    features: [
      'Business license and registration check',
      'Production capacity assessment',
      'Quality management system review',
      'Certification verification (ISO, CE, etc.)',
      'Detailed audit report with photos',
    ],
    imgId: 'svc-factory-img-d4e5f6',
    titleId: 'svc-factory-page-title',
    descId: 'svc-factory-page-desc',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch defects before they reach your customers',
    desc: 'Our trained QC inspectors perform pre-shipment inspections, in-line inspections, and container loading checks. We follow AQL sampling standards and provide a full inspection report within 24 hours of the inspection.',
    features: [
      'Pre-shipment inspection (PSI)',
      'During production inspection (DUPRO)',
      'Container loading supervision',
      'AQL sampling standards',
      'Inspection report within 24 hours',
    ],
    imgId: 'svc-qc-img-g7h8i9',
    titleId: 'svc-qc-page-title',
    descId: 'svc-qc-page-desc',
  },
  {
    id: 'production-followup',
    icon: Clock,
    title: 'Production Follow-up',
    subtitle: 'Stay informed without being on the ground',
    desc: 'We act as your eyes and ears in China throughout the production process. Regular updates, milestone tracking, and direct factory communication ensure your order stays on schedule and meets agreed specifications.',
    features: [
      'Weekly production status reports',
      'Milestone tracking and alerts',
      'Direct factory communication',
      'Issue escalation and resolution',
      'Pre-production sample approval',
    ],
    imgId: 'svc-prod-img-j1k2l3',
    titleId: 'svc-prod-page-title',
    descId: 'svc-prod-page-desc',
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'From factory floor to your warehouse',
    desc: 'We coordinate with licensed freight forwarders to arrange sea, air, or express shipping. We handle export documentation, customs declarations, and cargo insurance to ensure your goods arrive on time and in compliance.',
    features: [
      'Freight forwarder coordination',
      'Sea, air, and express options',
      'Export documentation preparation',
      'Cargo insurance arrangement',
      'Shipment tracking and updates',
    ],
    imgId: 'svc-ship-img-m4n5o6',
    titleId: 'svc-ship-page-title',
    descId: 'svc-ship-page-desc',
  },
  {
    id: 'sample-procurement',
    icon: Package,
    title: 'Sample Procurement',
    subtitle: 'Evaluate quality before placing bulk orders',
    desc: 'We source product samples from multiple suppliers, consolidate them into a single shipment, and send them to you for evaluation. This saves time and shipping costs compared to dealing with each factory individually.',
    features: [
      'Multi-supplier sample sourcing',
      'Sample consolidation',
      'Quality pre-check before dispatch',
      'Labeling and packaging review',
      'Feedback relay to factories',
    ],
    imgId: 'svc-sample-img-p7q8r9',
    titleId: 'svc-sample-page-title',
    descId: 'svc-sample-page-desc',
  },
  {
    id: 'private-label',
    icon: Tag,
    title: 'Private Label & OEM',
    subtitle: 'Build your own brand with Chinese manufacturing',
    desc: 'We help brands develop private label products and OEM manufacturing relationships. From product design and mold development to branding, packaging, and compliance — we manage the full development cycle.',
    features: [
      'Product design and development',
      'Mold and tooling coordination',
      'Branding and packaging design',
      'Compliance and certification support',
      'Full production management',
    ],
    imgId: 'svc-oem-img-s1t2u3',
    titleId: 'svc-oem-page-title',
    descId: 'svc-oem-page-desc',
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
      <section className="bg-brand-900 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent-400 mb-3 block">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
              China Sourcing Services for Global Buyers
            </h1>
            <p className="text-brand-200 text-lg leading-relaxed mb-8">
              We provide end-to-end sourcing support — from finding the right supplier to getting your goods delivered. Every service is designed to reduce risk and give you full visibility into your supply chain.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-400 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {services.map((svc, i) => (
              <div
                key={svc.id}
                className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mb-4">
                    <svc.icon className="w-6 h-6 text-brand-700" />
                  </div>
                  <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-brand-900 mb-2">{svc.title}</h2>
                  <p className="text-accent-500 font-medium mb-4">{svc.subtitle}</p>
                  <p id={svc.descId} className="text-neutral-600 leading-relaxed mb-6">{svc.desc}</p>
                  <ul className="flex flex-col gap-2">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-neutral-700">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-2xl overflow-hidden aspect-[4/3] ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    data-strk-img-id={svc.imgId}
                    data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={svc.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-brand-200 text-lg mb-8">
            Tell us about your product and sourcing goals. We'll recommend the right combination of services.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-400 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Talk to Our Team <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
