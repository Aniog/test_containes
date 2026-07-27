import { Link } from 'react-router-dom'
import { Search, ClipboardCheck, Eye, PackageCheck, Ship, ArrowRight, CheckCircle } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    summary: 'Find the right factory, not just any factory.',
    description: 'We start every project by understanding your product, budget, and volume. Then we map the Chinese manufacturing landscape to identify 3-5 suppliers that match your exact requirements. We look at production capacity, export experience, certifications, and existing client portfolios — so you only talk to factories worth your time.',
    benefits: ['Market mapping across key manufacturing hubs', 'Pre-qualified supplier shortlists', 'Existing client reference checks', 'Competitive quote comparison'],
  },
  {
    icon: ClipboardCheck,
    title: 'Factory Verification',
    summary: 'Know who you are working with before you pay.',
    description: 'Factory verification is the single most important step in reducing sourcing risk. Our team conducts on-site audits to verify business licenses, export rights, production capabilities, and facility conditions. We document everything with photos and reports so you can make an informed decision.',
    benefits: ['On-site facility audits', 'Business license and export right verification', 'Production capability assessment', 'Detailed audit report with photos'],
  },
  {
    icon: Eye,
    title: 'Quality Control',
    summary: 'Catch defects before they become your problem.',
    description: 'We offer three levels of quality control: pre-production inspections to verify materials and setup, in-line inspections to catch issues during production, and pre-shipment inspections to ensure the final batch meets your standards. Every inspection includes a detailed report with photos and pass/fail criteria.',
    benefits: ['Pre-production, in-line, and pre-shipment inspections', 'AQL-based sampling standards', 'Photo and video documentation', 'Corrective action tracking'],
  },
  {
    icon: PackageCheck,
    title: 'Production Follow-Up',
    summary: 'Stay informed. Stay on schedule.',
    description: 'Once production starts, we do not disappear. Our team provides weekly progress reports, tracks milestones, and visits the factory at critical stages. If delays or issues arise, we catch them early and work with the supplier to get back on track — before small problems become expensive ones.',
    benefits: ['Weekly production reports', 'Milestone tracking and alerts', 'On-site progress checks', 'Issue escalation and resolution'],
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    summary: 'From factory floor to your warehouse.',
    description: 'Shipping is where many buyers lose control. We manage the entire logistics chain: freight forwarding, booking cargo space, preparing customs documentation, and tracking shipments. We support FOB, CIF, DDP, and other Incoterms, and we help you choose the most cost-effective option for your timeline.',
    benefits: ['Freight forwarding and booking', 'Customs documentation preparation', 'Shipment tracking and updates', 'Incoterm selection guidance'],
  },
]

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary">
        <div className="container-main py-16 md:py-24">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-slate-300">Services</span>
            <h1 className="mt-3 text-4xl font-extrabold text-white md:text-5xl">
              End-to-End Sourcing Services
            </h1>
            <p className="mt-4 text-lg text-slate-200">
              From supplier discovery to delivery at your door, we handle the complex work of sourcing from China so you can focus on your business.
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="section-padding bg-white">
        <div className="container-main flex flex-col gap-20">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`flex flex-col gap-8 ${
                i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }`}
            >
              <div className="flex-1">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary text-white">
                  <s.icon className="h-5 w-5" />
                </div>
                <h2 className="mt-4 text-2xl font-bold md:text-3xl">
                  {s.title}
                </h2>
                <p className="mt-2 text-lg font-medium text-slate-600">
                  {s.summary}
                </p>
                <p className="mt-4 leading-relaxed text-slate-500">
                  {s.description}
                </p>
                <ul className="mt-6 flex flex-col gap-2.5">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <div className="relative h-64 overflow-hidden rounded-lg bg-slate-100 md:h-80" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface">
        <div className="container-main py-16 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">
            Not Sure Which Services You Need?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-500">
            Every business is different. Tell us about your product and goals, and we will recommend the right support package.
          </p>
          <div className="mt-6">
            <Link to="/contact" className="btn-primary gap-2">
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
