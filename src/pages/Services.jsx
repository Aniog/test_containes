import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Search,
  ClipboardCheck,
  Factory,
  Eye,
  Truck,
  ShieldCheck,
  FileText,
  Users,
  Globe,
  CheckCircle2,
} from 'lucide-react'

const servicesData = [
  {
    icon: Search,
    title: 'Supplier Sourcing & Matching',
    desc: 'We search our verified supplier network and industry databases to find factories that match your product requirements, quality standards, and budget.',
    details: [
      'Market research and supplier identification',
      'Shortlisting 3-5 qualified suppliers per product',
      'Detailed supplier profiles with capabilities and certifications',
      'Initial pricing comparison and negotiation',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Factory Audits & Verification',
    desc: 'Our team visits factories in person to verify their legitimacy, production capacity, quality systems, and compliance with international standards.',
    details: [
      'Business license and registration verification',
      'On-site facility inspection',
      'Production capacity and equipment assessment',
      'Quality management system review (ISO, BSCI, etc.)',
      'Worker conditions and social compliance check',
    ],
  },
  {
    icon: Eye,
    title: 'Quality Inspection',
    desc: 'We conduct thorough inspections at multiple production stages using internationally recognized AQL sampling standards.',
    details: [
      'Pre-production sample approval',
      'During production (DUPRO) inspections',
      'Pre-shipment random inspections (AQL 2.5)',
      'Loading supervision and container checks',
      'Detailed inspection reports with photos',
    ],
  },
  {
    icon: Factory,
    title: 'Production Monitoring',
    desc: 'We stay in regular contact with your suppliers throughout production, tracking progress and intervening when issues arise.',
    details: [
      'Production timeline tracking',
      'Weekly progress reports with photos',
      'Early warning on delays or quality concerns',
      'Coordination between multiple suppliers',
      'Material and component verification',
    ],
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    desc: 'We coordinate the entire shipping process from factory to your door, including documentation, customs, and freight forwarding.',
    details: [
      'Sea, air, and rail freight booking',
      'Export and import customs documentation',
      'Consolidation and warehousing',
      'Door-to-door delivery coordination',
      'Cargo insurance arrangements',
    ],
  },
  {
    icon: FileText,
    title: 'Sample Management',
    desc: 'We arrange, receive, and evaluate product samples on your behalf, saving you time and ensuring samples meet your specifications.',
    details: [
      'Sample request and follow-up',
      'In-person sample evaluation',
      'Specification comparison and reporting',
      'Sample shipping to your location',
      'Revision coordination with factory',
    ],
  },
]

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-dark py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 block">Our Services</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">End-to-End China Sourcing Services</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            From initial supplier research to final delivery, we provide comprehensive sourcing services tailored to your business needs.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {servicesData.map((service, i) => {
              const Icon = service.icon
              const isEven = i % 2 === 0
              const titleId = `service-${i}-title`
              return (
                <div
                  key={service.title}
                  className="grid lg:grid-cols-2 gap-10 items-start"
                >
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h2 id={titleId} className="text-2xl font-bold text-text-primary">{service.title}</h2>
                    </div>
                    <p className="text-text-secondary leading-relaxed mb-6">{service.desc}</p>
                    <ul className="space-y-3">
                      {service.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                          <span className="text-text-secondary text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`bg-surface-alt rounded-2xl overflow-hidden ${!isEven ? 'lg:order-1' : ''}`}>
                    <img
                      data-strk-img-id={`service-${i}`}
                      data-strk-img={`[${titleId}] China factory operations`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={service.title}
                      className="w-full h-full object-cover min-h-[280px]"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-alt py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Need a Custom Sourcing Solution?</h2>
          <p className="text-text-secondary mb-8">Every business is different. Contact us to discuss your specific sourcing requirements.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
