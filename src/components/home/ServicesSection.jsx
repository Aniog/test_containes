import {
  Search,
  ClipboardCheck,
  ShieldCheck,
  TrendingUp,
  Ship,
  Package,
} from "lucide-react"
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/Card"
import { services } from "@/data/siteData"

const iconMap = {
  Search,
  ClipboardCheck,
  ShieldCheck,
  TrendingUp,
  Ship,
  Package,
}

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="container-main">
        <div className="max-w-3xl">
          <span
            id="services-subtitle"
            className="text-sm font-semibold uppercase tracking-wide text-primary"
          >
            What We Do
          </span>
          <h2 id="services-title" className="mt-2 section-title">
            End-to-end sourcing support
          </h2>
          <p className="section-subtitle">
            From the first supplier search to final delivery, we manage the
            details so you can focus on growing your business.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon]
            return (
              <Card key={service.id} className="flex flex-col overflow-hidden">
                <div className="relative h-44 overflow-hidden">
                  <img
                    alt={service.title}
                    className="h-full w-full object-cover"
                    data-strk-img-id={service.imgId}
                    data-strk-img={`[${service.descId}] [${service.titleId}] [services-subtitle] [services-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <CardContent className="flex flex-1 flex-col">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle id={service.titleId}>{service.title}</CardTitle>
                  <CardDescription id={service.descId} className="mt-2 flex-1">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
