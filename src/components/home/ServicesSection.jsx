import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { services } from '@/data/site'
import Icon from '@/components/shared/Icon'
import SectionHeading, { CTAButton } from '@/components/shared/SectionHeading'

export default function ServicesSection() {
  return (
    <section className="section-pad bg-canvas">
      <div className="container-page">
        <SectionHeading
          eyebrow="What We Do"
          title="Sourcing services that protect your order at every step"
          subtitle="From finding the right factory to delivering goods at your door, we manage the full process so you can buy from China with confidence."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.id} className="card flex flex-col">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy/5 text-navy">
                <Icon name={s.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
              <ul className="mt-4 space-y-1.5">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-ink">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                to="/services"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-steel hover:text-navy"
              >
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <CTAButton to="/services">View all services</CTAButton>
        </div>
      </div>
    </section>
  )
}
