import SectionHeader from '../SectionHeader'
import { Search, Building2, ClipboardCheck, Factory, Ship, FileCheck } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist reliable manufacturers that match your product specifications, pricing targets, and capacity requirements.',
  },
  {
    icon: Building2,
    title: 'Factory Verification',
    desc: 'On-site audits to confirm factory credentials, production capabilities, certifications, and legal compliance before you commit.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment and in-line inspections to catch defects early. We follow AQL standards and provide detailed photo reports.',
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    desc: 'Regular factory visits and progress reports to ensure timelines are met, materials are correct, and standards are maintained.',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    desc: 'We handle logistics from factory to port, manage documentation, and coordinate with freight forwarders for smooth delivery.',
  },
  {
    icon: FileCheck,
    title: 'Contract & Negotiation',
    desc: 'Support with price negotiation, contract review, payment terms, and IP protection to secure your interests.',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          caption="What We Do"
          title="End-to-End China Sourcing Services"
          subtitle="From finding the right factory to delivering goods to your door, we manage every step of your China supply chain."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="group p-6 lg:p-8 rounded-xl border border-border bg-bg hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/10 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">{s.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
