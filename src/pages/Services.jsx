import { Link } from 'react-router-dom'
import { Search, ClipboardCheck, PackageCheck, Factory, Ship, FileText, ArrowRight, CheckCircle } from 'lucide-react'
import SectionTitle from '../components/shared/SectionTitle'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We leverage our extensive network and on-the-ground presence to identify suppliers that match your exact requirements. Our team researches manufacturers across Alibaba, industry trade shows, and direct factory relationships.',
    features: [
      'Market research and supplier identification',
      'Capability assessment and pre-qualification',
      'Initial quotation collection and comparison',
      'Shortlist of 3-5 verified suppliers',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Factory Verification & Audits',
    description: 'Before you commit to a supplier, we conduct thorough factory audits to verify their legitimacy, production capacity, and quality systems. Our auditors visit in person and provide detailed reports with photos.',
    features: [
      'On-site factory audit with photo documentation',
      'License and certification verification',
      'Production capacity assessment',
      'Social compliance and workplace evaluation',
    ],
  },
  {
    icon: PackageCheck,
    title: 'Quality Control & Inspection',
    description: 'Quality issues are costly. Our inspectors perform structured inspections at key production stages to catch defects before goods leave the factory. We follow internationally recognized AQL sampling standards.',
    features: [
      'Pre-production sample evaluation',
      'During-production (DUPRO) inspections',
      'Pre-shipment inspection (PSI) per AQL 2.5',
      'Container loading supervision (CLS)',
    ],
  },
  {
    icon: Factory,
    title: 'Production Follow-Up',
    description: 'Stay informed throughout the manufacturing process. We provide regular updates, manage sample approvals, and troubleshoot issues before they become costly delays.',
    features: [
      'Weekly production status reports',
      'Sample approval coordination',
      'Timeline tracking and delay mitigation',
      'Factory communication on your behalf',
    ],
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics Coordination',
    description: 'From factory gate to your warehouse door, we manage the entire logistics chain. We work with reliable freight forwarders and ensure all documentation is accurate and complete.',
    features: [
      'Freight forwarding (sea, air, rail)',
      'Export documentation preparation',
      'Customs clearance support',
      'Delivery tracking and coordination',
    ],
  },
  {
    icon: FileText,
    title: 'Contract & Negotiation Support',
    description: 'We negotiate pricing, payment terms, and delivery schedules on your behalf. Our bilingual team ensures contracts are clear, enforceable, and protect your interests.',
    features: [
      'Price and MOQ negotiation',
      'Payment term structuring (T/T, L/C)',
      'Purchase agreement drafting',
      'Intellectual property protection advice',
    ],
  },
]

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-4">
            Our Sourcing Services
          </h1>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            End-to-end sourcing support tailored to your business needs. Choose individual services or a full-service package.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-12">
            {services.map((service, index) => (
              <div key={service.title} className="flex gap-5">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <service.icon className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">{service.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-text-secondary">
                        <CheckCircle className="w-4 h-4 text-success shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
            Not Sure Which Services You Need?
          </h2>
          <p className="text-text-secondary mb-8">
            Book a free consultation and we'll recommend the right service package based on your sourcing goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-accent-hover transition-colors shadow-lg"
          >
            Get a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
