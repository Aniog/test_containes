import { BadgeCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '@/components/shared/PageHero'
import { primaryCta, services } from '@/content/siteContent'

const Services = () => {
  return (
    <div>
      <PageHero
        eyebrow="Services"
        title="Sourcing support built around supplier reliability, quality control, and execution clarity"
        description="SSourcing China helps buyers manage the practical sourcing work that often creates risk between first contact with a factory and final shipment readiness."
        primaryAction={{ label: primaryCta, to: '/contact#inquiry-form' }}
        secondaryAction={{ label: 'See the process', to: '/how-it-works' }}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-6 lg:grid-cols-2 lg:px-8">
          {services.map((service, index) => (
            <article key={service.title} className="rounded-[2rem] border border-site-border bg-white p-6 shadow-sm md:p-8">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Service {String(index + 1).padStart(2, '0')}</p>
                <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-dark">B2B support</span>
              </div>
              <h2 className="mt-5 text-2xl font-semibold tracking-tight text-site-ink">{service.title}</h2>
              <p className="mt-4 text-base leading-7 text-site-muted">{service.summary}</p>
              <ul className="mt-6 grid gap-3 text-sm leading-7 text-site-muted">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <BadgeCheck className="mt-1 h-5 w-5 text-brand" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-site-border bg-site-surface py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="rounded-[2rem] border border-site-border bg-white p-6 shadow-sm md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">When buyers use us</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-site-ink">Use targeted support or broader sourcing coordination.</h2>
            <p className="mt-4 text-base leading-7 text-site-muted">
              Some buyers need help only with verification or inspections. Others want broader support across supplier search, production follow-up, and shipment coordination. We shape the scope around the project and the sourcing risk involved.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-site-border bg-white shadow-sm">
            <img
              alt="Factory inspection and buyer support"
              className="h-full w-full object-cover"
              data-strk-img-id="services-hero-img-01"
              data-strk-img="[services-title] [services-desc]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-6 rounded-[2rem] border border-site-border bg-brand-dark px-6 py-10 text-white shadow-sm lg:flex-row lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">Next step</p>
            <h2 id="services-title" className="mt-3 text-3xl font-semibold tracking-tight">Tell us what product and support you need.</h2>
            <p id="services-desc" className="mt-3 max-w-2xl text-base leading-7 text-white/80">
              We will review your brief and respond with practical next steps for supplier search, verification, quality control, or shipping support.
            </p>
          </div>
          <Link className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-dark transition hover:bg-site-bg" to="/contact#inquiry-form">
            {primaryCta}
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services
