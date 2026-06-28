import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

function ServiceGrid({ services, compact = false }) {
  const visibleServices = compact ? services.slice(0, 6) : services

  return (
    <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
      {visibleServices.map((service) => (
        <article
          key={service.title}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
        >
          <h3 className="text-2xl font-semibold text-slate-900">{service.title}</h3>
          <p className="mt-3 text-base leading-7 text-slate-600">{service.summary}</p>
          <ul className="mt-6 space-y-3">
            {service.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
      {compact ? (
        <Link
          to="/services"
          className="flex min-h-full flex-col justify-between rounded-2xl border border-blue-200 bg-blue-50 p-6 text-slate-900 shadow-sm md:p-8"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              Full service scope
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-900">
              See how SSourcing China supports sourcing projects end to end
            </h3>
            <p className="mt-3 text-base leading-7 text-slate-700">
              Review supplier sourcing, verification, factory checks, quality inspection, production follow-up, and shipping coordination in more detail.
            </p>
          </div>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
            View all services
            <ArrowRight className="h-4 w-4" />
          </span>
        </Link>
      ) : null}
    </div>
  )
}

export default ServiceGrid
