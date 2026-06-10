import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Search, ShieldCheck, ClipboardCheck, Eye, Ship, FileText, ArrowRight } from 'lucide-react'

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer for your product',
    description: "We search across China\u2019s manufacturing hubs to identify suppliers that match your exact requirements \u2014 product specifications, certifications, MOQ, pricing, and production capacity.",
    features: [
      'Multi-supplier comparison with detailed quotes',
      'Sample coordination and evaluation',
      'Background checks on business licenses',
      'Trade show and market visits on your behalf',
    ],
  },
  {
    id: 'factory-verification',
    icon: ShieldCheck,
    title: 'Factory Verification',
    subtitle: 'Confirm your supplier is legitimate and capable',
    description: 'Before you commit to a supplier, our team visits the factory to verify their production capabilities, quality systems, certifications, and business legitimacy.',
    features: [
      'On-site factory audit with photo report',
      'Production capacity assessment',
      'Certification and license verification',
      'Worker conditions and compliance check',
    ],
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Protect your order with professional QC',
    description: 'Our trained inspectors check your goods during production and before shipment using international AQL standards. We catch defects before they leave China.',
    features: [
      'During Production Inspection (DPI)',
      'Pre-Shipment Inspection (PSI)',
      'Container Loading Supervision (CLS)',
      'Detailed defect reports with photos',
    ],
  },
  {
    id: 'production-followup',
    icon: Eye,
    title: 'Production Follow-up',
    subtitle: 'Stay informed throughout manufacturing',
    description: 'We visit the factory regularly during production to monitor progress, check timelines, and ensure your order stays on track. You receive weekly updates with photos.',
    features: [
      'Weekly progress reports with photos',
      'Timeline monitoring and delay alerts',
      'Material and component verification',
      'Direct communication with factory floor',
    ],
  },
  {
    id: 'shipping-coordination',
    icon: Ship,
    title: 'Shipping & Logistics',
    subtitle: 'From factory door to your warehouse',
    description: 'We coordinate the entire logistics chain — booking freight, preparing export documents, arranging customs clearance, and tracking your shipment to destination.',
    features: [
      'Sea freight, air freight, and express options',
      'Export documentation and customs support',
      'Consolidation for multi-supplier orders',
      'Real-time shipment tracking',
    ],
  },
  {
    id: 'negotiation',
    icon: FileText,
    title: 'Negotiation & Contracts',
    subtitle: 'Get the best deal with local expertise',
    description: 'Our bilingual team negotiates pricing, payment terms, warranties, and contracts in Chinese — ensuring you get competitive rates and proper legal protection.',
    features: [
      'Price benchmarking across suppliers',
      'Payment term negotiation',
      'Contract review and translation',
      'Dispute resolution support',
    ],
  },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 id="services-page-title" className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Our Sourcing Services
            </h1>
            <p id="services-page-subtitle" className="text-white/70 text-lg leading-relaxed">
              Comprehensive China sourcing support — from finding suppliers to delivering goods at your door. Choose individual services or a full end-to-end package.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, idx) => {
              const Icon = service.icon
              const isEven = idx % 2 === 0
              return (
                <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                    <div className="aspect-[4/3] rounded-xl overflow-hidden">
                      <img
                        data-strk-img-id={`svc-page-${service.id}-img-x1y2`}
                        data-strk-img={`[svc-page-${service.id}-subtitle] [svc-page-${service.id}-title] [services-page-title]`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h2 id={`svc-page-${service.id}-title`} className="text-2xl md:text-3xl font-bold text-neutral-800 tracking-tight mb-2">
                      {service.title}
                    </h2>
                    <p id={`svc-page-${service.id}-subtitle`} className="text-accent font-medium text-sm mb-4">{service.subtitle}</p>
                    <p className="text-neutral-600 leading-relaxed mb-6">{service.description}</p>
                    <ul className="space-y-2.5">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-sm text-neutral-700">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Start Sourcing?</h2>
          <p className="text-white/70 text-lg mb-8">Tell us what you need and get a free, no-obligation sourcing plan within 24 hours.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
