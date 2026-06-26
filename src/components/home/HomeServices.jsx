import { Section, Container, SectionHeading, Card } from "@/components/ui/Section"
import Button from "@/components/ui/Button"
import { SERVICES } from "@/data/site"
import { ArrowRight } from "lucide-react"

export default function HomeServices() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What We Do"
            title="Sourcing services built around your order"
            description="From finding the right factory to delivering inspected goods, we cover every stage of buying from China."
          />
          <Button to="/services" variant="outline" className="shrink-0">
            View all services
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <Card key={service.id}>
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0B2545]/5 text-[#0B2545]">
                <service.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-[#0B2545]">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {service.summary}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
