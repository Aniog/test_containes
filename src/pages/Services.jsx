import { Link } from 'react-router-dom'
import { ArrowRight, Search, Shield, ClipboardCheck, Package, Truck, BarChart3, FileCheck, Users, Globe2 } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const services = [
  {
    id: 'sourcing',
    icon: Search,
    title: 'Supplier Sourcing & Matching',
    description: 'We search our verified network and industry contacts to find suppliers that match your exact specifications, quality requirements, and budget.',
    details: [
      'Product specification analysis and sourcing strategy',
      'Supplier identification from our 2,000+ verified factory network',
      'Initial capability assessment and shortlisting',
      'Competitive pricing comparison from multiple suppliers',
      'Supplier background and credit checks',
    ],
  },
  {
    id: 'verification',
    icon: Shield,
    title: 'Factory Verification & Audit',
    description: 'Our team conducts thorough on-site factory audits to ensure your suppliers are legitimate, capable, and compliant with international standards.',
    details: [
      'Business license and registration verification',
      'Production capacity and equipment assessment',
      'Quality management system review (ISO 9001, etc.)',
      'Worker conditions and compliance check',
      'Raw material sourcing and storage evaluation',
      'Detailed audit report with photos and scoring',
    ],
  },
  {
    id: 'inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection & Testing',
    description: 'We perform multi-stage quality inspections using internationally recognized AQL standards to catch defects before shipment.',
    details: [
      'Pre-production sample verification',
      'During production (DUPRO) in-line inspection',
      'Pre-shipment inspection (PSI) using AQL 2.5',
      'Container loading supervision',
      'Third-party lab testing coordination (SGS, Bureau Veritas)',
      'Detailed inspection reports with photos and measurements',
    ],
  },
  {
    id: 'production',
    icon: Package,
    title: 'Production Follow-Up & Management',
    description: 'We stay on top of your orders with regular factory visits, milestone tracking, and proactive problem-solving to keep everything on schedule.',
    details: [
      'Production schedule planning and confirmation',
      'Weekly progress reports with photos',
      'Milestone tracking (mold completion, first samples, mass production)',
      'Issue identification and resolution',
      'Change order management',
      'Final packing and labeling verification',
    ],
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping & Logistics Coordination',
    description: 'We manage the entire shipping process from factory pickup to door delivery, including customs clearance and documentation.',
    details: [
      'FCL and LCL ocean freight booking',
      'Air cargo arrangement for time-sensitive orders',
      'Customs documentation and export declaration',
      'Import clearance assistance',
      'Warehouse coordination and last-mile delivery',
      'Cargo insurance arrangement',
    ],
  },
  {
    id: 'negotiation',
    icon: BarChart3,
    title: 'Cost Negotiation & Optimization',
    description: 'Our local market expertise helps you get competitive pricing, favorable payment terms, and optimized logistics costs.',
    details: [
      'Factory-direct price negotiation',
      'Payment term negotiation (T/T, L/C, trade assurance)',
      'Volume discount optimization',
      'Packaging and shipping cost reduction',
      'Total landed cost analysis and comparison',
    ],
  },
]

const additionalServices = [
  { icon: FileCheck, title: 'Patent & Trademark Guidance', description: 'Help protecting your IP when working with Chinese suppliers.' },
  { icon: Users, title: 'Trade Show Assistance', description: 'On-the-ground support at Canton Fair, Yiwu Fair, and other trade shows.' },
  { icon: Globe2, title: 'Market Intelligence', description: 'Insights on Chinese manufacturing trends, pricing benchmarks, and new suppliers.' },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-neutral-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-primary/20 text-primary-light text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-5">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
              Comprehensive Sourcing Services
            </h1>
            <p className="text-lg text-neutral-300 leading-relaxed">
              From initial supplier identification to final delivery, we provide end-to-end sourcing
              solutions tailored to your business needs. Every service is designed to reduce your
              risk and improve your margins.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${
                  index % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">{service.title}</h2>
                  </div>
                  <p className="text-neutral-500 leading-relaxed mb-6">{service.description}</p>
                  <ul className="flex flex-col gap-2.5">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-neutral-700">
                        <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-neutral-100 rounded-xl overflow-hidden ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    data-strk-img-id={`service-${service.id}-img`}
                    data-strk-img={`[service-${service.id}-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={service.title}
                    className="w-full h-full object-cover"
                    id={`service-${service.id}-title`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Also Available"
            title="Additional Support Services"
            description="Beyond core sourcing, we offer specialized services to support your China operations."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {additionalServices.map((service) => (
              <div key={service.title} className="bg-white rounded-xl p-6 border border-neutral-200 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-neutral-900 mb-2">{service.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Sourcing Solution?</h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Every business is different. Tell us about your needs and we will create a tailored sourcing plan for you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-semibold px-8 py-4 rounded-lg text-base transition-all shadow-lg"
          >
            Request a Custom Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
