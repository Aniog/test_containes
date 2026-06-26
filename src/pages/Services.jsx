import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Icon } from '@/components/ui/Icon'
import { Button } from '@/components/ui/Button'
import { services, site } from '@/data/site'
import { Link } from 'react-router-dom'
import { useStrkImages } from '@/hooks/useStrkImages'

export default function Services() {
  const containerRef = useStrkImages()

  return (
    <div ref={containerRef}>
      <section className="bg-primary text-white py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <span className="inline-block uppercase tracking-wide text-accent font-semibold text-sm mb-4">
              What We Do
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Sourcing Services for Global Buyers</h1>
            <p className="text-lg text-primary-light leading-relaxed">
              Practical, on-the-ground support across the entire sourcing journey — from supplier
              identification to final delivery.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="space-y-16">
            {services.map((service, idx) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid gap-8 md:grid-cols-2 items-center ${
                  idx % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                  <div
                    className="rounded-xl bg-neutral-100 h-64 md:h-80 bg-cover bg-center"
                    data-strk-bg-id={`service-bg-${service.id}-c1d2e3`}
                    data-strk-bg={`[service-${service.id}-title] [service-${service.id}-desc]`}
                    data-strk-bg-ratio="16x9"
                    data-strk-bg-width="800"
                  />
                </div>
                <div className={idx % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light text-primary mb-5">
                    <Icon name={service.icon} className="h-6 w-6" />
                  </div>
                  <h2
                    id={`service-${service.id}-title`}
                    className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4"
                  >
                    {service.title}
                  </h2>
                  <p
                    id={`service-${service.id}-desc`}
                    className="text-neutral-600 leading-relaxed mb-6"
                  >
                    {service.description}
                  </p>
                  <p className="text-neutral-600 leading-relaxed mb-6">
                    Our team works directly with factories, provides written reports, and keeps you
                    updated so you can make informed decisions without flying to China.
                  </p>
                  <Button as={Link} to="/contact" variant="primary">
                    {site.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}
