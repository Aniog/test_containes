import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { services } from "@/data/services"
import { Card, CardBody } from "@/components/ui/card"
import { Container, SectionHeader } from "@/components/shared/Section"

export default function HomeServices() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <Container>
        <SectionHeader
          eyebrow="What We Do"
          title="Sourcing services that cover the full order lifecycle"
          description="From finding the right factory to delivering finished goods, each service is designed to reduce risk and keep your order on track."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card
                key={service.id}
                className="transition hover:-translate-y-1 hover:shadow-lift"
              >
                <CardBody>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-light">
                    <Icon className="h-6 w-6 text-brand" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-ink leading-relaxed">
                    {service.summary}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm text-slate-ink"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark"
          >
            View all services in detail
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  )
}
