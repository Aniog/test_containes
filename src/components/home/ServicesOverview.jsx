import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import Section, { SectionHeader } from "@/components/shared/Section.jsx"
import IconByName from "@/components/shared/IconByName.jsx"
import { services } from "@/data/services.js"

export default function ServicesOverview() {
  return (
    <Section id="services">
      <SectionHeader
        eyebrow="What we do"
        title="End-to-end China sourcing, run by people on the ground"
        description="From finding the right factory to inspecting the last carton before it leaves the warehouse, we run the parts of the job that are hard to do from overseas."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {services.slice(0, 6).map((service) => (
          <article key={service.id} id={service.id} className="card p-6 md:p-7 flex flex-col h-full">
            <div className="icon-tile mb-4">
              <IconByName name={service.iconKey} className="w-5 h-5" />
            </div>
            <h3 className="h-card">{service.title}</h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed flex-1">
              {service.summary}
            </p>
            <Link
              to={`/services#${service.id}`}
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-800 hover:text-brand-900"
            >
              Learn more <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </article>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link to="/services" className="btn-secondary">
          See all 9 services
          <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </Section>
  )
}
