import { Link } from 'react-router-dom'
import { ArrowRight, BadgeCheck, Building2, ClipboardCheck, PackageSearch, SearchCheck, ShipWheel } from 'lucide-react'
import SectionHeading from '@/components/site/SectionHeading'

const iconMap = {
  'supplier-search': SearchCheck,
  verification: BadgeCheck,
  'factory-audit': Building2,
  'quality-control': ClipboardCheck,
  'production-follow-up': PackageSearch,
  'shipping-support': ShipWheel,
}

export default function ServiceGrid({ items, compact = false }) {
  return (
    <section className={compact ? 'py-16 md:py-20' : 'bg-white py-16 md:py-24'}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Sourcing support designed for overseas buyers working with China"
          description="Choose support for supplier search, verification, QC, production follow-up, and shipment readiness based on what your buying project needs."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = iconMap[item.slug] || SearchCheck

            return (
              <article key={item.slug} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  {item.summary}
                </p>
                <ul className="mt-5 space-y-3 text-sm text-slate-700">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-blue-700" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-800"
                >
                  Request support
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
