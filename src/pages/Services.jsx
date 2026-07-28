import { Link } from "react-router-dom"
import {
  Search,
  ClipboardCheck,
  ShieldCheck,
  TrendingUp,
  Ship,
  Package,
} from "lucide-react"
import { useDocumentTitle } from "@/hooks/useDocumentTitle"
import { Button } from "@/components/ui/Button"
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

export default function Services() {
  useDocumentTitle("Sourcing Services | SSourcing China")

  return (
    <div>
      <section className="bg-slate-900 py-20 text-white">
        <div className="container-main">
          <span
            id="services-hero-subtitle"
            className="text-sm font-semibold uppercase tracking-wide text-accent"
          >
            Our Services
          </span>
          <h1 id="services-hero-title" className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight lg:text-5xl">
            Reliable sourcing support at every stage
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/70">
            From finding the right factory to shipping finished goods, our
            bilingual team manages the details that protect your order.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="container-main">
          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((service) => {
              const Icon = iconMap[service.icon]
              return (
                <Card key={service.id} className="flex flex-col overflow-hidden md:flex-row">
                  <div className="relative h-56 md:h-auto md:w-2/5 overflow-hidden">
                    <img
                      alt={service.title}
                      className="h-full w-full object-cover"
                      data-strk-img-id={`${service.imgId}-page`}
                      data-strk-img={`[${service.descId}] [${service.titleId}] [services-hero-subtitle] [services-hero-title]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                  <CardContent className="flex flex-1 flex-col p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle id={service.titleId}>{service.title}</CardTitle>
                    <CardDescription id={service.descId} className="mt-2 flex-1">
                      {service.description}
                    </CardDescription>
                    <div className="mt-4">
                      <Button asChild variant="outline" size="sm">
                        <Link to="/contact">Request this service</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="mt-16 rounded-xl bg-primary p-8 text-center text-white lg:p-12">
            <h2 className="text-2xl font-bold lg:text-3xl">
              Not sure which service fits your project?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-white/80">
              Send us your product details and we will recommend the right
              sourcing support for your needs.
            </p>
            <div className="mt-6">
              <Button asChild variant="secondary" size="lg">
                <Link to="/contact">Get a Free Sourcing Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
