import SectionHeader from '@/components/SectionHeader'
import { Search, Building2, ClipboardCheck, Factory, Ship, FileCheck, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    items: [
      'Market research and supplier identification',
      'Capability assessment and shortlisting',
      'Price benchmarking and RFQ management',
      'Initial negotiation and sample coordination',
    ],
  },
  {
    icon: Building2,
    title: 'Factory Verification',
    items: [
      'On-site factory audits (social & technical)',
      'License and certification verification',
      'Production capacity assessment',
      'Risk rating and compliance checks',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    items: [
      'Pre-production material checks',
      'In-process / in-line inspections',
      'Pre-shipment inspection (PSI) per AQL',
      'Detailed photo and video reports',
    ],
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    items: [
      'Weekly progress reports with photos',
      'Timeline and milestone tracking',
      'On-site supervision for critical orders',
      'Deviation and issue escalation',
    ],
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    items: [
      'Freight forwarder selection and booking',
      'Export documentation preparation',
      'Customs clearance support',
      'Delivery tracking and handover',
    ],
  },
  {
    icon: FileCheck,
    title: 'Contract & Negotiation',
    items: [
      'Price and payment term negotiation',
      'Contract and NDA review support',
      'IP and trademark protection advice',
      'Dispute mediation with suppliers',
    ],
  },
]

export default function Services() {
  return (
    <div>
      <div className="bg-bg-alt py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            caption="Services"
            title="End-to-End Sourcing Services"
            subtitle="We manage your entire China supply chain so you can focus on growing your business."
          />
        </div>
      </div>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((s) => (
              <div key={s.title} className="p-6 lg:p-8 rounded-xl border border-border bg-bg hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-4">{s.title}</h3>
                <ul className="space-y-2.5">
                  {s.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Not sure which services you need?
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            Book a free 20-minute consultation. We will assess your situation and recommend the right service package.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-secondary text-white text-base font-semibold hover:bg-secondary-hover transition-colors"
          >
            Book Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
