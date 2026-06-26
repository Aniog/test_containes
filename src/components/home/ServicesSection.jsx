import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Icon } from '@/components/ui/Icon'
import { services } from '@/data/site'

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeading
          label="Our Services"
          title="End-to-End Sourcing Support"
          description="From supplier identification to shipment delivery, we cover the full sourcing process so you can focus on growing your business."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="group rounded-xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light text-primary">
                <Icon name={service.icon} className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">{service.title}</h3>
              <p className="text-neutral-600 leading-relaxed mb-4">{service.description}</p>
              <Link
                to={`/services#${service.id}`}
                className="inline-flex items-center text-primary font-semibold hover:text-primary-dark"
              >
                Learn more <span className="ml-1">→</span>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
