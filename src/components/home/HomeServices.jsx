import { ArrowRight } from "lucide-react"
import { Section, SectionHeading, Container } from "@/components/ui/section"
import Card from "@/components/ui/card"
import { services } from "@/data/content"

export default function HomeServices() {
  return (
    <Section id="services">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What we do"
            title="Sourcing services that cover the whole journey"
            description="From finding the right supplier to shipping your goods, each step is handled by a team on the ground in China."
          />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.id}
              className="group flex flex-col p-6 transition-shadow hover:shadow-lg"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <service.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <ul className="mt-4 space-y-2">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-sm text-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
              <a
                href="/services"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:text-accent"
              >
                Learn more
                <ArrowRight className="h-4 w-4" />
              </a>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
