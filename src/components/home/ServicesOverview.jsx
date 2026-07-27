import { Link } from "react-router-dom"
import {
  Search,
  Building2,
  ShieldCheck,
  ClipboardList,
  Truck,
  Package,
  ArrowRight,
} from "lucide-react"
import { Section, SectionHeader } from "@/components/ui/Section"
import { services } from "@/data/content"

const iconMap = {
  search: Search,
  building: Building2,
  shield: ShieldCheck,
  clipboard: ClipboardList,
  truck: Truck,
  package: Package,
}

export function ServicesOverview() {
  return (
    <Section bg="white" id="services">
      <SectionHeader
        eyebrow="What we do"
        title="End-to-end sourcing support, not just a list of factories"
        subtitle="Six practical services that cover the journey from your first product idea to the container arriving at your warehouse. Use any one of them, or the full package."
        align="center"
      />
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => {
          const Icon = iconMap[s.icon] || Search
          return (
            <article
              key={s.id}
              id={`svc-${s.id}`}
              className="group card p-6 md:p-7 hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-md bg-navy-50 text-navy-900 group-hover:bg-navy-900 group-hover:text-accent-300 transition-colors">
                <Icon className="w-5 h-5" />
              </div>
              <h3
                id={`svc-${s.id}-title`}
                className="mt-5 text-lg font-semibold text-slate-900"
              >
                {s.title}
              </h3>
              <p
                id={`svc-${s.id}-desc`}
                className="mt-2 text-sm text-slate-600 leading-relaxed"
              >
                {s.summary}
              </p>
              <ul className="mt-4 space-y-1.5 text-sm text-slate-700">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-500 shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/services"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-navy-900 hover:text-accent-600 transition-colors"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </article>
          )
        })}
      </div>
    </Section>
  )
}

export default ServicesOverview
