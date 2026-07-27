import SectionHeading from '@/components/ui/SectionHeading'
import { services } from '@/data/site'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HomeServices() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <SectionHeading
          eyebrow="What We Do"
          title="Sourcing services that cover the full order lifecycle"
          description="From finding the right factory to delivering goods at your door, each service is handled by a dedicated team on the ground in China."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.id}
                className="group rounded-xl border border-slate-200 bg-white p-6 md:p-7 shadow-sm transition-all hover:border-brand-blue/40 hover:shadow-md"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-slate text-brand-blue">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-brand-ink">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                  {s.desc}
                </p>
                <ul className="mt-4 space-y-2">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2 text-sm text-brand-ink"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-amber" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-blue-600"
          >
            Explore all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
