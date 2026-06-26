import { Link } from 'react-router-dom'
import {
  Search,
  Building2,
  ClipboardCheck,
  Eye,
  Ship,
  FileText,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    short: 'Find the right factory for your product.',
    details: [
      'Market research and supplier database screening',
      'Shortlist 3–5 qualified manufacturers',
      'Initial quotation collection and comparison',
      'MOQ and lead-time negotiation support',
    ],
  },
  {
    icon: Building2,
    title: 'Factory Verification',
    short: 'Confirm credibility before you commit.',
    details: [
      'On-site factory audit with checklist report',
      'Business license and certificate verification',
      'Production line and equipment inspection',
      'Social compliance and working condition review',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    short: 'Catch defects before they ship.',
    details: [
      'Pre-shipment inspection (PSI) per AQL standards',
      'During-production (DUPRO) checks',
      'Container loading supervision (CLS)',
      'Detailed photo report with pass/fail summary',
    ],
  },
  {
    icon: Eye,
    title: 'Production Monitoring',
    short: 'Stay informed at every milestone.',
    details: [
      'Weekly status reports with factory photos',
      'Raw material and component arrival check',
      'Mid-production sample review',
      'Risk alerts for delays or specification drift',
    ],
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    short: 'Door-to-door logistics handled.',
    details: [
      'Freight forwarding by sea, air, or rail',
      'Customs documentation and export clearance',
      'Cargo insurance arrangement',
      'Tracking and delivery confirmation',
    ],
  },
  {
    icon: FileText,
    title: 'Contract & Negotiation',
    short: 'Protect your payment and terms.',
    details: [
      'Price negotiation with cost-breakdown analysis',
      'Contract review and term recommendations',
      'Payment method guidance (T/T, L/C, OA)',
      'Incoterms advice (FOB, CIF, DDP, etc.)',
    ],
  },
]

export default function Services() {
  return (
    <div>
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Our Sourcing Services
          </h1>
          <p className="text-slate-200 max-w-2xl mx-auto">
            A full suite of services designed to help you buy from China with confidence — from first contact to final delivery.
          </p>
        </div>
      </section>

      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-surface rounded-xl border border-border-light p-6 md:p-8 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center">
                    <s.icon className="w-5 h-5 text-primary-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-primary">{s.title}</h3>
                    <p className="text-sm text-text-secondary">{s.short}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {s.details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-text-secondary">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface border-t border-border-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-text-primary mb-4">
            Not sure which service you need?
          </h2>
          <p className="text-text-secondary mb-8">
            Every project is different. Send us your requirements and we will recommend the right service package.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary-accent px-8 py-3.5 text-base font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
