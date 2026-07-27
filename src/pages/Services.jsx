import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  FileText,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    tagline: 'Find the right factory, faster.',
    description:
      'We leverage our extensive network and database of manufacturers across China to identify suppliers that match your product specifications, quality standards, and budget. Our research includes background checks, export history review, and capability assessment.',
    features: [
      'Database of 500+ pre-qualified suppliers',
      'Shortlist of 3-5 matched factories',
      'Capability and capacity assessment',
      'Export license and certification verification',
      'Initial quotation collection and comparison',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    tagline: 'Know who you are working with.',
    description:
      'Before you place an order, we conduct thorough on-site audits to verify that a factory is legitimate, capable, and compliant. Our verification reports give you the confidence to move forward.',
    features: [
      'On-site factory visit and audit',
      'Business license and registration check',
      'Production line and equipment inspection',
      'Quality management system review',
      'Social compliance and safety assessment',
      'Detailed photo report with findings',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    tagline: 'Catch issues before they become problems.',
    description:
      'Independent quality control at every critical stage of production. Our inspectors follow internationally accepted AQL standards and provide detailed reports with photos so you can make informed decisions.',
    features: [
      'Pre-production material check',
      'During-production (inline) inspection',
      'Pre-shipment inspection (PSI) with AQL sampling',
      'Container loading supervision',
      'Detailed QC report with photos and measurements',
      'Defect classification and recommendation',
    ],
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    tagline: 'Stay on schedule and in control.',
    description:
      'We monitor your production timeline, track key milestones, and communicate directly with factory management to prevent delays and resolve issues before they impact delivery.',
    features: [
      'Weekly production status updates',
      'Milestone tracking and schedule management',
      'Material readiness verification',
      'Issue escalation and resolution support',
      'Factory communication on your behalf',
      'Risk alerts and contingency planning',
    ],
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    tagline: 'From factory floor to your door.',
    description:
      'End-to-end logistics management including freight booking, consolidation, customs documentation preparation, and delivery tracking. We work with trusted freight partners to get your goods delivered efficiently.',
    features: [
      'Sea and air freight booking',
      'Cargo consolidation services',
      'Export documentation preparation',
      'Customs clearance support',
      'Delivery tracking and status updates',
      'Insurance coordination',
    ],
  },
  {
    icon: FileText,
    title: 'Order Management',
    tagline: 'Professional administration of every order.',
    description:
      'Comprehensive order administration from the moment you confirm a supplier to final delivery. We handle contracts, payments, amendments, and documentation to keep everything organized.',
    features: [
      'Purchase order review and confirmation',
      'Contract and terms negotiation',
      'Payment term optimization',
      'Invoice and document verification',
      'Order amendment coordination',
      'Record keeping and reporting',
    ],
  },
];

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 bg-brand/20 text-brand text-xs font-semibold uppercase tracking-wide rounded-full mb-4">
            Services
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            End-to-End Sourcing Services
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From finding suppliers to delivering goods, we provide comprehensive
            support at every stage of the sourcing process.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
          {services.map((s, idx) => (
            <div
              key={s.title}
              className={`grid lg:grid-cols-2 gap-10 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="w-14 h-14 bg-light-blue rounded-xl flex items-center justify-center mb-5">
                  <s.icon className="w-7 h-7 text-brand" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-2">
                  {s.title}
                </h2>
                <p className="text-brand font-semibold text-base mb-4">
                  {s.tagline}
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {s.description}
                </p>
                <ul className="space-y-3">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="bg-slate-100 rounded-2xl h-72 md:h-80 flex items-center justify-center">
                  <s.icon className="w-20 h-20 text-slate-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Contact us for a free consultation. We will review your situation and
            recommend the right service package for your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-white font-semibold rounded-lg hover:bg-brand-dark transition-colors"
          >
            Get a Free Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
