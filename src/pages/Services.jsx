import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  ArrowRight, Shield, Search, Eye, Factory, Truck, CheckCircle2,
  FileCheck, ClipboardCheck, Users, Globe, BarChart3, Package,
  MessageSquare, Phone, Mail
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing & Matching',
    desc: 'We identify and vet reliable suppliers across China\'s major manufacturing hubs. Our team matches your product requirements with qualified factories based on capability, capacity, certifications, and pricing.',
    features: [
      'Database of 500+ pre-verified suppliers',
      'Multi-supplier comparison with pricing breakdowns',
      'Capability matching based on your specifications',
      'Initial screening including business license verification',
    ],
  },
  {
    icon: Shield,
    title: 'Factory Verification & Audits',
    desc: 'Our on-site verification team visits factories to confirm legitimacy, production capacity, quality management systems, and compliance with international standards.',
    features: [
      'On-site factory visits with photo/video documentation',
      'Business license and registration verification',
      'Production capacity and equipment assessment',
      'Quality management system evaluation (ISO, BSCI, etc.)',
    ],
  },
  {
    icon: Eye,
    title: 'Quality Inspection',
    desc: 'Comprehensive inspection services at every stage of production to ensure your products meet specifications before shipping.',
    features: [
      'Pre-production sample evaluation',
      'In-line production inspections',
      'Pre-shipment random sampling (AQL standards)',
      'Detailed inspection reports with photos',
    ],
  },
  {
    icon: Factory,
    title: 'Production Monitoring',
    desc: 'We keep your orders on track with regular factory visits, progress reports, and proactive issue resolution throughout the production cycle.',
    features: [
      'Weekly progress reports with photos',
      'Timeline tracking and milestone alerts',
      'Early identification of potential delays',
      'Direct communication with factory management',
    ],
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    desc: 'End-to-end logistics management from factory floor to your warehouse, including freight forwarding, customs clearance, and delivery coordination.',
    features: [
      'Sea freight, air freight, and rail options',
      'Customs documentation and clearance',
      'Container loading supervision',
      'Shipment tracking and status updates',
    ],
  },
  {
    icon: FileCheck,
    title: 'Trade Documentation',
    desc: 'Complete documentation support including commercial contracts, proforma invoices, packing lists, bills of lading, and certificates of origin.',
    features: [
      'Contract drafting and review',
      'Commercial invoice preparation',
      'Certificate of origin applications',
      'Import/export compliance guidance',
    ],
  },
]

const additionalServices = [
  { icon: ClipboardCheck, title: 'Product Development', desc: 'From concept to production — prototyping, design optimization, and packaging development.' },
  { icon: Users, title: 'Supplier Negotiation', desc: 'Price negotiation, payment terms, MOQ discussions, and contract terms on your behalf.' },
  { icon: Globe, title: 'Market Intelligence', desc: 'Industry insights, pricing benchmarks, and supplier landscape analysis for your product category.' },
  { icon: Package, title: 'Warehousing & Consolidation', desc: 'Combine orders from multiple suppliers into single shipments to reduce logistics costs.' },
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
      <section className="bg-gradient-to-br from-brand-500 to-brand-900 py-20 md:py-28">
        <div className="container-wide text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Our Sourcing Services
          </h1>
          <p className="text-lg md:text-xl text-brand-100 max-w-2xl mx-auto mb-8">
            Comprehensive sourcing solutions designed to reduce risk, save time, and ensure quality at every stage of your supply chain.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-lg transition-all shadow-lg text-lg"
          >
            Get a Free Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-wide">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-brand-500" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">{service.title}</h2>
                  <p className="text-neutral-600 leading-relaxed mb-6">{service.desc}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-neutral-50 rounded-2xl p-8 border border-neutral-200 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    data-strk-img-id={`service-${service.title.toLowerCase().replace(/[^a-z]/g, '-')}-img`}
                    data-strk-img={`[${service.title.toLowerCase().replace(/[^a-z]/g, '-')}-section-title] china sourcing manufacturing quality inspection`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={service.title}
                    className="w-full h-auto rounded-xl shadow-md"
                  />
                  <span id={`${service.title.toLowerCase().replace(/[^a-z]/g, '-')}-section-title`} className="sr-only">{service.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Additional Capabilities
            </h2>
            <p className="text-lg text-neutral-600">
              Beyond core sourcing, we offer specialized services to support your entire supply chain.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {additionalServices.map((service) => (
              <div key={service.title} className="bg-white rounded-xl p-8 border border-neutral-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-accent-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">{service.title}</h3>
                    <p className="text-neutral-600">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-brand-500">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need a Custom Sourcing Solution?
          </h2>
          <p className="text-lg text-brand-100 max-w-2xl mx-auto mb-8">
            Every business is different. Tell us your specific requirements and we will build a sourcing plan tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-500 font-bold rounded-lg hover:bg-neutral-100 transition-all shadow-lg text-lg"
            >
              Request Custom Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="mailto:info@ssourcingchina.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all text-lg"
            >
              <Mail className="w-5 h-5" /> Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
