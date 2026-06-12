import { services } from '@/data/siteData'
import SectionHeading from './SectionHeading'

export default function ServicesGrid({ compact = false }) {
  return (
    <section className="bg-white py-16 text-slate-900 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {!compact && (
          <SectionHeading
            eyebrow="Sourcing services"
            title="From supplier search to shipment coordination"
            text="SSourcing China supports the practical steps overseas buyers need when purchasing from China: finding suitable suppliers, checking factories, controlling quality, and keeping shipments organized."
          />
        )}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article key={service.title} className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-900 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-950">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">{service.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
