import { Link } from 'react-router-dom'
import { Search, Building2, ClipboardCheck, Factory, Ship, Package, ArrowRight } from 'lucide-react'
import { SERVICES } from '@/data/content'

const iconMap = { Search, Building2, ClipboardCheck, Factory, Ship, Package }

const HomeServices = () => (
  <section className="bg-white">
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-800">Our services</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          One partner from supplier search to final delivery
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
          Use us for the full sourcing process, or only for the steps where you need
          support on the ground in China.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => {
          const Icon = iconMap[service.icon]
          return (
            <Link
              key={service.slug}
              to={`/services#${service.slug}`}
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
                <Icon className="h-6 w-6 text-blue-800" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slate-900 group-hover:text-blue-800">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.short}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-800">
                Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  </section>
)

export default HomeServices
