import {
  Search,
  ShieldCheck,
  PackageCheck,
  HandshakeIcon,
  Factory,
  ClipboardCheck,
  Ship,
} from 'lucide-react'

const SERVICES = [
  {
    icon: Search,
    title: 'Supplier search',
    desc: 'We identify and shortlist qualified manufacturers from our vetted network plus targeted research on B2B platforms and trade shows.',
  },
  {
    icon: ShieldCheck,
    title: 'Factory verification',
    desc: 'We visit the factory in person, check business licenses, production capacity, certifications and workshop conditions.',
  },
  {
    icon: PackageCheck,
    title: 'Sample management',
    desc: 'We collect, consolidate and ship samples to you, document specs and align production samples with your golden sample.',
  },
  {
    icon: HandshakeIcon,
    title: 'Price negotiation',
    desc: 'Bilingual negotiation on unit price, MOQ, payment terms and lead time, with full transparency on supplier quotes.',
  },
  {
    icon: Factory,
    title: 'Production follow-up',
    desc: 'Weekly production updates, material checks, schedule tracking and risk alerts so you stay informed without flying in.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality inspection',
    desc: 'On-site QC at pre-production, during-production and pre-shipment with AQL sampling and photo/video reports.',
  },
  {
    icon: Ship,
    title: 'Shipping & logistics',
    desc: 'Booking sea/air/rail freight, customs documentation, consolidation and DDP options to your warehouse.',
  },
]

export default function ServicesGrid() {
  return (
    <section className="border-b border-slate-200 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wider text-blue-700">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            One sourcing partner. End-to-end coverage.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-700 md:text-lg">
            From the first supplier shortlist to the container leaving the port,
            we manage the work that usually requires multiple vendors and a lot
            of frustrating back-and-forth.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SERVICES.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-slate-300 hover:shadow-md"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-blue-50 text-blue-700">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
