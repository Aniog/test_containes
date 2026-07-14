import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Factory, Ship, TrendingUp,
  FileText, Handshake, ArrowRight
} from 'lucide-react'

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We search our network and verified databases to identify manufacturers that match your product specifications, quality standards, MOQ requirements, and budget.',
    features: ['Product matching', 'Supplier shortlisting', 'Background checks', 'Capability assessment'],
  },
  {
    id: 'factory-verification',
    icon: ShieldCheck,
    title: 'Factory Verification & Audit',
    desc: 'Our team conducts on-site factory audits to verify production capacity, quality management systems, certifications, working conditions, and business legitimacy.',
    features: ['On-site visits', 'Certification verification', 'Capacity assessment', 'Social compliance'],
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    desc: 'We perform inspections at every stage — initial production, during production, pre-shipment, and container loading — with detailed photo reports.',
    features: ['AQL sampling', 'Defect classification', 'Photo reports', 'Lab testing coordination'],
  },
  {
    id: 'production-followup',
    icon: Factory,
    title: 'Production Monitoring',
    desc: 'Regular factory visits during production to track progress, identify delays early, and ensure your order stays on schedule and within specifications.',
    features: ['Weekly updates', 'Timeline tracking', 'Issue escalation', 'Spec compliance checks'],
  },
  {
    id: 'shipping',
    icon: Ship,
    title: 'Shipping & Logistics',
    desc: 'End-to-end freight coordination including booking, documentation, customs clearance support, and tracking from factory door to your warehouse.',
    features: ['Freight booking', 'Export documentation', 'Customs support', 'Door-to-door tracking'],
  },
  {
    id: 'negotiation',
    icon: TrendingUp,
    title: 'Price Negotiation',
    desc: 'We leverage local market knowledge and supplier relationships to negotiate competitive pricing, payment terms, and favorable contract conditions.',
    features: ['Market price benchmarking', 'Volume discounts', 'Payment term negotiation', 'Contract review'],
  },
  {
    id: 'sample-management',
    icon: FileText,
    title: 'Sample Management',
    desc: 'We coordinate sample production, review samples against your specifications, and manage revisions until you approve for mass production.',
    features: ['Sample coordination', 'Quality review', 'Revision management', 'Approval tracking'],
  },
  {
    id: 'contract-support',
    icon: Handshake,
    title: 'Contract & Payment Support',
    desc: 'We help structure supplier agreements, advise on payment terms, and provide guidance on protecting your interests in cross-border transactions.',
    features: ['Contract templates', 'Payment advice', 'IP protection guidance', 'Dispute support'],
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
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Our Sourcing Services</h1>
          <p className="mt-4 text-gray-200 text-lg max-w-2xl">
            Comprehensive support at every stage of your China sourcing journey — from finding the right supplier to delivering goods at your door.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-card rounded-xl shadow-sm border border-border p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-50 rounded-lg p-3 flex-shrink-0">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-primary">{service.title}</h2>
                    <p className="text-text-secondary text-sm mt-2 leading-relaxed">{service.desc}</p>
                    <ul className="mt-4 grid grid-cols-2 gap-2">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-text-secondary">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl overflow-hidden">
              <img
                data-strk-img-id="services-factory-img-b2c4d6"
                data-strk-img="[services-img1-caption]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Factory audit in progress"
                className="w-full h-48 object-cover"
              />
              <p id="services-img1-caption" className="text-sm text-text-secondary mt-3 text-center">Factory audit and verification visit</p>
            </div>
            <div className="rounded-xl overflow-hidden">
              <img
                data-strk-img-id="services-qc-img-e5f7g8"
                data-strk-img="[services-img2-caption]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Quality inspection"
                className="w-full h-48 object-cover"
              />
              <p id="services-img2-caption" className="text-sm text-text-secondary mt-3 text-center">Quality control inspection with detailed reporting</p>
            </div>
            <div className="rounded-xl overflow-hidden">
              <img
                data-strk-img-id="services-shipping-img-h9i0j1"
                data-strk-img="[services-img3-caption]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Container shipping"
                className="w-full h-48 object-cover"
              />
              <p id="services-img3-caption" className="text-sm text-text-secondary mt-3 text-center">Container loading and shipping coordination</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Need Help Sourcing from China?</h2>
          <p className="mt-4 text-gray-200 text-lg">Tell us about your project and get a tailored service proposal.</p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center mt-8 bg-accent text-white font-semibold px-8 py-4 rounded-lg hover:bg-accent-dark transition-colors no-underline"
          >
            Get a Free Sourcing Quote <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
