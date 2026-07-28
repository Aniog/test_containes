import { Section, SectionHeader, Card } from "@/components/shared/Section"
import { services } from "@/data/content"
import { Link } from "react-router-dom"
import { ArrowRight, Check } from "lucide-react"

export default function ServicesPreview() {
  return (
    <Section id="services" className="bg-bg">
      <SectionHeader
        eyebrow="What We Do"
        title="Sourcing Services Built Around Your Order"
        subtitle="From finding the right factory to delivering finished goods at your door, we manage every step so you can focus on selling."
      />

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <Card key={service.title} className="flex flex-col">
              <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-primary mb-5">
                <Icon className="w-6 h-6" />
              </span>
              <h3 className="text-lg font-bold text-ink">{service.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{service.desc}</p>
              <ul className="mt-4 space-y-2">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-ink">
                    <Check className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </Card>
          )
        })}
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
        >
          View all services <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </Section>
  )
}
