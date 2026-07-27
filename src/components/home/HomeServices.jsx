import { Section, SectionHeader } from '@/components/ui/Section'
import Icon from '@/components/ui/Icon'
import Button from '@/components/ui/Button'
import { SERVICES } from '@/content'
import { ArrowRight } from 'lucide-react'

export default function HomeServices() {
  return (
    <Section>
      <SectionHeader
        eyebrow="What We Do"
        title="Sourcing services that cover the full journey"
        description="From finding the right factory to delivering inspected goods, we manage each step so you can buy from China with confidence."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            className="group rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/5 text-primary">
              <Icon name={service.icon} className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-foreground">
              {service.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {service.summary}
            </p>
            <ul className="mt-4 space-y-2">
              {service.points.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button to="/services" variant="outline">
          View All Services
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </Section>
  )
}
