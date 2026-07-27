import { Link } from 'react-router-dom'
import { Search, BadgeCheck, ClipboardCheck, Factory, Ship, Handshake, ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/shared/SectionHeading'
import { SERVICES } from '@/data/site'

const ICONS = { Search, BadgeCheck, ClipboardCheck, Factory, Ship, Handshake }

export default function ServicesSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Everything between your product idea and your warehouse"
          description="Use a single service — like a factory audit or pre-shipment inspection — or let us manage your entire China sourcing operation."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon]
            return (
              <div
                key={service.id}
                className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.short}</p>
                <Link
                  to="/services"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700"
                >
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
