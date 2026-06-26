import { Link } from 'react-router-dom'
import { ArrowRight, Search, Factory, ClipboardCheck, BarChart3, Truck, Package, Shield, CheckCircle } from 'lucide-react'

const serviceDetails = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing & Matching',
    subtitle: 'Find the right manufacturer for your product',
    desc: 'We leverage our extensive database of 3,000+ audited factories and deep industry networks to identify manufacturers that match your exact specifications. We don\'t just search Alibaba — we conduct thorough due diligence on every candidate.',
    features: [
      'Detailed supplier shortlist (3–5 vetted options)',
      'Factory profile reports with production capacity data',
      'Initial pricing and MOQ negotiation',
      'Communication bridge between you and supplier',
      'Ongoing relationship management',
    ],
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification & Audits',
    subtitle: 'Know who you\'re working with before you commit',
    desc: 'Our on-site factory audits go beyond paperwork. We physically visit every facility to verify production lines, quality management systems, worker conditions, certifications, and export capabilities. We provide detailed photo and video documentation.',
    features: [
      'On-site factory visit and physical inspection',
      'Verification of business licenses and export permits',
      'Quality management system assessment (ISO, BSCI, etc.)',
      'Production capacity and equipment audit',
      'Social compliance and workplace safety review',
    ],
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    subtitle: 'Catch defects before they reach your customers',
    desc: 'Our QC team follows AQL (Acceptable Quality Level) standards to inspect your products at every critical stage. We use calibrated testing equipment and provide detailed inspection reports with photos, measurements, and pass/fail data.',
    features: [
      'Pre-production inspection (raw materials check)',
      'During production inspection (DPI) at 20–30% completion',
      'Pre-shipment inspection (PSI) at 80–100% completion',
      'Container loading supervision (CLS)',
      'Full inspection reports with photos and data',
    ],
  },
  {
    id: 'production-followup',
    icon: BarChart3,
    title: 'Production Follow-up & Management',
    subtitle: 'Stay informed at every stage of production',
    desc: 'We provide weekly progress reports with photos, videos, and timeline updates so you always know exactly where your order stands. If issues arise, we address them immediately with the factory — before they impact your delivery.',
    features: [
      'Weekly production status reports',
      'Photo and video documentation of production',
      'Timeline tracking and milestone management',
      'Issue identification and resolution',
      'Production schedule optimization',
    ],
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping & Logistics Coordination',
    subtitle: 'From factory floor to your warehouse door',
    desc: 'We manage all logistics including freight forwarding, customs documentation, cargo insurance, and delivery coordination. We work with major carriers to find the best balance of speed and cost for your shipment.',
    features: [
      'Freight forwarding (sea, air, rail, express)',
      'Customs documentation and export clearance',
      'Cargo insurance arrangement',
      'Consolidation and deconsolidation services',
      'Door-to-door delivery tracking',
    ],
  },
  {
    id: 'product-development',
    icon: Package,
    title: 'Product Development & OEM/ODM',
    subtitle: 'Turn your concept into a market-ready product',
    desc: 'From napkin sketch to finished product, we guide you through the entire development process. Our team assists with design review, prototyping, tooling management, sampling, packaging design, and regulatory compliance.',
    features: [
      'Design review and DFM (Design for Manufacturing)',
      'Prototyping and 3D printing coordination',
      'Tooling and mold management',
      'Sampling, testing, and iteration',
      'Packaging design and compliance labeling',
    ],
  },
]

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="section-container">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Services</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-3 mb-4">
              Professional China Sourcing Services
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Comprehensive sourcing solutions covering every stage of your supply chain — 
              from supplier discovery to final delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 md:py-28">
        <div className="section-container">
          <div className="space-y-20">
            {serviceDetails.map((service, i) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">{service.title}</h2>
                  <p className="text-lg text-accent font-medium mb-4">{service.subtitle}</p>
                  <p className="text-text-muted leading-relaxed mb-6">{service.desc}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-surface-alt rounded-2xl p-8 md:p-12 flex items-center justify-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="text-center">
                    <service.icon className="w-20 h-20 text-primary/20 mx-auto" />
                    <p className="text-text-muted text-sm mt-4">Professional {service.title.toLowerCase()} service</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-surface-alt">
        <div className="section-container text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Sourcing?</h2>
          <p className="text-text-muted mb-8">
            Tell us about your product and requirements. We'll provide a tailored sourcing plan and cost estimate.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}