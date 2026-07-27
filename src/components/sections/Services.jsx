import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { SERVICES } from "@/data/site"
import SectionHeader from "@/components/ui/SectionHeader"

export default function Services({ limit }) {
  const items = limit ? SERVICES.slice(0, limit) : SERVICES
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What we do"
          title="Sourcing services that cover the full journey"
          description="From finding the right factory to delivering inspected goods, we manage every step so you don't have to build a China team from scratch."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-brand-50 text-brand-700">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{service.summary}</p>
                <ul className="mt-4 space-y-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="mt-1.5 inline-block w-1.5 h-1.5 rounded-full bg-brand-600 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {limit && (
          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800"
            >
              View all services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
