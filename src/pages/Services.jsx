import PageHero from '@/components/shared/PageHero'
import { Section } from '@/components/ui/Section'
import Icon from '@/components/ui/Icon'
import CtaBanner from '@/components/shared/CtaBanner'
import { SERVICES } from '@/content'
import { CheckCircle2 } from 'lucide-react'

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Sourcing services for global buyers"
        description="A complete set of services that cover every stage of buying from China — from finding the right factory to delivering inspected goods."
      />

      <Section>
        <div className="space-y-12">
          {SERVICES.map((service, idx) => (
            <div
              key={service.id}
              id={service.id}
              className="grid gap-8 lg:grid-cols-2 lg:items-center scroll-mt-24"
            >
              <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/5 text-primary">
                  <Icon name={service.icon} className="h-6 w-6" />
                </div>
                <h2 className="mt-4 text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
                  {service.title}
                </h2>
                <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                  {service.summary}
                </p>
                <ul className="mt-5 space-y-3">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-foreground">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="rounded-xl border border-border bg-muted p-8 h-full min-h-[200px] flex items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-card text-primary shadow-sm">
                      <Icon name={service.icon} className="h-8 w-8" />
                    </div>
                    <p className="mt-4 text-sm font-medium text-muted-foreground">
                      {service.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CtaBanner />
    </>
  )
}
