import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { SERVICES } from "@/data/content"
import SectionHeading from "@/components/common/SectionHeading"

export default function HomeServices() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What we do"
          title="Sourcing services that cover the full order lifecycle"
          description="From finding the right factory to shipping finished goods, we manage each stage so you can buy from China with confidence."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-brand">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {service.summary}
                </p>
                <Link
                  to="/services"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand transition-colors group-hover:text-accent"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
