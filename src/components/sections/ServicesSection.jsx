import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { SERVICES } from '@/data/content'
import { Section, SectionHeader } from '@/components/ui/Section'

export default function ServicesSection({ showCta = true }) {
  return (
    <Section id="services" className="bg-white">
      <SectionHeader
        eyebrow="Our Services"
        title="End-to-end sourcing support from China"
        description="From finding the right supplier to delivering quality goods, we cover every step of the import process."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => {
          const Icon = service.icon
          return (
            <div key={service.id} className="card flex flex-col p-6 md:p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-slate-900">
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
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>

      {showCta && (
        <div className="mt-10 text-center">
          <Link to="/services" className="btn-outline">
            View all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </Section>
  )
}
