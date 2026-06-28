import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, Eye, Truck, ClipboardCheck, Globe,
  CheckCircle, ArrowRight, FileText, Package, Users, Scale,
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We search our network of 2,000+ verified suppliers across China to find the best match for your specific product requirements, target pricing, and volume needs.',
    features: [
      'Product requirement analysis',
      'Multi-supplier comparison',
      'Price negotiation',
      'MOQ optimization',
      'Lead time confirmation',
    ],
    imgId: 'service-sourcing-1a2b3c',
    query: 'supplier sourcing factory search',
  },
  {
    icon: ShieldCheck,
    title: 'Supplier Verification',
    desc: 'Every supplier we recommend has been personally audited by our team. We verify business licenses, production capabilities, certifications, and export history on-site.',
    features: [
      'Business license verification',
      'Factory facility inspection',
      'Production capacity assessment',
      'Quality management audit',
      'Export history review',
    ],
    imgId: 'service-verification-4d5e6f',
    query: 'factory audit verification inspection',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control',
    desc: 'Our QC team inspects your products at every critical stage -- from raw materials to finished goods -- ensuring compliance with your specifications and international standards.',
    features: [
      'Pre-production inspection',
      'In-line quality checks',
      'Pre-shipment inspection',
      'Detailed photo reports',
      'Defect classification & corrective action',
    ],
    imgId: 'service-qc-7g8h9i',
    query: 'quality control product inspection check',
  },
  {
    icon: Eye,
    title: 'Production Follow-up',
    desc: 'We maintain regular contact with the factory throughout the production cycle, monitoring milestones and reporting progress so you always know where your order stands.',
    features: [
      'Weekly progress reports',
      'Production timeline tracking',
      'Photo and video updates',
      'Delay early warning system',
      'Order status dashboard',
    ],
    imgId: 'service-production-j1k2l3',
    query: 'production follow up factory monitoring',
  },
  {
    icon: Package,
    title: 'Sample Management',
    desc: 'We arrange product samples, facilitate revisions, and ensure the final prototype exactly matches your specifications before mass production begins.',
    features: [
      'Sample procurement',
      'Specification comparison',
      'Revision coordination',
      'Pre-production sample approval',
      'Golden sample retention',
    ],
    imgId: 'service-samples-m4n5o6',
    query: 'product sample management approval',
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    desc: 'We coordinate the entire logistics chain from factory to your door, including freight forwarding, export documentation, customs clearance, and last-mile delivery.',
    features: [
      'Sea, air, and rail freight',
      'Export & import documentation',
      'Customs clearance assistance',
      'Container loading supervision',
      'Door-to-door tracking',
    ],
    imgId: 'service-shipping-p7q8r9',
    query: 'shipping logistics container freight',
  },
]

const additionalServices = [
  { icon: FileText, title: 'Contract Manufacturing', desc: 'Private label and OEM/ODM production management for branded products.' },
  { icon: Scale, title: 'Trade Compliance', desc: 'Guidance on import regulations, tariffs, and required certifications for your market.' },
  { icon: Users, title: 'Supplier Relationship Management', desc: 'Ongoing supplier performance reviews and relationship maintenance for long-term partnerships.' },
  { icon: Globe, title: 'Market Intelligence', desc: 'Pricing benchmarking, trend analysis, and supplier market insights for strategic sourcing decisions.' },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              End-to-End China Sourcing Services
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              From finding the right supplier to delivering finished goods to your warehouse, we provide complete sourcing solutions tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-16 md:space-y-24">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div key={service.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                    {service.title}
                  </h2>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-text-primary text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-lg overflow-hidden aspect-[4/3] bg-bg-card ${i % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <img
                    data-strk-img-id={service.imgId}
                    data-strk-img={`[${service.title.replace(/\s+/g, '-').toLowerCase()}] ${service.query}`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Additional Capabilities
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Beyond our core services, we offer specialized support to address every aspect of your China sourcing needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalServices.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.title} className="bg-white rounded-lg border border-border p-6 flex gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">{s.title}</h3>
                    <p className="text-text-secondary text-sm">{s.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need a Customized Sourcing Solution?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Every business is unique. Tell us about your specific requirements and we will design a sourcing plan that fits your needs and budget.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-md text-base font-semibold hover:bg-accent-hover transition-colors"
          >
            Discuss Your Requirements
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
