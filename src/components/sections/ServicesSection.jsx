import { services } from '../../data/siteContent'
import SectionHeading from '../common/SectionHeading'

export default function ServicesSection({ showIntro = true }) {
  return (
    <section className="bg-brand-surface px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {showIntro && (
          <SectionHeading
            eyebrow="Services"
            title="Practical sourcing support across the China supply chain"
            text="Choose focused help for one stage or coordinate the full process from supplier search to quality checks and shipment handover."
          />
        )}
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article className="rounded-3xl border border-slate-200 bg-white p-6 text-brand-ink shadow-sm transition hover:-translate-y-1 hover:shadow-xl" key={service.title}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-muted text-brand-blue">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-brand-navy">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-brand-subtle">{service.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
