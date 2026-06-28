import { Section, SectionContainer, SectionHeading } from "@/components/ui/Section"
import Icon from "@/components/ui/Icon"
import Button from "@/components/ui/Button"
import { SERVICES } from "@/data/content"

export default function ServicesPreview() {
  return (
    <Section id="services" className="bg-white">
      <SectionContainer>
        <SectionHeading
          eyebrow="What We Do"
          title="Sourcing services that cover the full journey"
          description="From finding the right factory to delivering goods at your door, each service can be used on its own or combined into a full program."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:border-primary/30 hover:shadow-md md:p-8"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/5 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <Icon name={service.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {service.summary}
              </p>
              <ul className="mt-4 space-y-2">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button to="/services" variant="secondary">
            Explore All Services
          </Button>
        </div>
      </SectionContainer>
    </Section>
  )
}
