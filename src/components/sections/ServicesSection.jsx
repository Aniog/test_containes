import { Link } from "react-router-dom"
import { ArrowRight, Check } from "lucide-react"
import { Card } from "@/components/ui/card"
import { SectionHeading } from "@/components/ui/section-heading"
import { Button } from "@/components/ui/button"
import { services } from "@/data/content"

export default function ServicesSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Sourcing services that cover the full journey"
          description="From finding the right factory to delivering inspected goods at your door, we manage every step so you don't have to."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.id} className="flex flex-col p-6 transition-shadow hover:shadow-md md:p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <service.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-ink">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{service.desc}</p>
              <ul className="mt-4 space-y-2">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-slate-700">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button as={Link} to="/services" variant="secondary">
            Explore all services
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
