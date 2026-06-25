import { Search, ShieldCheck, ClipboardCheck, Factory, Boxes, Ship } from 'lucide-react'

const SERVICES = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We search, shortlist, and contact qualified Chinese manufacturers based on your product specs, target price, and order volume.',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site factory audits to confirm the supplier really exists, owns the workshop, and has the capability to deliver your product.',
  },
  {
    icon: Boxes,
    title: 'Sample Management',
    desc: 'We collect, compare, and ship samples to you, document differences, and negotiate revisions before mass production.',
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    desc: 'Weekly updates on raw materials, work-in-progress, and timeline. We surface delays early so you can plan around them.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'AQL-based pre-shipment inspections with photo and video reports. Stop defective shipments before they leave the factory.',
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics',
    desc: 'Sea, air, and rail freight with trusted forwarders. Door-to-door, customs clearance, and consolidated container loading.',
  },
]

export default function Services() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E63946]">What We Do</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-[#0B2545]">
            End-to-end sourcing, handled by one team in China
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            You stay in your home market and focus on selling. We handle suppliers, factories, quality,
            and shipping on the ground in China &mdash; in clear English, with documented reports.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className="group rounded-xl border border-slate-200 bg-white p-6 lg:p-7 shadow-sm hover:shadow-md hover:border-[#0B2545]/30 transition"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-[#0B2545]/5 text-[#0B2545] group-hover:bg-[#0B2545] group-hover:text-white transition">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg md:text-xl font-semibold text-[#0B2545]">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{service.desc}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
