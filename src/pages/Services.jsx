import { Link } from 'react-router-dom'
import { Search, ShieldCheck, ClipboardCheck, Eye, Truck, Package, FileText, Handshake, Globe, ArrowRight, CheckCircle } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing & Vetting',
    description: 'We identify suppliers that match your product specifications, target price, and quality requirements. Our database of 500+ verified factories covers electronics, home goods, industrial equipment, apparel, and more.',
    features: ['Product & price matching', 'Supplier shortlisting', 'MOQ negotiation', 'Competitive bidding'],
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification & Audits',
    description: 'Before you commit to any supplier, we visit the factory in person. We verify business licenses, assess production capacity, check certifications, and evaluate management quality.',
    features: ['On-site factory visits', 'Business license verification', 'Production capability assessment', 'Certification checks'],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Our QC team inspects products at every stage of production. We catch defects early, ensure specifications are met, and provide detailed inspection reports with photos.',
    features: ['Pre-production inspection', 'In-line quality checks', 'Pre-shipment inspection', 'Detailed photo reports'],
  },
  {
    icon: Eye,
    title: 'Production Monitoring',
    description: 'We keep a close eye on your orders throughout the manufacturing process. Regular factory visits, milestone updates, and proactive communication keep you informed and in control.',
    features: ['Weekly progress reports', 'Photo & video updates', 'Timeline tracking', 'Delay alerts'],
  },
  {
    icon: Package,
    title: 'Custom Packaging & Labeling',
    description: 'We design and produce custom packaging that matches your brand requirements, including retail-ready packaging, branded boxes, inserts, and barcode labeling.',
    features: ['Brand packaging design', 'Retail-ready packaging', 'Barcode & labeling', 'Gift box production'],
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    description: 'From factory to your door, we coordinate the entire logistics chain. We handle freight booking, export documentation, customs clearance, and delivery tracking.',
    features: ['Sea & air freight', 'Export documentation', 'Customs clearance', 'Door-to-door delivery'],
  },
  {
    icon: FileText,
    title: 'Sample Management',
    description: 'We arrange, receive, and evaluate product samples on your behalf. This saves you time and ensures samples meet your exact specifications before production begins.',
    features: ['Sample ordering', 'Quality evaluation', 'Specification refinement', 'Cost-effective sampling'],
  },
  {
    icon: Handshake,
    title: 'Contract Negotiation',
    description: 'We negotiate pricing, payment terms, delivery schedules, and quality standards with suppliers. Our local presence and language skills give you a stronger negotiating position.',
    features: ['Price negotiation', 'Payment term structuring', 'Quality clauses', 'Delivery guarantees'],
  },
]

export default function Services() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-primary-dark to-primary py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest">Our Services</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-heading font-extrabold text-white">
            Complete Sourcing Solutions
          </h1>
          <p className="mt-5 text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Everything you need to source products from China with confidence. One partner, full transparency, from quote to delivery.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div key={service.title} className="bg-surface-alt rounded-xl border border-border p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-text">{service.title}</h3>
                    </div>
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed mb-5">{service.description}</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-text text-sm">
                        <CheckCircle className="w-4 h-4 text-success shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-surface-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-text mb-4">
            Need a Custom Sourcing Solution?
          </h2>
          <p className="text-text-muted mb-8 max-w-xl mx-auto">
            Every business is different. Tell us about your specific needs and we will build a sourcing plan that works for you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold text-base px-7 py-3.5 rounded-lg transition-colors"
          >
            Get Started <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
