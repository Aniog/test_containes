import { CheckCircle2 } from 'lucide-react'
import PageHero from '@/components/sections/PageHero'
import CTABand from '@/components/sections/CTABand'
import { SERVICES } from '@/data/content'

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Sourcing services for global buyers"
        description="A complete set of services that take you from product idea to delivered goods, with quality checked at every stage."
        bgId="services-hero-bg-2a1b"
        queryIds="[services-hero-desc] [services-hero-title]"
      />
      <span id="services-hero-title" className="hidden">Sourcing services for global buyers</span>
      <span id="services-hero-desc" className="hidden">
        Supplier sourcing, factory verification, quality inspection, production follow-up, and shipping coordination.
      </span>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-8">
            {SERVICES.map((service, idx) => {
              const Icon = service.icon
              const reversed = idx % 2 === 1
              return (
                <div
                  key={service.id}
                  className="grid gap-6 rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8 lg:grid-cols-3 lg:gap-10"
                >
                  <div className={reversed ? 'lg:order-2' : ''}>
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h2 className="mt-4 text-xl font-bold text-foreground">{service.title}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{service.summary}</p>
                  </div>
                  <div className={`lg:col-span-2 ${reversed ? 'lg:order-1' : ''}`}>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      What is included
                    </h3>
                    <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                      {service.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-start gap-2 rounded-lg border border-border bg-background p-3 text-sm text-foreground/80"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  )
}
