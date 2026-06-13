import { Factory, ListChecks, Search, ShieldCheck, Truck } from 'lucide-react'

const iconMap = {
  'Supplier Sourcing': Search,
  'Factory Verification': Factory,
  'Quality Inspection': ShieldCheck,
  'Production Follow-Up': ListChecks,
  'Shipping Coordination': Truck,
}

const ServiceGrid = ({ services }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {services.map((service) => {
        const Icon = iconMap[service.title] || Search

        return (
          <article
            key={service.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-slate-900">
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
              {service.description}
            </p>
            <ul className="mt-5 space-y-3 text-sm text-slate-700">
              {service.points.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        )
      })}
    </div>
  )
}

export default ServiceGrid
