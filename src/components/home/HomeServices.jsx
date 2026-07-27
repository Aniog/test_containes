import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { SERVICES } from "@/data/content"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardBody } from "@/components/ui/card"

export function HomeServices() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What we do"
          title="Sourcing services that reduce your risk"
          description="From finding the right factory to delivering inspected goods, we cover every step that matters when importing from China."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <Card
                key={service.id}
                className="transition hover:shadow-md hover:-translate-y-0.5"
              >
                <CardBody>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-brand-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {service.short}
                  </p>
                  <Link
                    to="/services"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
                  >
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </CardBody>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HomeServices
