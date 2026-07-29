import { ArrowRight, CheckCircle } from 'lucide-react'
import SectionHeader from '../SectionHeader'
import { services } from '../../data/siteContent'

export default function ServicesSection({ compact = false }) {
  const visibleServices = compact ? services.slice(0, 3) : services

  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Services"
          id="services-section-title"
          title="Sourcing support from supplier search to shipment handover"
          description="Choose the level of support you need, from targeted supplier screening to full production follow-up and shipping coordination."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleServices.map((service) => (
            <article key={service.title} className="overflow-hidden rounded-3xl border border-sourcing-mist bg-white shadow-soft">
              <img
                alt={service.title}
                className="h-52 w-full object-cover"
                data-strk-img-id={service.imageId}
                data-strk-img={`[${service.descId}] [${service.titleId}] [services-section-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="p-6">
                <h3 id={service.titleId} className="text-xl font-bold text-sourcing-navy">{service.title}</h3>
                <p id={service.descId} className="mt-3 text-sm leading-6 text-sourcing-muted">{service.description}</p>
                <ul className="mt-5 space-y-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex gap-2 text-sm text-sourcing-ink">
                      <CheckCircle className="h-5 w-5 shrink-0 text-sourcing-blue" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        {compact && (
          <a href="/services" className="mt-10 inline-flex items-center gap-2 rounded-full border border-sourcing-blue px-6 py-3 font-semibold text-sourcing-blue transition hover:bg-sourcing-blue hover:text-white">
            See all services <ArrowRight className="h-4 w-4" />
          </a>
        )}
      </div>
    </section>
  )
}
