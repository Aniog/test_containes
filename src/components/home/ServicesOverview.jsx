import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import SectionHeader from "../shared/SectionHeader"
import Icon from "../shared/Icon"
import { services } from "../../data/siteData"

export default function ServicesOverview() {
  const items = services.slice(0, 6)
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Services"
            title="End-to-end sourcing services"
            description="From identifying the right factory to delivering the finished container to your port, we handle the full sourcing cycle in China."
          />
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent hover:text-brand-accent-dark"
          >
            View all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => (
            <article
              key={s.id}
              className="group flex flex-col rounded-xl border border-brand-line bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-accent/40 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent">
                <Icon name={s.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-brand-ink">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-body">
                {s.description}
              </p>
              <Link
                to="/services"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent group-hover:text-brand-accent-dark"
              >
                Learn more
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
