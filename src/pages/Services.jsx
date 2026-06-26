import { Link } from 'react-router-dom'
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  Wrench,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right factory, not just any factory.',
    description:
      'We start by understanding your product, quality standards, target price, and volume. Our team then researches and shortlists 3-5 qualified manufacturers from our network and public databases. Each candidate is scored on capability, capacity, certifications, and export experience.',
    features: [
      'Product and category research',
      'Supplier shortlisting with scoring',
      'Initial quotation comparison',
      'Bilingual negotiation support',
      'MOQ and terms optimization',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    subtitle: 'Know who you are working with before you pay.',
    description:
      'We conduct on-site audits and remote verification to confirm that a factory is legitimate, capable, and financially stable. Our reports include photos, license checks, production line reviews, and reference checks with other buyers.',
    features: [
      'Business license and registration verification',
      'On-site factory audit with photos',
      'Production capacity assessment',
      'Social compliance screening',
      'Reference checks with past clients',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch problems before they become your problems.',
    description:
      'We perform inspections at every critical stage: pre-production, during production, pre-shipment, and container loading. Reports include photo evidence, measurements, and pass/fail conclusions based on internationally accepted AQL standards.',
    features: [
      'Pre-production material checks',
      'In-process (DUPRO) inspections',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
      'Detailed photo and video reports',
    ],
  },
  {
    icon: Factory,
    title: 'Production Monitoring',
    subtitle: 'Stay informed while your order is in progress.',
    description:
      'Once production begins, we track progress against agreed milestones. Our project managers visit or contact the factory regularly, report updates weekly, and escalate issues immediately so delays are caught early and resolved fast.',
    features: [
      'Weekly progress reports',
      'Milestone tracking against PO schedule',
      'Issue identification and escalation',
      'Change order coordination',
      'Final packing and labeling checks',
    ],
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    subtitle: 'From factory floor to your warehouse door.',
    description:
      'We coordinate with freight forwarders, prepare export documentation, and manage customs clearance workflows. Whether you need FCL, LCL, or air freight, we ensure your goods move smoothly and arrive on time.',
    features: [
      'Freight forwarding arrangement',
      'Export documentation preparation',
      'Customs clearance support',
      'Amazon FBA and 3PL delivery',
      'Cargo insurance coordination',
    ],
  },
  {
    icon: Wrench,
    title: 'Custom Product Development',
    subtitle: 'Turn your idea into a mass-market product.',
    description:
      'From concept sketches to finished goods, we manage the full OEM/ODM development cycle. We help with prototyping, tooling, material selection, sampling iterations, and pilot production runs.',
    features: [
      'Prototype and sample management',
      'Tooling and mold sourcing',
      'Material and component selection',
      'Design for manufacturing (DFM) feedback',
      'Pilot run and mass production handover',
    ],
  },
]

export default function Services() {
  return (
    <div>
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Our Services</h1>
            <p className="text-white/80 text-lg leading-relaxed">
              End-to-end sourcing support designed to reduce risk, save time, and lower your total cost of procurement from China.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container space-y-16 md:space-y-24">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center ${
                i % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                <div className="w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center mb-5">
                  <s.icon className="w-7 h-7 text-teal" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-2">{s.title}</h2>
                <p className="text-teal font-medium mb-4">{s.subtitle}</p>
                <p className="text-text-muted leading-relaxed mb-6">{s.description}</p>
                <ul className="space-y-2.5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-text-muted">
                      <CheckCircle2 className="w-4 h-4 text-teal mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                <div
                  className="aspect-[4/3] rounded-xl bg-surface-alt border border-border"
                  data-strk-bg-id={`service-bg-${i}`}
                  data-strk-bg={`[service-title-${i}]`}
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width="800"
                >
                  <span id={`service-title-${i}`} className="sr-only">
                    {s.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-teal text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Every business is different. Tell us about your product and goals, and we will recommend the right mix of services.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3.5 text-base font-bold text-teal hover:bg-white/90 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
