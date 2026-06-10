import { Link } from 'react-router-dom'
import {
  Search,
  BadgeCheck,
  ClipboardCheck,
  LineChart,
  Truck,
  Package,
  ArrowRight,
} from 'lucide-react'
import SectionHeading from '@/components/SectionHeading.jsx'
import { SERVICES } from '@/data/content.js'

const ICONS = {
  search: Search,
  'badge-check': BadgeCheck,
  'clipboard-check': ClipboardCheck,
  'line-chart': LineChart,
  truck: Truck,
  package: Package,
}

export default function HomeServices() {
  return (
    <section className="section-pad bg-white" id="services">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What we do"
            title="A full-service China sourcing partner"
            description="From finding the right factory to getting your goods to your port, we cover every step of the process so you can focus on selling — not chasing suppliers."
          />
          <Link
            to="/services"
            className="hidden text-sm font-semibold text-brand-accent hover:text-brand-accent-dark md:inline-flex md:items-center md:gap-1.5"
          >
            See all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const Icon = ICONS[s.icon] || Search
            return (
              <div
                key={s.id}
                className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-brand-accent/40 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-accent-soft text-brand-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-brand-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.short}</p>
                <Link
                  to="/services"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-ink transition-colors group-hover:text-brand-accent"
                >
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
