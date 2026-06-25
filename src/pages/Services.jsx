import { Link } from 'react-router-dom'
import { getPickedImageUrl } from '@/lib/img.js'
import {
  ArrowRight, Search, Factory, ClipboardCheck, Eye,
  Truck, CheckCircle, Package, FileText, Shield
} from 'lucide-react'

const servicesDetail = [
  {
    icon: Search,
    title: 'Supplier Sourcing & Matching',
    subtitle: 'Find the right manufacturing partner',
    desc: 'We leverage our extensive database of pre-vetted Chinese manufacturers to find suppliers that match your exact requirements. Our sourcing process includes market analysis, supplier shortlisting, capability assessment, and negotiation support.',
    features: [
      'Supplier database of 10,000+ factories across 20+ industries',
      'Detailed supplier profiles with production capacity and export history',
      'Price negotiation and terms optimization',
      'Sample coordination and evaluation',
      'Backup supplier identification for risk mitigation',
    ],
    imgId: 'service-sourcing-detail-a1',
    titleId: 'service-detail-title-sourcing',
    descId: 'service-detail-desc-sourcing',
  },
  {
    icon: Factory,
    title: 'Factory Audit & Verification',
    subtitle: 'Know who you're working with',
    desc: 'Our on-site factory audits go beyond paperwork. We physically visit every factory to verify production capabilities, quality management systems, certifications, and working conditions. You receive a comprehensive audit report with photos and ratings.',
    features: [
      'Physical factory inspection by our local audit team',
      'License and certification verification',
      'Production line and equipment assessment',
      'Quality management system evaluation',
      'Labor conditions and social compliance check',
    ],
    imgId: 'service-factory-detail-b2',
    titleId: 'service-detail-title-factory',
    descId: 'service-detail-desc-factory',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    subtitle: 'Ensure your products meet specifications',
    desc: 'Our QC inspectors conduct thorough inspections at every critical stage. We use AQL (Acceptable Quality Level) sampling standards and provide detailed reports with photos within 24 hours of inspection.',
    features: [
      'Incoming material inspection (IMI)',
      'During production inspection (DPI)',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision (CLS)',
      'Detailed photo & video reports with pass/fail criteria',
    ],
    imgId: 'service-qc-detail-c3',
    titleId: 'service-detail-title-qc',
    descId: 'service-detail-desc-qc',
  },
  {
    icon: Eye,
    title: 'Production Monitoring & Follow-up',
    subtitle: 'Keep your orders on track',
    desc: 'Our team makes regular factory visits during production to monitor progress, address issues early, and ensure your timeline stays on schedule. We act as your eyes and ears on the ground.',
    features: [
      'Weekly production status updates',
      'On-site issue resolution',
      'Timeline tracking and delay alerts',
      'Engineering change management',
      'Final production verification before shipment',
    ],
    imgId: 'service-production-detail-d4',
    titleId: 'service-detail-title-production',
    descId: 'service-detail-desc-production',
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics Coordination',
    subtitle: 'From factory to your doorstep',
    desc: 'We coordinate the entire shipping process including freight booking, documentation, customs clearance, and delivery tracking. We work with trusted freight forwarders to get competitive rates.',
    features: [
      'FOB and CIF shipping arrangements',
      'Customs documentation preparation',
      'Freight consolidation for multi-supplier orders',
      'Real-time shipment tracking',
      'Destination country customs clearance assistance',
    ],
    imgId: 'service-shipping-detail-e5',
    titleId: 'service-detail-title-shipping',
    descId: 'service-detail-desc-shipping',
  },
]

function ServiceDetailCard({ service, index }) {
  const isReversed = index % 2 === 1
  const imgUrl = getPickedImageUrl(service.imgId)

  return (
    <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-16 items-center`}>
      <div className="flex-1">
        <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-6">
          <service.icon className="w-7 h-7 text-white" />
        </div>
        <h2 id={service.titleId} className="text-2xl md:text-3xl font-bold text-text-primary mb-3">{service.title}</h2>
        <p className="text-primary font-medium mb-4">{service.subtitle}</p>
        <p id={service.descId} className="text-text-secondary leading-relaxed mb-6">{service.desc}</p>
        <ul className="space-y-3">
          {service.features.map((f, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-text-secondary">{f}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1">
        <div className="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden">
          {imgUrl && (
            <img
              alt={service.title}
              src={imgUrl}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Comprehensive China sourcing services — from supplier discovery to final delivery. We handle every step so you can focus on growing your business.
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {servicesDetail.map((service, i) => (
            <ServiceDetailCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Transparent Pricing</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              We offer flexible pricing models tailored to your sourcing needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'Project-Based', price: 'Custom Quote', desc: 'One-time sourcing project with defined scope and deliverables. Ideal for new buyers testing the China market.', features: ['Supplier shortlisting', 'Factory audit', 'Sample coordination', 'Negotiation support'] },
              { name: 'Percentage of Order', price: '3-8% of Order Value', desc: 'Ongoing sourcing support with fees based on order value. Best for regular buyers with recurring orders.', features: ['All project-based services', 'Production monitoring', 'QC inspections', 'Shipping coordination', 'Priority support'] },
              { name: 'Monthly Retainer', price: 'Starting $1,500/mo', desc: 'Dedicated sourcing team on retainer. Ideal for businesses with continuous sourcing needs and multiple product lines.', features: ['All percentage services', 'Dedicated account manager', 'Weekly progress reports', 'Supplier performance tracking', 'Market intelligence updates'] },
            ].map((plan) => (
              <div key={plan.name} className="bg-white rounded-xl border border-border p-8 flex flex-col">
                <h3 className="text-xl font-semibold text-text-primary mb-2">{plan.name}</h3>
                <div className="text-2xl font-bold text-primary mb-3">{plan.price}</div>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">{plan.desc}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-light transition-colors text-sm w-full"
                >
                  Get a Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            Contact us for a free consultation. We'll assess your needs and recommend the right solution.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-accent-hover transition-colors text-base"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}