import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { services } from '@/data/siteData'
import SectionIntro from './SectionIntro'

export default function ServicesSection({ showAll = true }) {
  const visibleServices = showAll ? services : services.slice(0, 6)

  return (
    <section className="bg-brand-ice py-16 text-brand-navy md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionIntro
            eyebrow="Services"
            title="End-to-end sourcing support, from supplier search to shipment handover"
            description="Choose only the services you need, or combine them into a structured sourcing project for better visibility and control."
          />
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:text-brand-navy">
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visibleServices.map((service) => {
            const Icon = service.icon
            return (
              <article key={service.title} className="rounded-2xl border border-brand-line bg-white p-6 text-brand-navy shadow-sm transition hover:-translate-y-1 hover:shadow-b2b">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-brand-blue">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold tracking-tight">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-brand-slate">{service.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
