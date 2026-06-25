import { services } from '../../data/siteContent'
import SectionHeader from './SectionHeader'

const ServicesSection = ({ full = false }) => (
  <section className="bg-white py-16 text-slate-950 md:py-24">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <SectionHeader
        eyebrow="Services"
        title="Sourcing support from supplier search to shipment handover"
        description="Choose targeted support for one sourcing challenge or use SSourcing China as a practical coordination partner across the full buying process."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <article className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-950 shadow-sm transition hover:-translate-y-1 hover:shadow-lg" key={service.title}>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
              {full && (
                <p className="mt-4 border-t border-slate-100 pt-4 text-sm font-medium text-blue-700">
                  Practical reporting and buyer-focused communication included.
                </p>
              )}
            </article>
          )
        })}
      </div>
    </div>
  </section>
)

export default ServicesSection
