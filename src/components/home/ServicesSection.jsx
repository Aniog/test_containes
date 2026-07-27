import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader.jsx'
import { services } from '@/data/siteData.js'

export default function ServicesSection({ compact = false }) {
  const items = compact ? services.slice(0, 6) : services

  return (
    <section className="bg-sourcing-soft py-16 text-sourcing-ink md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Services"
            title="Sourcing support from supplier search to shipment handover"
            description="Choose full project support or targeted help for supplier verification, inspections, production follow-up, and China-side coordination."
          />
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-bold text-sourcing-blue hover:text-sourcing-navy">
            Explore all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((service) => {
            const Icon = service.icon
            return (
              <article key={service.title} className="rounded-2xl border border-sourcing-line bg-white p-6 text-sourcing-ink shadow-sm transition hover:-translate-y-1 hover:shadow-b2b">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sourcing-sky text-sourcing-blue">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-sourcing-navy">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-sourcing-muted">{service.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
